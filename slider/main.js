const list = document.querySelector('.list');
const items = document.querySelectorAll('.item');
const dots = document.querySelectorAll('.dots div');
const btnNext = document.querySelector('.btn-next');
const btnPrev = document.querySelector('.btn-prev');
const itemLength = items.length - 1;
let index = 0;
reloadSlide(index);
btnNext.addEventListener('click', function () {
  index + 1 > itemLength ? (index = 0) : (index += 1);
  reloadSlide();
  console.log(index);
});
btnPrev.addEventListener('click', function () {
  index - 1 < 0 ? (index = itemLength) : (index -= 1);
  reloadSlide();
});
// let autoSlide = setInterval(() => {
//   btnNext.click();
// }, 3000);
function reloadSlide(i) {
  // let checkLeft = items[index].offsetLeft;
  // list.style.left = -checkLeft + 'px';
  for (let i = 0; i < items.length; i++) {
    items[i].style.display = 'none';
  }
  items[index].style.display = 'block';
  console.log('2:', index);
  let lastDot = document.querySelector('div.active');
  lastDot.classList.remove('active');
  dots[index].classList.add('active');
  // clearInterval(autoSlide);
  // autoSlide = setInterval(() => {
  //   btnNext.click();
  // }, 3000);
  setTimeout(reloadSlide, 2000);
}
dots.forEach((item, i) => {
  item.addEventListener('click', () => {
    index = i;
    reloadSlide();
  });
});
