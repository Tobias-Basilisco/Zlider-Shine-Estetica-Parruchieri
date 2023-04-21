document.addEventListener("DOMContentLoaded", manager);

function manager(){

const sliderMain = document.querySelector('.slider-main');
const sliderThumbs = document.querySelector('.slider-thumbs');
const prevBtn = document.querySelector('.slider-prev');
const nextBtn = document.querySelector('.slider-next');
const thumbImages = sliderThumbs.querySelectorAll('.slider-thumbs img');

let currentIndex = 0;
let totalImages = thumbImages.length;

thumbImages[currentIndex].classList.add('active');

function updateImage() {
    sliderMain.innerHTML = `<img src="${thumbImages[currentIndex].src}" alt="Imagen Principal" />`;
    updateThumbnails();
}

function updateThumbnails() {
  thumbImages.forEach(img => img.classList.remove('active'));
  thumbImages[currentIndex].classList.add('active');
  
  const thumbWidth = thumbImages[0].offsetWidth;
  const thumbMargin = parseInt(getComputedStyle(thumbImages[0]).marginRight);
  const scrollLeft = currentIndex * (thumbWidth + thumbMargin);
  
  sliderThumbs.scrollTo({
    left: scrollLeft,
    behavior: 'smooth'
  });
}

function nextImage() {
  currentIndex++;
  if (currentIndex >= totalImages) {
    currentIndex = 0;
  }
  updateImage();
  updateThumbnails();
}

function prevImage() {
  currentIndex--;
  if (currentIndex < 0) {
    currentIndex = totalImages - 1;
  }
  updateImage();
  updateThumbnails();
}

thumbImages.forEach((img, index) => {
  img.addEventListener('click', () => {
    currentIndex = index;
    updateImage();
    updateThumbnails();

  });
});

prevBtn.addEventListener('click', prevImage);
nextBtn.addEventListener('click', nextImage);

const prova = document.querySelector('.prova');
let btn = document.querySelector('.btn');
btn.addEventListener('click', scroll);

function scroll() {
prova.scrollTo(200,200)
}

}