---
layout: single
title:  "Annotation"
categories: TIL
tag: [java, Spring, Annotation]
author_profile: false
toc: true
toc_label: "TIL"
toc_sticky: true
# toc_icon: "heart"  # corresponding Font Awesome icon name (without fa prefix)
---
<br><br><br>



# @EnableScheduling
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