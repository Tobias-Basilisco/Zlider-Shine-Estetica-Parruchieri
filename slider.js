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
  thumbImages.forEach(img => img.classList.remove('active'));
  thumbImages[currentIndex].classList.add('active');
}

function nextImage() {
  currentIndex++;
  if (currentIndex >= totalImages) {
    currentIndex = 0;
  }
  updateImage();
}

function prevImage() {
  currentIndex--;
  if (currentIndex < 0) {
    currentIndex = totalImages - 1;
  }
  updateImage();
}

thumbImages.forEach((img, index) => {
  img.addEventListener('click', () => {
    currentIndex = index;
    updateImage();
  });
});

prevBtn.addEventListener('click', prevImage);
nextBtn.addEventListener('click', nextImage);


}