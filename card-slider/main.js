const btnPrev = document.querySelector('.btn-prev');
const btnNext = document.querySelector('.btn-next');

let slide = document.querySelector('.slide');
btnPrev.addEventListener('click', () => {
  let slideItem = document.querySelectorAll('.slide-item');
  slide.prepend(slideItem[slideItem.length - 1]);
});
btnNext.addEventListener('click', () => {
  let slideItem = document.querySelectorAll('.slide-item');
  slide.appendChild(slideItem[0]);
});
