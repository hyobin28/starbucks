const badgeEl = document.querySelector('header .badges');
const toTopEl = document.querySelector('#to-top');


// _.throttle(함수, 시간): 함수의 반복 실행 막기
window.addEventListener('scroll', _.throttle(function() {
  console.log(window.scrollY);
  if (window.scrollY > 500) {
    //배지 숨기기
    //gsap.to(요소, 지속시간, 옵션);
    gsap.to(badgeEl, .6, {
      opacity: 0, 
      display: 'none'
    });
    //버튼 보이기
    gsap.to(toTopEl, .2, {
      x: 0
    });
  } else {
    //배지 보이기
    gsap.to(badgeEl, .6, {
      opacity: 1, 
      display: 'block'
    });
    //버튼 숨기기
    gsap.to(toTopEl, .2, {
      x: 100
    });
  }
}, 300));

toTopEl.addEventListener('click', function() {
  gsap.to(window, .7, {
    scrollTo: 0
  });
});


const fadeEls = document.querySelectorAll('.visual .fade-in');
fadeEls.forEach(function (fadeEl, index) {  //각 요소에 대해 주어진 함수를 한 번씩 실행
  gsap.to(fadeEl, 1, {
    delay: (index + 1) * .7,  //0.7초, 1.4초, 2.1초, 2.7초
    opacity: 1
  });
});


// new Swiper (선택자, 옵션)
new Swiper('.notice-line .swiper-container', {
  direction: 'vertical', 
  autoplay: true, 
  loop: true
});

new Swiper('.promotion .swiper-container', {
  slidesPerView: 3,   //한 번에 보여줄 슬라이드 개수
  spaceBetween: 10,   //슬라이드 사이 여백
  centeredSlides: true,   //1번 슬라이드가 가운데 보이기
  loop: true, 
  autoplay: {
    delay: 5000
  }, 
    pagination: {
      el: '.promotion .swiper-pagination',  //페이지 번호 요소 선택자
      clickable: true   //사용자의 페이지 번호 요소 제어 가능 여부
    }, 
    navigation: {
      prevEl: '.promotion .swiper-prev', 
      nextEl: '.promotion .swiper-next'
    }
});
new Swiper('.awards .swiper-container', {
  autoplay: true, 
  loop: true, 
  spaceBetween: 30, 
  slidesPerView: 5, 
  nevigation: {
    prevEl: '.awards .swiper-prev', 
    nextEl: '.awards .swiper-next'
  }
});


const promotionEl = document.querySelector('.promotion');
const promotionToggleBtn = document.querySelector('.toggle-promotion');
let isHidePromotion = false;
promotionToggleBtn.addEventListener('click', function() {
  isHidePromotion = !isHidePromotion    //뒤 쪽의 값 반대
  if (isHidePromotion) {
    //숨김 처리
    promotionEl.classList.add('hide');
  } 
  else {
    //보임 처리
    promotionEl.classList.remove('hide');
  }
});


// 범위 랜덤 함수(소수점 2자리까지)
function random(min, max) {
  // `.toFixed()`를 통해 반환된 문자 데이터를,
  // `parseFloat()`을 통해 소수점을 가지는 숫자 데이터로 변환
  return parseFloat((Math.random() * (max - min) + min).toFixed(2))
}
function floatingobject(selector, delay, size) {
 //gsap.to(요소, 지속시간, 옵션);
  gsap.to(selector, random(1.5, 2.5),  
  {
    y: size, 
    repeat: -1,    //무한반복
    yoyo: true, 
    ease: Power1.easeInOut, 
    delay: random(0, delay)
  }
);
}
floatingobject('.floating1', 1, 15);
floatingobject('.floating2', .5, 15);
floatingobject('.floating3', 1.5, 20);


//요소 애니메이션 효과
const spyEls = document.querySelectorAll('section.scroll-spy');
spyEls.forEach(function (spyEl) {
  new ScrollMagic
    .Scene({
      triggerElement: spyEl,  //보여짐 여부를 감시할 요소를 지정
      triggerHook: .8
    })
    .setClassToggle(spyEl, 'show')  
    .addTo(new ScrollMagic.Controller());
}); 