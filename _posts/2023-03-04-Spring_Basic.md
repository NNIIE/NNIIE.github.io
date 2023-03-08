---
layout: single
title:  "Spring Basic"
categories: TIL
tag: []
author_profile: false
toc: true
toc_label: "TIL"
toc_sticky: true
# toc_icon: "heart"  # corresponding Font Awesome icon name (without fa prefix)
---
<br><br><br>

# IoC 컨테이너
**IoC** 는 객체간의 의존성 관리를 프레임워크가 대신 수행하는 디자인 패턴이다.
<br>
**IoC 컨테이너** 는 스프링 프레임워크의 핵심 기능 중 하나이다.
<br>
객체를 직접 생성하는 대신 객체를 생성하고 관리하는 책임을 프레임워크에게 위임하는걸 의미한다.
* 객체의 라이프사이클 및 관리의 간소화
	* 개발자가 아닌 프레임워크가 수행
* 객체간의 결합도 감소
	* IoC 가 의존성을 자동으로 주입

<br>
<br>
<br>
<br>

# @Autowire
의존성 주입을 자동으로 처리하기 위한 어노테이션
<br>
적용된 필드, 생성자, 메서드 파라미터에 해당하는 객체를 스프링이 자동으로 생성하고
<br>
필요한 의존성을 주입하여 객체간의 결합도를 줄인다.
<br>
기본적으로 타입을 이용한 의존성 주입을 수행한다.

<br>

**동작방식**
* 스프링이 **@Autowired** 가 선언된 곳의 클래스의 빈 객체를 생성
* 스프링은 생성된 빈 객체를 검색해 @Autowired 어노테이션이 선언된 필드, 생성자 등을 탐색
* **@Autowired** 어노테이션이 적용된 위치에서 필요한 의존성을 주입
	* 의존성은 자동으로 생성된 빈 객체 중 해당 타입과 일치하는 객체를 찾아서 주입
* 의존성 주입이 완료된 빈 객체가 스프링 컨테이너에 등록되어 관리됨
* 컴파일 타임에 의존성이 결정된다.

<br>
<br>
<br>
<br>

# @Component
해당 클래스가 스프링 빈으로 등록되어야 함을 나타낸다.
<br>
스프링 컨테이너는 **@Component** 가 선언된 클래스를 스캔해 해당 클래스를 스프링
<br>
빈으로 등록한다. 이를 통해 객체의 라이프사이클에 대한 코드를 작성하지 않아도 된다.

<br>

# @ComponentScan
스프링 컨테이너는 **@ComponentScan** 가 선언된 패키지를 스캔하여 해당 패키지에
속한 클래스 중 **@Component** 가 선언된 클래스를 찾아 빈으로 등록한다.

<br>
<br>
<br>
<br>

# 빈 스코프
빈의 라이프사이클 범위이다.

* **Singleton** 
    * 스프링에서 기본적으로 제공하는 스코프로, 애플리케이션 전체에서 하나의 인스턴스만 생성, 스프링 컨테이너가 생성하고 초기화한 후, 컨테이너가 종료될 때까지 유지된다.
	    * 하나의 인스턴스만 생성되기 때문에 메모리, 성능에 효율적이다.
	    * 빈 상태를 공유할 수 있으므로 멀티스레드 환경에서 주의가 필요하다.

<br>    

* **Prototype**
    * 각각의 요청마다 새로운 인스턴스를 생성, 해당 요청이 끝날 때까지 유지되며, 이후에는 소멸
	    * 각각의 요청마다 새로운 인스턴스를 생성하기 때문에 상태를 공유하지 않는다.
	    * 메모리 사용량, 객체 생성 비용이 높아질 수 있음

<br>
    
* **Request**
    * 웹 애플리케이션에서 HTTP 요청마다 새로운 인스턴스를 생성, 해당 요청이 처리될 때까지 유지되며, 이후에는 소멸
	    * 각각의 요청마다 새로운 인스턴스를 생성하기 때문에 상태를 공유하지 않는다.
	    * 메모리 사용량, 객체 생성 비용이 높아질 수 있음

<br>

* **Session**
    * 웹 애플리케이션에서 HTTP 세션마다 새로운 인스턴스를 생성, 해당 세션이 유지되는 동안에만 유지되며, 이후에는 소멸
	    * 각각의 HTTP 세션 마다 새로운 인스턴스를 생성하기 때문에 상태를 공유하지 않는다.
	    * 메모리 사용량, 객체 생성 비용이 높아질 수 있음

