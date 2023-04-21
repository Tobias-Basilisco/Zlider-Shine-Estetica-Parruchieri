document.addEventListener("DOMContentLoaded", manager);

function manager(){

let mainImage = document.querySelector('.slider-main img');
const sliderMain = document.querySelector('.slider-main');
const sliderThumbs = document.querySelector('.slider-thumbs');
const prevBtn = document.querySelector('.slider-prev');
const nextBtn = document.querySelector('.slider-next');
const thumbImages = sliderThumbs.querySelectorAll('img');

let currentIndex = 0;
let totalImages = thumbImages.length;

thumbImages[currentIndex].classList.add('active');

function updateImage() {
    sliderMain.style.opacity = 0;
    setTimeout(() => {sliderMain.innerHTML = `<img src="${thumbImages[currentIndex].src}" alt="Immagene Principale" />`;
    updateThumbnails();
    sliderMain.style.opacity = 1;  
    }, 500);
    

}

function dissapear() {
  mainImage.style.opacity = 0
}

function apear() {
  mainImage.style.opacity = 1
}

function updateThumbnails() {
  thumbImages.forEach(img => img.classList.remove('active'));
  thumbImages[currentIndex].classList.add('active');
  
  const thumbWidth = thumbImages[0].offsetWidth;
  const thumbMargin = parseInt(getComputedStyle(thumbImages[0]).marginRight);
  const scrollLeft = currentIndex * (thumbWidth + thumbMargin);
  
  sliderThumbs.style.transform = `translateX(-${scrollLeft}px)`;
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

}