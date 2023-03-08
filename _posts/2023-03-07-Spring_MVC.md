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

* **DispatcherServlet**
    * 클라이언트로부터 요청이 들어오면, DispatcherServlet이 해당 요청을 받는다.
    * DispatcherServlet은 요청을 처리하기 위해 다양한 컴포넌트들과 상호작용하며, 요청과 응답을 처리하는데 필요한 기능들을 제공
* **HandlerMapping**
    * HandlerMapping을 통해 요청 URL에 해당하는 Controller를 찾는다.
    * HandlerMapping은 요청 URL을 컨트롤러 객체와 매핑시켜주는 역할을 함
* **Controller**
    * 요청에 대한 작업을 수행하고, Model 객체에 결과 데이터를 담아 DispatcherServlet으로 반환
    * @RestController 어노테이션을 사용하면 RESTful API 를 만들 수 있다.
* **Model and View**
    * Controller에서 반환된 Model 객체는 ViewResolver를 통해 요청 URL에 매핑되는 View로 전달
    * View는 JSP, Thymeleaf, Freemarker 등 다양한 템플릿 엔진을 사용할 수 있다.
* **Interceptor**
    * DispatcherServlet과 Controller 사이에서 요청 전/후에 추가적인 로직을 수행할 수 있는 기능
        * 인증, 로깅, 캐싱 등 다양한 기능을 구현 가능
    * 스프링에서는 HandlerInterceptor 인터페이스를 구현하여 Interceptor를 만들 수 있다.
* **Exception Handling**
    * 예외가 발생하면, DispatcherServlet은 등록된 ExceptionHandlerExceptionResolver를 통해 예외를 처리할 수 있는 HandlerExceptionResolver를 찾는다.
    * HandlerExceptionResolver는 예외 처리를 위한 컨트롤러를 찾아 예외를 처리하고, ViewResolver를 통해 예외에 대한 적절한 View를 선택한다.

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
스프링에서 사용하는 스프링부트의 @SpringBootApplication 같은 기능
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
스프링 MVC를 사용하는 웹 어플리케이션에서 웹 기능을 구성하는 데 사용되는 인터페이스
* **Interceptor 등록**
    * WebMvcConfigurer를 사용하여 스프링 MVC Interceptor를 등록할 수 있다. 
    * 이를 통해 요청 전/후에 추가적인 작업을 수행 가능
* **View Controller 등록**
    * View Controller는 특정 URL을 특정 View에 매핑할 수 있다. 
    * WebMvcConfigurer를 사용하여 View Controller를 등록 가능
* **Resource Handler 등록**
    * Resource Handler는 정적 자원 (이미지, CSS, 자바스크립트 등)에 대한 요청을 처리. 
    * WebMvcConfigurer를 사용하여 Resource Handler를 등록 가능
* **Formatter 등록**
    * Formatter는 특정 타입의 값을 원하는 형식으로 변환하는 데 사용
    * WebMvcConfigurer를 사용하여 Formatter를 등록 가능
* **Message Converter 등록**
    * Message Converter는 요청 및 응답 본문에 대한 자동 변환을 처리
    * WebMvcConfigurer를 사용하여 Message Converter를 등록 가능

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
컨트롤러에서 사용하는 매개변수를 변환할 때 사용되는 메소드를 정의하는 데 사용되는 어노테이션
* 메서드 / 클래스 레벨에서 사용 가능
* 컨트롤러 내에 선언된 메서드를 통해 요청 매개변수를 객체로 변환하는 로직을 구현할 수 있다.

```java
@Controller
public class MyController {

    @InitBinder
    public void initBinder(WebDataBinder binder) {
        SimpleDateFormat dateFormat = new SimpleDateFormat("yyyy-MM-dd");
        dateFormat.setLenient(false);
        binder.registerCustomEditor(Date.class, new CustomDateEditor(dateFormat, false));
    }

    @GetMapping("/example")
    public String example(Date date) {

    }
}
```

<br>
<br>
<br>
<br>

# @ExceptionHandler
예외 처리를 위해 사용되는 어노테이션
<br>
컨트롤러에서 예외가 발생했을 때, 예외 처리를 담당하는 메소드를 정의할 수 있다.
<br>
@ControllerAdvice 과 함께 사용되며, @ControllerAdvice rk 적용된 클래스 내에 @ExceptionHandler 를 사용하여
<br>
예외 처리 메소드를 정의한다. 예외 처리 메소드는 예외 객체를 매개변수로 받아 처리한다.
* ExceptionHandler 을 사용하면, 예외 처리를 전체적으로 일괄 처리할 수 있다.
* 또한, 예외 처리 로직을 별도의 클래스로 분리하여 관리할 수 있다.

```java
@ControllerAdvice
public class GlobalExceptionHandler {

    @ExceptionHandler(IllegalArgumentException.class)
    public ModelAndView handleIllegalArgumentException(IllegalArgumentException ex) {
        ModelAndView mav = new ModelAndView();
        mav.addObject("errorMessage", "잘못된 입력입니다.");
        mav.setViewName("error");
        return mav;
    }
}
```

<br>
<br>
<br>
<br>

# @ControllerAdvice
스프링 MVC에서 예외 처리와 같은 공통 로직을 처리하는 데 사용되는 어노테이션
* @ControllerAdvice 을 사용하면, 여러 컨트롤러에서 발생하는 예외를 중앙에서 처리할 수 있다.


<br>
<br>
<br>
<br>
