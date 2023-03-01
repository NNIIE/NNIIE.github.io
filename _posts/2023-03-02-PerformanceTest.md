---
layout: single
title:  "Performance Test"
categories: TIL
tag: [JMH]
author_profile: false
toc: true
toc_label: "TIL"
toc_sticky: true
# toc_icon: "heart"  # corresponding Font Awesome icon name (without fa prefix)
---
<br><br><br>

# JMH
이런저런 요구사항에서 내가 작성한 코드가 효율적일까? 라는 의문이 생기기 마련이다.
<br>
작성한 로직을 요구사항에 맞춰 `Big-O` 표기법으로 계산해 시간복잡도를 계산할 수도 있고,
<br>
운영환경에서 `Stress Test` 를 진행하여 성능을 측정할 수도 있지만 작은 규모의 코드조각에
<br>
대한 측정을 더 빠르고 간단하게 사용할 수 있는 방법은 `JMH` 를 사용하는 것이다.
<br>
<br>
`JMH` 는 `JVM` 상에서 실행되는 코드의 성능을 측정하기 위한 벤치마크 도구로써, 성능측정은 일반적으로
<br>
코드실행시간, 메모리사용량, GC활동 등을 측정하여 수행하고 실행 결과에 대한 통계 및 분석을 제공한다.

<br>
<br>

**의존성 추가**

---
사용하기 위한 간단한 방법은 Gradle, Maven 등의 빌드시스템에 의존성을 추가하면 된다.

```groovy
dependencies {
    compile 'org.openjdk.jmh:jmh-core:{version}'
    compile 'org.openjdk.jmh:jmh-generator-annprocess:{version}'
}
```
```xml
<dependencies>
    <dependency>
        <groupId>org.openjdk.jmh</groupId>
        <artifactId>jmh-core</artifactId>
        <version>${jmh.version}</version>
    </dependency>
    <dependency>
        <groupId>org.openjdk.jmh</groupId>
        <artifactId>jmh-generator-annprocess</artifactId>
        <version>${jmh.version}</version>
    </dependency>
</dependencies>
```

---
<br>

**@Benchmark**
<br>

* **Mode.Throughput** : 시간당 처리량 측정
* **Mode.AverageTime** : 평균 실행 시간 측정
* **Mode.SampleTime** : 실행 시간 샘플링 측정
* **Mode.SingleShotTime** : 단일 실행 시간 측정
* **Mode.All** : 모든 시간 측정

---
<br>

**@OutputTimeUnit**
<br>

* **TimeUnit.NANOSECONDS** : 나노
* **TimeUnit.MICROSECONDS** : 마이크로
* **TimeUnit.MILLISECONDS** : 밀리
* **TimeUnit.SECONDS** : 초
* **TimeUnit.MINUTES** : 분
* **TimeUnit.HOURS** : 시간
* **TimeUnit.DAYS** : 일

---
<br>

**@State**
<br>

* **Scope.Benchmark** : 벤치마크 전체에서 공유
* **Scope.Thread** : 각 스레드마다 별도로 생성. 멀티스레드 환경에서 안전
* **Scope.Group** : 벤치마크 실행 그룹에서 공유

---
<br>

**@Setup**
<br>

* **Level.Trial** : 벤치마크 전체에서 한 번만 실행
* **Level.Iteration** : 벤치마크 반복마다 실행
* **Level.Invocation** : 각 메서드 호출마다 실행

---
<br>

**@TearDown**
<br>

* **Scope.Benchmark** : 벤치마크 전체에서 공유
* **Scope.Thread** : 각 스레드마다 별도로 생성. 멀티스레드 환경에서 안전
* **Scope.Group** : 벤치마크 실행 그룹에서 공유

---
<br>

**예제**
```xml
<dependency>
    <groupId>org.openjdk.jmh</groupId>
    <artifactId>jmh-core</artifactId>
    <version>1.19</version>
</dependency>
<dependency>
    <groupId>org.openjdk.jmh</groupId>
    <artifactId>jmh-generator-annprocess</artifactId>
    <version>1.19</version>
</dependency>
```
```java
@State(Scope.Benchmark)
public class StreamBenchmark {

    private ForkJoinPool forkJoinPool = new ForkJoinPool(10);

    final HashSet<PersonDTO> personSet = new HashSet<>();
    final HashSet<PersonSession> streamSet = new HashSet<>();
    final HashSet<PersonSession> parallelStreamSet = new HashSet<>();

    public static void main(String[] args) {
        Options opt = new OptionsBuilder()
            .include(StreamBenchmark.class.getSimpleName())
            .warmupIterations(5)            // JVM warm-up 반복 횟수
            .measurementIterations(10)      // warm-up 이후 실제 실행 횟수
            .fork(1)                        // 하나의 JVM 에서 실행 횟수
            .thread(2)                      // 사용할 스레드 수
            .build();
        new Runner(opt).run();
    }

    @Benchmark
    @BenchmarkMode(Mode.AverageTime)
    @OutputTimeUnit(TimeUnit.MILLISECONDS)
    public void streamTest() {
        personSet.stream()
                .map(PersonSession::from)
                .collect(Collectors.toCollection(HashSet::new));
    }

    @Benchmark
    @BenchmarkMode(Mode.AverageTime)
    @OutputTimeUnit(TimeUnit.MILLISECONDS)
    public void parallelStreamTest1(){
        forkJoinPool.submit(() -> {
            personSet.parallelStream()
                    .map(PersonSession::from)
                    .collect(Collectors.toCollection(HashSet::new));
        });
    }

    @Benchmark
    @BenchmarkMode(Mode.AverageTime)
    @OutputTimeUnit(TimeUnit.MILLISECONDS)
    public void parallelStreamTest2() {
        personSet.parallelStream()
                .map(PersonSession::from)
                .collect(Collectors.toCollection(HashSet::new));
    }

    // 사전 셋업
    @Setup(Level.Trial)
    public void setup() {
        IntStream.range(0, 2001).forEach(i -> {
            PersonDTO personDTO = new PersonDTO();
            personDTO.setName("abc");
            personDTO.setAge(i);
            personSet.add(personDTO);
        });
    }

    // pool 종료
    @TearDown(Level.Trial)
    public void tearDown() {
        forkJoinPool.shutdown();
    }

    @Getter
    @Setter
    @EqualsAndHashCode
    static class PersonDTO {
        private String name;
        private int age;
    }

}
```
<br>
**결과**
<br>

![이미지](/images/2021-05-10-first-posting/JMH.png)



<br>
<br>
<br>
<br>

