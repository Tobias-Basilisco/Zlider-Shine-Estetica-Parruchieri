document.addEventListener("DOMContentLoaded", manager);

function manager(){

let mainImage = document.querySelector('.slider-main img');
const sliderMain = document.querySelector('.slider-main');
const sliderThumbs = document.querySelector('.slider-thumbs');
const prevBtn = document.querySelector('.slider-prev');
const nextBtn = document.querySelector('.slider-next');
const thumbImages = sliderThumbs.querySelectorAll('img');
const aFancybox = document.querySelector('.a-fancybox');

let currentIndex = 0;
let totalImages = thumbImages.length;
let mediaMarg = 1.5;
/*per mobile mediamarg = 2*/
let sourceLong = thumbImages[currentIndex].src;
let source = ""


thumbImages[currentIndex].classList.add('active');


function updateImage() {
    updateSource();
    updateAFancybox();
    sliderMain.style.opacity = 0;
    setTimeout(() => {sliderMain.innerHTML = 
 
    `<img src="${source}" alt="Immagene Principale" />`;
    updateThumbnails();
    sliderMain.style.opacity = 1;  
    }, 500);
    

}

function updateSource(){
  sourceLong = thumbImages[currentIndex].src;
  let parts = sourceLong.split('/');
  source = parts.slice(-2).join('/');
}

function updateAFancybox(){
  aFancybox.href = source;
}


function updateThumbnails() {
  thumbImages.forEach(img => img.classList.remove('active'));
  thumbImages[currentIndex].classList.add('active');
  
  const thumbWidth = thumbImages[0].offsetWidth;
  const thumbMargin = parseInt(getComputedStyle(thumbImages[0]).marginRight);
  const scrollLeft = currentIndex * (thumbWidth + 2*thumbMargin + mediaMarg);
  
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




const mediaQuery = window.matchMedia('(max-width: 700px)');

function handleSizeChange(event) {
  if (event.matches) {
    // La ventana del navegador es menor o igual a 600 píxeles
    mediaMarg = 0.5;
  } else {
    // La ventana del navegador es mayor a 600 píxeles
    mediaMarg = 1.5;
  }
}

// Agrega un detector de eventos para detectar cambios en el tamaño de la ventana
mediaQuery.addEventListener('change', handleSizeChange);
mediaQuery.addEventListener('change', updateThumbnails);
mediaQuery.addEventListener('change', updateImage);


// Establece el valor inicial de la variable
handleSizeChange(mediaQuery);

Fancybox.bind("[data-fancybox]", {
  // Options
});
}