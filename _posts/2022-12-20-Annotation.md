---
layout: single
title:  "Annotation"
categories: TIL
tag: [Spring Annotation]
author_profile: false
toc: true
toc_label: "TIL"
toc_sticky: true
# toc_icon: "heart"  # corresponding Font Awesome icon name (without fa prefix)
---
<br><br><br>



# @EnableScheduling
---
스프링의 스케쥴링을 위한 어노테이션이다.
<br>
기본적으로 스프링에 의헤 생성된 한개의 `Thread Pool`에서 작동한다. 
<br>
하나의 스케쥴이 돌고 있으면 그것이 다 끝나야 다음 스케쥴이 실행되기 때문에 설정을 통해 스케쥴에 대한 스레드풀을 생성하고 
그 스레드풀을 사용해서 병렬적으로 처리하는게 좋을 수 있다.

* 스프링 스케쥴링에 사용
* 스프링 빈으로 등록해서 사용한다.
* Application Class에 @EnableScheduling 선언
* scheduler를 사용할 class에 @Component 선언, 메서드에 @Scheduled 선언
	* 메서드 타입은 void
	* 메서드에 매개변수 사용 불가

<br>

* ***왜 이거쓰는데?***
<br>
	`Spring Quartz`라는 더 많은 기능을 가진 스케줄러도 존재한다.
	<br>
	하지만 의존성이 추가되어야 하고 사용법이 좀 더 복잡하기 때문에 단순한 스케쥴링 작업에는 
	<br>
	별도의 추가적인 의존성이 필요없고 사용법이 간단한 `Spring Scheduler`를 추천한다.

<br>
<br>
<br>

# @Value
---
properties 파일의 설정정보를 key-value형태로 가져오는데 쓰인다.
<br>
단일값 주입에 권장되고 있으며 여러개의 값을 주입받아야 할 경우
<br>
`@ConfigurationProperties` 사용을 권장한다.


* ***이거 왜쓰는데?***
<br>
	만약 소스코드로 설정정보를 관리한다면 보안에도 좋지않고, 컴파일 된 바이트코드를 JVM에서 실행 후에 의미있는 정보가 되기때문에 서버를 내리지 않고는 변경할 수 없다.
	<br>
	하지만 properties 파일로 관리하면 key-value값만 불러서 치환하기 때문에 소스코드를 수정 할 필요가 없고 서버의 properties파일만 수정하면 되기 때문에 서버를 중단할 필요가 없다.
	<br>
	또한 각 서버환경에 따라 설정도 유연하게 관리할 수 있다.

<br>
<br>
<br>

# @Bean
---
* ***@Bean***
	* 스프링에서 IoC 컨테이너가 관리하는 자바 객체
	* 기본적으로 싱글톤으로 생성하고 관리한다.

* ***@Component***
	* 개발자가 직접 작성한 클래스를 Bean으로 등록할 때 사용한다.
	* 선언 시 Component-Scan에 의해 Bean으로 등록 된다.

* ***@Configuration***
	* 외부라이브러리 또는 내장 클래스를 Bean으로 등록하고자 할 경우 사용한다.
	* 1개 이상의 @Bean을 제공하는 클래스의 경우 반드시 @Configuration를 선언한다.
	* 선언 시 Component-Scan에 의해 Bean으로 등록 된다.

<br>
<br>
<br>

# @Async
---
스프링에서 제공하는 `Thread Pool`을 활용하는 비동기 메서드 지원 어노테이션이다.
<br>
간단하게 사용하고 싶다면 Application 클래스에 `@EnableAsync`를 선언하고 비동기로 작동하고자 하는 메서드에 `@Async`를 선언해주면 사용할 수 있다.
<br>
하지만 이럴 경우 기본설정인 `SimpleAsyncTaskExecutor`를 사용해서 스레드를 관리하지 않는 등의 문제가 있기 때문에 `AsyncConfigurer` 인터페이스를 상속받아 구현하는게 좋을 수 있다.

```java
@Configuration
@EnableAsync
public class AsyncConfig implements AsyncConfigurer {
	
	@Override
    public Executor getAsyncExecutor() {
        ThreadPoolTaskExecutor executor = new ThreadPoolTaskExecutor();
        executor.setCorePoolSize(5);
        executor.setMaxPoolSize(30);
        executor.setQueueCapacity(50);
        executor.setThreadNamePrefix("async-pool");
        executor.initialize();
        return executor;
    }
}
```

* ***@Configuration*** : 빈 등록
* ***@EnableAsync*** : 메서드에서 비동기 기능을 사용할 수 있게 한다.
* ***CorePoolSize*** : 기본 실행 대기하는 Thread의 수
* ***MaxPoolSize*** : 동시 동작하는 최대 Thread의 수
* ***QueueCapacity*** : MaxPoolSize 초과 요청에서 Thread 생성 요청시,  해당 요청을 Queue에 저장하는데 이때 최대 수용 가능한 Queue의 수,   Queue에 저장되어있다가 Thread에 자리가 생기면 하나씩 빠져나가 동작
* ***ThreadNamePrefix*** : 생성되는 Thread 접두사 지정
* 그 후 비동기를 원하는 메서드에 `@Async` 어노테이션을 선언해 주면 된다.

<br>

* ***주의할 점***
	* private method에 사용 불가
	* 자가호출 불가 즉, 이너클래스에서 사용 불가
	* QueueCapacity 초과 요청에 대한 비동기 method 호출시 방어 코드 작성