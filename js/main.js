/* header > search */
const searchEl = document.querySelector('.search');
const searchInputEl = searchEl.querySelector('input');

searchEl.addEventListener('click', function(){
  searchInputEl.focus();
});

searchInputEl.addEventListener('focus', function(){
  searchEl.classList.add('focused');
  searchInputEl.setAttribute('placeholder', '통합검색'); // html속성 추가
});

searchInputEl.addEventListener('blur', function() {
  searchEl.classList.remove('focused');
  searchInputEl.setAttribute('placeholder', ''); // html속성 추가
});

/* header > badges */
const badgeEl = document.querySelector('header .badges');
const toTopEl = document.querySelector('#to-top');

// 스크롤 이벤트, _.throttle(함수, 시간)
window.addEventListener('scroll', _.throttle(function() {
  if(window.scrollY > 500){
    // 상단 배지 숨기기, gsap.to(요소, 지속시간, 옵션);
    gsap.to(badgeEl, .6, {
      opacity: 0,
      display: 'none'
    });

    // scroll > top 버튼 보이기
    gsap.to(toTopEl, .2, {
      x: 0
    });
  } else{ 
    // 상단 배지 보이기
    gsap.to(badgeEl, .6, {
      opacity: 1,
      display: 'block'
    });

    // scroll > top 버튼 숨기기
    gsap.to(toTopEl, .2, {
      x: 100
    });
  }
}, 300));

/* scroll > top */
toTopEl.addEventListener('click', function() {
  gsap.to(window, .7, {
    scrollTo: 0
  });
});

/* visual > fade-in */
const fadeEls = document.querySelectorAll('.visual .fade-in');

fadeEls.forEach(function(fadeEl, index){
  // gsap.to(요소, 지속시간, 옵션);
  gsap.to(fadeEl, 1, {
    delay: (index + 1) * .7,
    opacity: 1
  });
});

/* notice > swiper */
new Swiper('.notice-line .swiper', { // (선택자, 옵션)
  direction: 'vertical',
  autoplay: true,
  loop: true
});

/* notice > promotion */
new Swiper('.promotion .swiper', { // (선택자, 옵션)
  direction: 'horizontal',
  slidesPerView: 3, // 한번에 보여줄 슬라이드
  spaceBetween: 10, // 슬라이드 사이 여백
  centeredSlides: true, // 1번 슬라이드가 중앙
  loop: true,
  autoplay: {
    delay: 4000
  },
  pagination: {
    el: '.promotion .swiper-pagination', // 페이지 번호 요소 선택자
    clickable: true // 사용자의 페이지 번호 요소 제어
  },
  navigation: {
    prevEl: '.promotion .swiper-button-prev',
    nextEl : '.promotion .swiper-button-next'
  }
});

/* awards */
new Swiper('.awards .swiper', {
  direction: 'horizontal',
  autoplay: true,
  loop: true,
  spaceBetween: 30,
  slidesPerView: 5,
  navigation: {
    prevEl: '.awards .swiper-prev',
    nextEl: '.awards .swiper-next'
  }
});

/* notice > promotionToggle */
const promotionEl = document.querySelector('.promotion');
const promotionToggleBtn = document.querySelector('.toggle-promotion');
let isHidePromotion = false;

promotionToggleBtn.addEventListener('click', function() {
  isHidePromotion = !isHidePromotion;
  if(isHidePromotion){
    // 숨기기
    promotionEl.classList.add('hide');
  } else{
    // 보이기
    promotionEl.classList.remove('hide');
  }
});

/* youtube > floating */

// 범위 랜덤 함수(소수점 2자리까지)
function random(min, max) {
  // `.toFixed()`를 통해 반환된 문자 데이터를,
  // `parseFloat()`을 통해 소수점을 가지는 숫자 데이터로 변환
  return parseFloat((Math.random() * (max - min) + min).toFixed(2))
}

function floatingObj(selector, delay, size){
  gsap.to(selector, random(1.5, 2.5), {
    y: size,
    repeat: -1, // 무한 반복
    yoyo: true, // 제자리로 돌리기
    ease: Power1.easeOut,
    delay: random(0, delay)
  }); // (요소, 시간, 옵션)
}
floatingObj('.floating1', 1, 15);
floatingObj('.floating2', .5, 15);
floatingObj('.floating3', 1.5, 20);

/*scroll event*/
const spyEls = document.querySelectorAll('section.scroll-spy');

spyEls.forEach(function(spyEl) {
  new ScrollMagic.Scene({
    triggerElement: spyEl, // 보여짐 여부를 감사항 요소의 지정
    triggerHook: .8,
  })
  .setClassToggle(spyEl, 'show')
  .addTo(new ScrollMagic.Controller());
});

/* footer > year*/
const thisYear = document.querySelector('.this-year');
thisYear.textContent = new Date().getFullYear();
