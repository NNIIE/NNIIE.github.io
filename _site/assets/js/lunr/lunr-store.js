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
        "excerpt":"Today I Learned 객체와 클래스 그리고 인스턴스 객체 물리적, 추상적으로 생각할 수 있는것 중에서 자신의 속성을 가지고 있고 다른것과 식별 가능한 것. 소프트웨어 에서 구현할 대상 클래스 java에서 객체를 생성하기 위한 일종의 설계도 속성(필드)을 가지고 있고, 행위(메소드)를 가지고있다. oop의 관점에서 클래스 타입으로 선언되었을 때 ‘객체’라고 부른다. 인스턴스 클래스를 가지고 객체를...","categories": ["TIL"],
        "tags": ["java"],
        "url": "/til/1%EC%A3%BC%EC%B0%A8/",
        "teaser": null
      }]
