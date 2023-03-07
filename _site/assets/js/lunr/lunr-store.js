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
        "title": "1 Week",
        "excerpt":"객체와 클래스 그리고 인스턴스 객체 물리적, 추상적으로 생각할 수 있는것 중에서 자신의 속성을 가지고 있고 다른것과 식별 가능한 것. 소프트웨어 에서 구현할 대상 클래스 java에서 객체를 생성하기 위한 일종의 설계도 속성(필드)을 가지고 있고, 행위(메소드)를 가지고있다. oop의 관점에서 클래스 타입으로 선언되었을 때 ‘객체’라고 부른다. 인스턴스 클래스를 가지고 객체를 실체화 한것. 메모리에...","categories": ["TIL"],
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
        "title": "2 Week",
        "excerpt":"enum 열거형이라고 부르며, 서로 연관된 상수들의 집합이다. 모든 열거형은 Enum클래스의 자손이며 Enum클래스의 멤버를 상속받는다. 특징과 장점 enum은 컴파일 후 public static final 필드이며 객체로 제공된다. 상수들은 JVM 메서드 영역에 자리한다. Enum클래스는 상수와 같이 인스턴스가 단 한번만 생성된다. 컴파일 시점에 타입안정성이 보장되기 때문에 private 생성자만을 가진다. 즉, 인스턴스 생성을 제어하며 싱글톤을...","categories": ["TIL"],
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
        "title": "3 Week",
        "excerpt":"Property 속성이란 뜻이다. 해당 Object의 특징. 사람을 예로들면 피부색, 키, 나이, 몸무게 등이다. Property의 읽기와 쓰기는 일반적으로 getter 와 setter 메서드 호출로 변환된다. 자바는 property가 없고 코틀린이나 자바스크립트는 property를 사용 이건 왜그래? String 자바에서 제일 많이 사용되는 String은 특별대우를 받는다. Reference Type 이지만 기본적인 사용은 Primitive Type 이다. String 객체생성은...","categories": ["TIL"],
        "tags": ["String","Annotation","Exception","Property","JVM","GC"],
        "url": "/til/3%EC%A3%BC%EC%B0%A8/",
        "teaser": null
      },{
        "title": "4 Week",
        "excerpt":"CQRS Pattern Command and Query Responsibility Segregation (명령과 조회의 책임 분리) 즉, 명령(command)및 쿼리의 책임을 분리하는 패턴이다. 책임분리를 위해서는 코드의 모듈이 분리되어야 한다. read 와 write를 분리하는것을 뜻하며 어플리케이션까지만 적용할 수도 있고, DB의 모델까지만 분리할 수도 있고, DB 그 자체를 분리하여 적용할 수도 있다. 명령은 데이터중심이 아니라 작업 기반이어야 한다....","categories": ["TIL"],
        "tags": ["Generic","시공간복잡도","Nested Class","Multi Module","Lambda"],
        "url": "/til/4%EC%A3%BC%EC%B0%A8/",
        "teaser": null
      },{
        "title": "5 Week",
        "excerpt":"SOLID 객체지향의 5가지 설계원칙 단일 책임 원칙 (SRP) - 한 클래스는 하나의 책임만 가져야 한다. 모든 클래스는 하나의 책임만 가지며, 클래스는 그 책임을 완전히 캡슐화 해야한다. 한 클래스가 수행할 수 있는 책임 (기능)이 여러가지라면, 클래스 내부 함수끼리의 강한 결합이 발생할 가능성이 높아지고 이는 유지보수에 비효율적이다. 한 클래스를 변경하기 위해 한가지...","categories": ["TIL"],
        "tags": ["SOLID","스레드","인터프리터 언어","Blocking / Non Blocking","동시성","Servlet","Cookie / Session"],
        "url": "/til/5%EC%A3%BC%EC%B0%A8/",
        "teaser": null
      },{
        "title": "refactoring",
        "excerpt":"리팩토링? 소프트웨어 관점으로 결과의 변경 없이 코드의 구조를 재조정함 을 의미한다. 즉, 기능은 보존하면서 설계 및 구조를 개선하는 것이다. 소프트웨어 설계가 좋아진다. 소프트웨어를 이해하기 쉬워진다. 버그를 쉽게 찾을 수 있다. 프로그래밍 속도를 높일 수 있다. 진짜 중복 한 인스턴스가 변경되면, 동일한 변경을 그 인스턴스의 모든 복사본에 반드시 적용해야한다. 우발적 중복...","categories": ["TIL"],
        "tags": ["Refactoring"],
        "url": "/til/refactoring/",
        "teaser": null
      },{
        "title": "6 Week",
        "excerpt":"Web 아래 내용들을 무엇이다 라고 정의해보려고 했는데 명쾌하게 떠오르지 않았다. 이참에 한번 짚고 넘어가자. World Wide Web 인터넷에 연결된 사용자들이 서로의 정보를 공유할 수 있는 공간 텍스트, 그림, 소리, 영상 등의 멀티미디어 정보를 하이퍼텍스트 방식으로 연결 하이퍼텍스트 : 문서 내부에 또다른 문서가 연결되는 참조를 넣음 웹페이지들은 각각 연결되어 있는데 이로...","categories": ["TIL"],
        "tags": ["Apache Tomcat","Servlet Filter","Web","Session","OSI 7계층","TCP / UDP","Bulk 처리","SSR","CSR","HTTPS","Base64"],
        "url": "/til/6%EC%A3%BC%EC%B0%A8/",
        "teaser": null
      },{
        "title": "7 Week",
        "excerpt":"JDBC JDBC의 정의 데이터베이스 접근기술 JDBC Driver 서로 다른 디비들에 대한 연결방법이 모두 다르기 때문에 거기에 대응하기 위해서 사용한다. 결국 디비가 서로 다르고 다른 연결방식 이어도 모두 같은방식으로 다루고 싶고 또한 프로그래밍 단에서는 하나의 방식으로 사용하고 싶기 때문에 사용한다. JDBC API 드라이버가 매꿔준 걸 이용해서 같은방식으로 디비에 대한 접근을 제공하는...","categories": ["TIL"],
        "tags": ["MVC","MVP","MVVM","JDBC","Connection Pool"],
        "url": "/til/7%EC%A3%BC%EC%B0%A8/",
        "teaser": null
      },{
        "title": "8 Week",
        "excerpt":"Data Binding 분리된 View 와 Model 을 하나로 묶어 두개의 데이터 소스를 연결하고 동기화 하는 기술이다. Data Binding 은 대표적으로 단방향 데이터 바인딩과 양방향 데이터 바인딩으로 나뉜다. 백엔드 개발자에게 익숙한 MVC 패턴 은 View 대신 json 을 사용한다고 볼 수 있다. 프론트에선 요즘은 MVVM 패턴 을 자주 사용하는데 여기서 Data...","categories": ["TIL"],
        "tags": ["Data Binding","OOP"],
        "url": "/til/8%EC%A3%BC%EC%B0%A8/",
        "teaser": null
      },{
        "title": "OOP",
        "excerpt":"OOP 어플리케이션을 구성하는 요소들을 객체로 보고, 객체들을 유기적으로 연결하여 상호작용하는 방식으로 프로그래밍 하는걸 말한다. 데이터와 이를 처리하는 루틴을 하나의 독립된 객체 로 보고 기능적으로 관련된 데이터와 메서드를 묶는 것을 중심으로 한다. 재사용성, 유지보수 에 용이하고 대형 프로젝트에 적합하다. 하지만 속도가 상대적으로 느리고, 설계 시 많은 리소스가 들어간다. 객체 속성과 동작을 가진다. 속성은...","categories": ["TIL"],
        "tags": ["OOP","서브클래싱 / 서브타이핑","OOP와 상속","OOP와 캡슐화","OOP와 추상화","OOP와 다형성","Getter / Setter"],
        "url": "/til/OOP/",
        "teaser": null
      },{
        "title": "SOLID",
        "excerpt":"SOLID 객체지향 프로그래밍에서 소프트웨어 디자인 품질을 향상시키기 위한 다섯 가지 원칙이다. 이 원칙을 따르면 아래와 같은 장점이 있다. 유지보수성 향상 재사용성 항샹 확장성 향상 변경에 대한 유연성 향상 코드의 가독성 향상 결합도 감소 테스트 용이성 향상 오류발생 가능성 감소 SRP - 단일 책임 원칙 하나의 클래스는 하나의 책임을 가져야 한다는...","categories": ["TIL"],
        "tags": ["SRP","OCP","LSP","ISP","DIP"],
        "url": "/til/SOLID/",
        "teaser": null
      },{
        "title": "Design Pattern",
        "excerpt":"디자인패턴 일종의 설계 템플릿으로, 구체적인 구현방법을 제시하는것이 아니라 어떤 문제에 대해 어떤 구조와 접근법이 적절한지에 대한 가이드라인이다. 소프트웨어가 점점 복잡해지면서 다양한 문제가 발생하게 되었고, 이런 문제를 해결하기 위해 많은 개발자들이 각자의 방식으로 접근하다보니 비슷한 문제를 다른방식으로 해결하는 경우가 많았다. 결국 유지보수 등의 어려움을 겪게되고, 이러한 문제를 해결하기 위해 많은 개발자들의...","categories": ["TIL"],
        "tags": ["어댑터 패턴","프록시 패턴","데코레이터 패턴","싱글톤 패턴","템플릿 메서드 패턴","팩터리 메서드 패턴","전략 패턴","템플릿 콜백 패턴"],
        "url": "/til/%EB%94%94%EC%9E%90%EC%9D%B8%ED%8C%A8%ED%84%B41/",
        "teaser": null
      },{
        "title": "Spring",
        "excerpt":"IoC 컨테이너 IoC(제어의 역전) - 객체간의 결합도를 줄이기 위한 디자인 패턴중의 하나이다. IoC 컨테이너는 객체들의 생명주기와 객체간의 의존성을 관리한다. IoC 컨테이너는 BeanFactory 인터페이스를 구현한 ApplicationContext 를 통해 사용된다. ApplicationContext 는 빈 이라고 불리는 객체들의 라이프사이클, 빈 간의 의존성 등을 관리하며 필요한 시점에 빈을 제공해준다. 한마디로 객체의 생성과 관리를 전적으로 스프링...","categories": ["TIL"],
        "tags": ["IoC컨테이너","Bean","DI","AOP","PSA"],
        "url": "/til/Spring1/",
        "teaser": null
      },{
        "title": "Stream",
        "excerpt":"Stream Collection, Array 등의 데이터 소스를 함수형 프로그래밍의 Stream 형태로 다룰 수 있도록 지원하는 API Stream 은 대표적으로 Collection 데이터를 처리하거나 I/O 처리에 스트리밍 방식을 사용한다. 데이터의 필터링, 매핑, 정렬, 집계 등과 대량의 데이터를 처리할 때 효과적으로 사용할 수 있다. Stream의 스트리밍 방식 데이터를 작은 블록 단위로 분할하여 처리하는 방식...","categories": ["TIL"],
        "tags": ["Stream","Parallel Stream"],
        "url": "/til/Stream1/",
        "teaser": null
      },{
        "title": "Test",
        "excerpt":"테스트 피라미드 마틴파울러의 테스트피라미드는 어플리케이션을 테스트 하는 방법 중 하나로 다양한 종류의 테스트를 적절하게 조합하여 효율적인 테스트를 수행할 수 있도록 도와준다. 단위 테스트 가장 작은 단위인 모듈을 테스트 하는 단계 빠르고 자주 실행할 수 있으며, 주로 개발자들이 로직, 함수등을 검증한다. 어플리케이션의 다른부분과 독립적으로 수행할 수 있어야 한다. 마틴 파울러는 단위...","categories": ["TIL"],
        "tags": ["테스트피라미드"],
        "url": "/til/Test1/",
        "teaser": null
      },{
        "title": "Performance Test",
        "excerpt":"JMH 이런저런 요구사항에서 내가 작성한 코드가 효율적일까? 라는 의문이 생기기 마련이다. 작성한 로직을 요구사항에 맞춰 Big-O 표기법으로 계산해 시간복잡도를 계산할 수도 있고, 운영환경에서 Stress Test 를 진행하여 성능을 측정할 수도 있지만 작은 규모의 코드조각에 대한 측정을 더 빠르고 간단하게 사용할 수 있는 방법은 JMH 를 사용하는 것이다. JMH 는 JVM...","categories": ["TIL"],
        "tags": ["JMH"],
        "url": "/til/PerformanceTest/",
        "teaser": null
      },{
        "title": "Spring Basic",
        "excerpt":"      IoC 컨테이너   @Autowire   @Component / @ComponentScan   빈 스코프   Environment - 프로파일 / 프로퍼티   MessageSource   ApplicationEventPublisher   ResourceLoader   Resource 추상화 / Validation 추상화   데이터바인딩 추상화 - PropertyEditor / Converter 와 Fomatter   spEL (스프링 Expression Language)   프록시기반 AOP   @AOP   Null - Safety            ","categories": ["TIL"],
        "tags": [],
        "url": "/til/Spring_Basic/",
        "teaser": null
      },{
        "title": "Spring MVC",
        "excerpt":"스프링 MVC 서블릿 서블릿 리스터 / 필터 스프링 IoC 컨테이너 연동 스프링 MVC 연동 DispatcherServlet 스프링 MVC 구성요소 스프링 MVC 동작 원리 스프링 MVC 빈 설정 @EnableWebMVC 도메인 클래스 컨버터 핸들러 인터셉터 리소스 핸들러 HTTP 메시지 컨버터 HTTP 메시지 컨버터 JSON HTTP 메시지 컨버터 XML WebMVC Configurer 스프링 MVC 활용...","categories": ["TIL"],
        "tags": [],
        "url": "/til/Spring_MVC/",
        "teaser": null
      }]
