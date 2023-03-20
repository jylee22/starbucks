# Starbucks

- 스타벅스 랜딩페이지 클론코딩 및 온라인 강의 수업 따라하기
- 오픈 라이브러리 활용
- 작업한 시간 : 2일 소요

## 화면 동작
- 메인 화면 스크롤 애니메이션 동작 및 일부 버튼 동작만 가능
- 상단 sign in 클릭 시 화면 이동만 가능


## 문자 인코딩 설정

- html5의 UTF-8 적용

``` html
<meta charset="UTF-8"/>
```

- css3의 UTF-8 적용
``` css
@charset "UTF-8";
```

- 자바스크립트 defer 적용
``` html
<script defer src="./js/main.js"></script>
```

------

## 1. 오픈 그래프
- 웹사이트의 html 문서를 소셜 미디어로 공유할 때 보이는 정보 지정
- https://ogp.me/

``` html
<meta property="og:type" content="website" />
<meta property="og:site_name" content="Starbucks" />
<meta property="og:title" content="Starbucks Coffee Korea" />
<meta property="og:description" content="스타벅스는 세계에서 가장 큰 다국적 커피 전문점으로, 64개국에서 총 23,187개의 매점을 운영하고 있습니다." />
<meta property="og:image" content="./images/starbucks_seo.jpg" />
<meta property="og:url" content="https://starbucks.co.kr" />
```

## 2. 트위터 카드
- 웹사이트의 html 문서를 소셜 미디어로 공유할 때 보이는 정보 지정
- https://developer.twitter.com/en/docs/twitter-for-websites/cards/guides/getting-started

``` html
<meta property="twitter:card" content="summary" />
<meta property="twitter:site" content="Starbucks" />
<meta property="twitter:title" content="Starbucks Coffee Korea" />
<meta property="twitter:description" content="스타벅스는 세계에서 가장 큰 다국적 커피 전문점으로, 64개국에서 총 23,187개의 매점을 운영하고 있습니다." />
<meta property="twitter:image" content="./images/starbucks_seo.jpg" />
<meta property="twitter:url" content="https://starbucks.co.kr" />
```

## 3. Lodash
- 다양한 유틸리티 기능을 제공하는 자바스크립트 라이브러리
- https://cdnjs.com/libraries/lodash.js
``` html
<script src="https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.17.21/lodash.min.js" integrity="sha512-WFN04846sdKMIP5LKNphMaWzU7YpMyCU245etK3g/2ARYbPK9Ub18eG+ljU96qKRCWh+quCY7yefSmlkQw1ANQ==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
```

## 4. Gsap
- 자바스크립트로 제어하는 타임라인 기반의 애니메이션 라이브러리
- 스크롤 애니메이션 지원
- https://cdnjs.com/libraries/gsap
``` html
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.11.4/gsap.min.js" integrity="sha512-f8mwTB+Bs8a5c46DEm7HQLcJuHMBaH/UFlcgyetMqqkvTcYg4g5VXsYR71b3qC82lZytjNYvBj2pf0VekA9/FQ==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.11.4/ScrollToPlugin.min.js" integrity="sha512-tQFq+nb/TSS648SDzWbSj0A67t4I1PFzR0U6Oi/yEYFyUbAIwg74SOCbr7t2X1Rn+iln7sYwfh8y+z7p0gddOw==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
```

## 5. Swiper
- 전환과 여러 기본 동작을 갖춘 슬라이드 라이브러리
- https://swiperjs.com/
``` html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/swiper@9/swiper-bundle.min.css" />
<script src="https://cdn.jsdelivr.net/npm/swiper@9/swiper-bundle.min.js"></script>
```

## 6. ScrollMagic
- 스크롤과 요소의 상호 작용을 위한 자바스크립트 라이브러리
- https://cdnjs.com/libraries/ScrollMagic
``` html
<script src="https://cdnjs.cloudflare.com/ajax/libs/ScrollMagic/2.0.8/ScrollMagic.min.js" integrity="sha512-8E3KZoPoZCD+1dgfqhPbejQBnQfBXe8FuwL4z/c8sTrgeDMFEnoyTlH3obB4/fV+6Sg0a0XF+L/6xS4Xx1fUEg==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
```

## 7. Reset Css
- 브라우저의 기본으로 지정된 스타일시트 초기화
- https://www.jsdelivr.com/package/npm/reset-css
``` html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/reset-css@5.0.1/reset.min.css" />
```


## 8. Material Icons
- 구글 머터리얼 아이콘 활용
- https://fonts.google.com/icons
``` html
<link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
```


## 9. Google Fonts
- 구글 폰트 지정 (대부분 무료로 사용할 수 있지만 라이선스 확인하고 사용 필요)
- 사용한 폰트는 국문 "나눔고딕" / 영문 "Arial", "sans-serif" 사용
- https://fonts.google.com/
``` html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Nanum+Gothic:wght@400;700&display=swap" rel="stylesheet">
```
