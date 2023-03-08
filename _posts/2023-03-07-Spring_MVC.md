---
layout: single
title:  "Spring MVC"
categories: TIL
tag: []
author_profile: false
toc: true
toc_label: "TIL"
toc_sticky: true
# toc_icon: "heart"  # corresponding Font Awesome icon name (without fa prefix)
---
<br><br><br>

# 서블릿
* HTTP 요청에 대한 동적인 처리를 담당
* 서블릿 컨테이너를 통해 실행
* 멀티스레드 환경에서 안전하게 동작

<br>
<br>
<br>
<br>

# 서블릿 리스너 / 필터
<br>
**리스너**
<br>
<br>
웹 어플리케이션이 시작 / 종료 될 때 이벤트를 처리하는 인터페이스
<br>
web.xml 파일에서 설정할 수 있으며, 해당 이벤트가 발생할 때마다 서블릿 리스너가 호출된다
* **웹 어플리케이션 시작 / 종료 때의 이벤트**
	* 시작할 때 초기화 작업등의 수행
	* 종료될 때 자원정리 작업등의 수행
* **세션이 생성 / 종료 될 때의 이벤트**
	* 세션 생성 / 종료 시 로그 작성등의 추가작업 수행
* **요청이 들어올 때의 이벤트**
	* 요청 전 / 후 로깅, 보안 작업등의 추가작업 수행

<br>

**필터**
<br>
<br>
웹 애플리케이션에서 HTTP 요청을 가로채고, 이를 처리하는 기능을 제공하는 컴포넌트
<br>
web.xml 파일에서 설정할 수 있으며, 필터 체인에서 여러 필터를 연결하여 처리할 수 있.
<br>
필터 체인에서는 필터의 순서가 중요하며, 설정된 순서대로 필터가 처리된다.
* init(): 필터 초기화 작업 수행
* doFilter(): 요청을 가로채고 처리하는 작업 수행
* destroy(): 필터 종료 작업 수행

* 인증 및 권한 부여
* 요청 / 응답 데이터 변환 및 암호화
* 캐싱 및 압축
* 로깅
* 예외 처리

<br>

**둘의 차이**
<br>
<br>
리스너는 어플리케이션이 시작 / 종료 될 때 발생하는 이벤트를 처리하고
<br>
필터는 HTTP 요청을 가로채고 처리하는 기능을 제공한다.

<br>
<br>
<br>
<br>

# 스프링 IoC 컨테이너 연동
* **스프링 컨텍스트 로더 설정**
	* web.xml 파일에 ContextLoaderListener를 설정하여 스프링 IoC 컨테이너를 로딩하고, 스프링 IoC 컨테이너에서 생성한 객체를 사용할 수 있다.
* **어노테이션 연동**
	* 컨트롤러나 서비스 클래스 등에서 @Autowired 어노테이션을 이용하여 스프링 IoC 컨테이너에서 생성한 객체를 주입받아 사용할 수 있다.
* **스프링 MVC 프레임워크**
	* DispatcherServlet이 스프링 IoC 컨테이너를 로딩하고, 요청 처리를 위해 컨트롤러와 서비스 클래스를 스프링 IoC 컨테이너에서 생성한다.

<br>
<br>
<br>
<br>

# 스프링 MVC 연동
* **DispatcherServlet 설정**
	* 클라이언트로부터 들어오는 모든 요청을 받아서 처리하는 핵심 컨트롤러
	* web.xml 파일에 DispatcherServlet을 등록하고, 스프링 MVC 설정 파일을 지정
* **Handler Mapping 설정**
	* 요청 URL과 컨트롤러 클래스를 매핑하는 역할을 한다.
	* 설정파일에서 지정
* **View Resolver 설정**
	* 논리적인 View 이름을 실제 View객체와 매핑하는 역할을 한다.
	* 설정파일에서 지정
* **컨트롤러 클래스 작성**
	* 클라이언트의 요청을 처리하는 역할을 한다.
	* Controller는 사용자 입력값을 받아서 처리한 후 반환된 모델 객체를 DispatcherServlet에 반환
	* @Controller 어노테이션을 사용하여 정의 
	* @RequestMapping 어노테이션을 사용하여 URL 매핑을 설정
* **뷰 작성**
	* JSP, Thymeleaf 등 다양한 형태로 작성 가능

<br>
<br>
<br>
<br>

# DispatcherServlet
스프링 MVC에서 클라이언트로부터 들어오는 모든 요청을 받아서 처리하는 핵심 컨트롤러이다.
* **요청 분배**
	* 요청 URL과 HandlerMapping을 비교하여 요청을 처리할 컨트롤러 객체를 찾는다.
	* 이후, 해당 컨트롤러 객체를 실행하고, 컨트롤러에서 반환된 모델 데이터를 View 객체로 변환하여 응답
* **요청 처리**
	* HandlerAdapter를 사용하여 요청 처리를 위한 메서드를 호출
	* 메서드는 컨트롤러 객체에서 정의한 로직을 수행하고, 반환된 모델 데이터를 DispatcherServlet에 반환
* **예외 처리**
	* 요청 처리 중 발생한 예외를 처리하기 위해 ExceptionResolver를 사용
	* ExceptionResolver는 예외를 처리하고, 예외 발생 시 처리할 View 객체를 반환
* **View 처리**
	* 반환된 모델 데이터를 View 객체로 변환하여 응답
	* View 객체는 ViewResolver를 사용하여 논리적인 View 이름을 실제 View 객체와 매핑하여 반환
* **다국어 처리**
	* LocaleResolver를 사용하여 클라이언트의 언어 설정을 확인하고, 이를 기반으로 다국어 처리를 수행
* 이외에도 인터셉터를 이용하여 요청 전/후 추가작업을 실행하는 등의 다양한 기능을 제공한다.

<br>
<br>
<br>
<br>

# 스프링 MVC 구성요소

<br>
<br>
<br>
<br>

# 스프링 MVC 동작 원리

<br>
<br>
<br>
<br>

# 스프링 MVC 빈 설정

<br>
<br>
<br>
<br>

# @EnableWebMVC

<br>
<br>
<br>
<br>

# 도메인 클래스 컨버터

<br>
<br>
<br>
<br>

# 핸들러 인터셉터

<br>
<br>
<br>
<br>

# 리소스 핸들러

<br>
<br>
<br>
<br>

# HTTP 메시지 컨버터 
* HTTP 메시지 컨버터 JSON
* HTTP 메시지 컨버터 XML

<br>
<br>
<br>
<br>

# WebMVC Configurer

<br>
<br>
<br>
<br>

# 스프링 MVC 활용
* HTTP 메서드
* URI 패턴
* 미디어 타입
* 헤더 / 매개변수

<br>
<br>
<br>
<br>

# 핸들러메서드
* 아규먼트 / 리턴타입
* URI 패턴
* 요청 매개변수
* 폼 서브밋
* @ModelAttribute
* @Validated
* @SessionAttributes
* @ResponseBody & @HttpEntity
* @ResponseBody & ResponseEntity

<br>
<br>
<br>
<br>

# @ModelAttribute

<br>
<br>
<br>
<br>

# @initBinder

<br>
<br>
<br>
<br>

# @ExceptionHandler

<br>
<br>
<br>
<br>

# @ControllerAdvice


<br>
<br>
<br>
<br>
