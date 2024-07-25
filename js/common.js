const searchEl = document.querySelector('.search');
const searchInputEl = searchEl.querySelector('input');

//클릭 시, <input> 요소에 포커스
searchEl.addEventListener('click', function() {
  searchInputEl.focus();
});

searchInputEl.addEventListener('focus', function() {
  searchEl.classList.add('focused');
  searchInputEl.setAttribute('placeholder', '통합검색');
});

searchInputEl.addEventListener('blur', function() {
  searchEl.classList.remove('focused');
  searchInputEl.setAttribute('placeholder', '');
});


//현재 날짜 반환되는 함수
const thisYear = document.querySelector('.this-year');
thisYear.textContent = new Date().getFullYear();  //2024