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
        "tags": ["lombok"],
        "url": "/til/1-TIL/",
        "teaser": null
      },{
        "title": "1주차",
        "excerpt":"Today I Learned 객체와 클래스는 무엇이 다른가? 인스턴스는 무엇인가 절차형, 객체지향, 함수형 프로그래밍은 무엇인가 함수형은 데이터를 핸들링 함수형은 어떤 데이터가 들어가도 로직 수행 후 의도한 데이터를 리턴한다. 객체지향은 여기에 상태까지 관리해 줘야 하기 때문에 신경 쓸것이 많다. 어플리케이션은 함수형과 객체지향을 모두 사용한다. 내가 매일 작업하는 로직들은 함수형 이지만, 디비에 접근하는...","categories": ["TIL"],
        "tags": ["java"],
        "url": "/til/1%EC%A3%BC%EC%B0%A8/",
        "teaser": null
      }]
