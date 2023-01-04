var store = [{
        "title": "22.11",
        "excerpt":"equals &amp; hashcode Object 클래스의 메소드이다. 모든 클래스가 Object를 상속받기 때문에 어떤 객체라도 Object의 메소드인 equals와 hashcode를 사용할 수 있다. equals // Object의 equals() public boolean equals(Object obj) { return (this == obj); } equals()는 오로지 참조값(객체의 주소값)이 같은지 즉, 동일 객체인지 확인하는 기능이다. equals 메소드는 두 객체를 비교해서 논리적으로...","categories": ["TIL"],
        "tags": ["Java"],
        "url": "/til/TIL/",
        "teaser": null
      },{
        "title": "이펙티브 자바 - 객체 생성과 파괴",
        "excerpt":"정적 팩토리 메소드 생성자 대신 정적 팩토리 메서드를 고려하라 // 정적 팩토리 메소드 ex public class Person { private final String name; private final int age; private Person(String name, int age) { this.name = name; this.age = age; } public static Person of(String name, int age) { return new Person(name,...","categories": ["Effective_Java"],
        "tags": [],
        "url": "/effective_java/%EC%9D%B4%ED%8E%99%ED%8B%B0%EB%B8%8C%EC%9E%90%EB%B0%94/",
        "teaser": null
      },{
        "title": "22.12",
        "excerpt":"lombok @getter - prefix lombok은 boolean 타입일 때 변수의 prefix가 is인 경우 getIsXXX 대신 isXXX 으로 get메서드를 만들어준다. import lombok.Getter; @Getter public class Person { private boolean isMan; ... } 이때 @Getter 로 만들어진 메서드는 getIsMan() 가 아니고 isMan() 가 된다. 결국 이 DTO 를 받을 경우 아래와 같다. {...","categories": ["TIL"],
        "tags": ["Lombok"],
        "url": "/til/1-TIL/",
        "teaser": null
      },{
        "title": "1주차",
        "excerpt":"Today I Learned 객체와 클래스 그리고 인스턴스 객체 물리적, 추상적으로 생각할 수 있는것 중에서 자신의 속성을 가지고 있고 다른것과 식별 가능한 것. 소프트웨어 에서 구현할 대상 클래스 java에서 객체를 생성하기 위한 일종의 설계도 속성(필드)을 가지고 있고, 행위(메소드)를 가지고있다. oop의 관점에서 클래스 타입으로 선언되었을 때 ‘객체’라고 부른다. 인스턴스 클래스를 가지고 객체를...","categories": ["TIL"],
        "tags": ["접근제어자","상속","다형성","Wrapper Class"],
        "url": "/til/1%EC%A3%BC%EC%B0%A8/",
        "teaser": null
      },{
        "title": "Annotation",
        "excerpt":"@EnableScheduling 스프링의 스케쥴링을 위한 어노테이션이다. 기본적으로 스프링에 의헤 생성된 한개의 Thread Pool에서 작동한다. 하나의 스케쥴이 돌고 있으면 그것이 다 끝나야 다음 스케쥴이 실행되기 때문에 설정을 통해 스케쥴에 대한 스레드풀을 생성하고 그 스레드풀을 사용해서 병렬적으로 처리하는게 좋을 수 있다. 스프링 스케쥴링에 사용 스프링 빈으로 등록해서 사용한다. Application Class에 @EnableScheduling 선언 scheduler를...","categories": ["TIL"],
        "tags": ["Spring Annotation"],
        "url": "/til/Annotation/",
        "teaser": null
      },{
        "title": "2주차",
        "excerpt":"Today I Learned enum 열거형이라고 부르며, 서로 연관된 상수들의 집합이다. 모든 열거형은 Enum클래스의 자손이며 Enum클래스의 멤버를 상속받는다. 특징과 장점 enum은 컴파일 후 public static final 필드이며 객체로 제공된다. 상수들은 JVM 메서드 영역에 자리한다. Enum클래스는 상수와 같이 인스턴스가 단 한번만 생성된다. 컴파일 시점에 타입안정성이 보장되기 때문에 private 생성자만을 가진다. 즉, 인스턴스...","categories": ["TIL"],
        "tags": ["Enum","Singleton","Interface","Abstract"],
        "url": "/til/2%EC%A3%BC%EC%B0%A8/",
        "teaser": null
      },{
        "title": "자료구조",
        "excerpt":"시간복잡도 알고리즘 효율성을 판단하는 지표로써, 알고리즘 수행에 걸리는 시간이 아닌 연산들이 몇번 이루어지는가 에 대한 지표이다. 메모리 사용량을 분석한 결과는 공간복잡도 이다. Big-O 표기법 빠른 순서 O(1) : 데이터의 크기에 상관없이 언제나 일정한 시간이 걸림 (index를 통한 접근) O(log₂ n) : 데이터가 커질수록 시간이 로그만큼 짧아짐 (이진탐색 / Tree) O(n)...","categories": ["Data_Structure"],
        "tags": ["Data Structure"],
        "url": "/data_structure/%EC%9E%90%EB%A3%8C%EA%B5%AC%EC%A1%B0/",
        "teaser": null
      },{
        "title": "3주차",
        "excerpt":"Today I Learned Property 속성이란 뜻이다. 해당 Object의 특징. 사람을 예로들면 피부색, 키, 나이, 몸무게 등이다. Property의 읽기와 쓰기는 일반적으로 getter 와 setter 메서드 호출로 변환된다. 자바는 property가 없고 코틀린이나 자바스크립트는 property를 사용 이건 왜그래? String String을 특별대우 하는 이유? String은 불변(immutable)하기 때문에 값을 변경할 수 없다? constant pool? String을...","categories": ["TIL"],
        "tags": ["String","Annotation","Exception","Property"],
        "url": "/til/3%EC%A3%BC%EC%B0%A8/",
        "teaser": null
      },{
        "title": "4주차",
        "excerpt":"Today I Learned CQRS Pattern (씨큐에스) : 아키텍쳐 패턴이다. 쿼리할때는 커맨드가 발생하면 안되고 어쩌고~ 커맨드부터 알아보자 하지만 간단하게 알아보자. Generic 아주 유용한 문법이고 대부분 최신 언어에선 사용한다. 타입시스템을 더 견고하게 사용하기 위해 제네릭을 사용한다 타입시스템 자바는 타입시스템에 관대해서 제네릭을 쓴다? 타입을 재사용하고 싶어서? -&gt; 이유는 제네릭 다이아몬드 문법 안에 어쩌고?...","categories": ["TIL"],
        "tags": ["Generic","시공간복잡도","Nested Class"],
        "url": "/til/4%EC%A3%BC%EC%B0%A8/",
        "teaser": null
      }]