<br>

* **Global session**
    * 전역 세션마다 새로운 인스턴스를 생성, 해당 전역 세션이 유지되는 동안에만 유지되며, 이후에는 소멸된다.
	    * ServletContext 마다 새로운 인스턴스를 생성하기 때문에 상태를 공유하지 않는다.
	    * 메모리 사용량, 객체 생성 비용이 높아질 수 있음

<br>

* **Application**
    * 웹 애플리케이션에서 ServletContext마다 새로운 인스턴스를 생성, 웹 애플리케이션이 유지되는 동안에만 유지되며, 이후에는 소멸
	    * 각각의 요청마다 새로운 인스턴스를 생성하기 때문에 상태를 공유하지 않는다.
	    * 메모리 사용량, 객체 생성 비용이 높아질 수 있음

<br>

* **WebSocket**
    * WebSocket 세션이 시작될 때마다 새로운 인스턴스를 생성, WebSocket 세션이 유지되는 동안에만 유지되며, 이후에는 소멸

<br>
<br>
<br>
<br>

# Environment
스프링 어플리케이션에서 사용되는 환경변수들을 캡슐화한 인터페이스
<br>
어플리케이션의 구성정보들을 다양한 환경에 맞춰 쉽게 관리할 수 있다.
* **Profile**
    * @Profile 어노테이션으로 설정하거나 .properties 파일을 사용해 
	* 프로파일이 지정된 빈은 해당 프로파일이 활성화 된 경우에만 사용 가능 
* **Property**
    * 설정 정보를 담은 키-값
	* .properties / .yml 파일에 설정
	* @Value 어노테이션을 사용해 프로퍼티를 주입받음

<br>
<br>
<br>
<br>

# MessageSource
스프링 어플리케이션에서 다국어 지원을 위한 인터페이스

<br>
<br>
<br>
<br>

# ApplicationEventPublisher
이벤트를 발생시키는 인터페이스
<br>
ApplicationEventPublisher 를 주입받아 publishEvent() 메서드로 이벤트를 발생시키고
<br>
@EventListener 어노테이션으로 이벤트 발생시 해당 메서드가 자동으로 호출되게 한다.

<br>
<br>
<br>
<br>

# ResourceLoader
어플리케이션에서 리소스를 로드하는 인터페이스
* **Resource**
	* 파일시스템, 클래스패스, URL 등 의 리소스를 추상화한 인터페이스
	* 리소스를 추상화 하여 일관된 방식으로 처리할 수 있다.
* **Validation**
	* 유효성 검사를 위한 인터페이스
	* 실패 시 에러메시지 전달

<br>
<br>
<br>
<br>

# 데이터바인딩 추상화 - PropertyEditor / Converter 와 Fomatter
웹 요청 파라미터를 자바 객체에 바인딩 하는 인터페이스
* **PropertyEditor**
	* 문자열과 객체간의 변환을 수행하는 인터페이스
	* 문자열 값을 읽어와 자바 객체로 변환하거나, 자바객체를 문자열로 변환하여 저장
	* **Converter**
		* 문자열과 객체간의 일반적인 변환을 처리
	* **Fomatter**
		* 특정 타입의 변환을 처리

<br>
<br>
<br>
<br>

# spEL (스프링 Expression Language)
문자열 템플릿을 사용해 런타임에 객체 그래프를 조작하는 기능을 제공하는 표현 언어
<br>
스프링 빈 구성, XML 구성 파일, 애노테이션 구성 등에서 사용할 수 있는 다양한 형태의 표현식을
<br>
사용할 수 있고 이를 통해 스프링 애플리케이션을 보다 유연하고 동적으로 만들 수 있다.

```xml
<bean id="myBean" class="com.example.MyBean">
    <property name="message" value="#{'Hello, ' + systemProperties['user.name']}"/>
</bean>
```

```java
@Component
public class MyBean {
    @Value("#{systemProperties['user.name']}")
    private String userName;
}
```

<br>
<br>
<br>
<br>

# Null - Safety
스프링은 **Null - Safety** 를 지원하는 프레임워크 이다. 
* **Optional**
	* null을 반환할 가능성이 있는 메서드를 호출할 때 null 체크 없이 처리 가능
* **@NonNull**
	* 어노테이션 사용으로 매개변수, 필드, 반환값 등에 null 이 들어오지 않게 강제
* **Assert**
	* 런타임중에 조건을 검사해 예외를 발생시킴

<br>
<br>
<br>
<br>
