document.addEventListener("DOMContentLoaded", manager);

function manager(){

const ZliderMain = document.querySelector('.Zlider-main');
const ZliderThumbs = document.querySelector('.Zlider-thumbs');
const prevBtn = document.querySelector('.Zlider-prev');
const nextBtn = document.querySelector('.Zlider-next');
const thumbImages = ZliderThumbs.querySelectorAll('img');
const aFancybox = document.querySelector('.a-fancybox');

let currentIndex = 0;
let totalImages = thumbImages.length;
/* fattore aggiuntivo per correggere l'errore di scorrimento*/
let mediaMarg = 0.7;
let sourceLong = thumbImages[currentIndex].src;
let source = ""


thumbImages[currentIndex].classList.add('active');


function updateImage() {
    updateSource();
    updateAFancybox();
    ZliderMain.style.opacity = 0;
    setTimeout(() => {ZliderMain.innerHTML = 
 
    `<img src="${source}" alt="Immagene principale" />`;
    updateThumbnails();
    ZliderMain.style.opacity = 1;  
    }, 500);
    

}

/* funzione che trasforma il src assoluto in relativo */
function updateSource(){
  sourceLong = thumbImages[currentIndex].src;
  let parts = sourceLong.split('/');
  source = parts.slice(-2).join('/');
}

function updateAFancybox(){
  aFancybox.href = source;
}

/* fare scorrere le thumbnails*/
function updateThumbnails() {
  thumbImages.forEach(img => img.classList.remove('active'));
  thumbImages[currentIndex].classList.add('active');
  
  const thumbWidth = thumbImages[0].offsetWidth;
  const thumbMargin = parseInt(getComputedStyle(thumbImages[0]).marginRight);
  const scrollLeft = currentIndex * (thumbWidth + 2*thumbMargin + mediaMarg);
  
  ZliderThumbs.style.transform = `translateX(-${scrollLeft}px)`;
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
    // La ventana del navegador es menor o igual a 700 píxeles
    mediaMarg = 0.8;
  } else {
    // La ventana del navegador es mayor a 700 píxeles
    mediaMarg = 0.7;
  }
}

// Agrega un detector de eventos para detectar cambios en el tamaño de la ventana
mediaQuery.addEventListener('change', handleSizeChange);
window.addEventListener('resize', updateThumbnails);

// Establece el valor inicial de la variable
handleSizeChange(mediaQuery);


}