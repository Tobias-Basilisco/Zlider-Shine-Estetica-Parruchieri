const ZliderThumbs2 = document.querySelector('.Zlider-thumbs');
const thumbImages2 = ZliderThumbs2.querySelectorAll('img');

let currentIndex2 = 0;
let mediaMarg2 = 0.7;


function updateThumbnails2() {
    thumbImages2.forEach(img => img.classList.remove('active'));
    thumbImages2[currentIndex2].classList.add('active');
    
    const thumbWidth2 = thumbImages2[0].offsetWidth;
    const thumbMargin2 = parseInt(getComputedStyle(thumbImages2[0]).marginRight);
    const scrollLeft2 = currentIndex2 * (thumbWidth2 + 2*thumbMargin2 + mediaMarg2);
    
    ZliderThumbs2.style.transform = `translateX(-${scrollLeft2}px)`;
  }
  