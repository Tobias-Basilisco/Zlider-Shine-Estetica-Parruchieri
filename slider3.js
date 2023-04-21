document.addEventListener("DOMContentLoaded", manager);

function manager(){

  const thumbImages = document.querySelectorAll('.slider-thumbs img');
  const mainImage = document.querySelector('.slider-main img');
  const prevButton = document.querySelector('.slider-prev');
  const nextButton = document.querySelector('.slider-next');
  const sliderThumbs = document.querySelector('.slider-thumbs');
  const thumbMargin = parseInt(getComputedStyle(thumbImages[0]).marginRight);
  const thumbWidth = thumbImages[0].clientWidth + thumbMargin;
  const visibleThumbs = Math.floor(sliderThumbs.offsetWidth / thumbWidth);
  const thumbsWidth = thumbImages.length * thumbWidth;
  let thumbsOffset = 0;
  
  function setActiveThumb(thumb) {
    thumbImages.forEach((img) => {
      img.classList.remove('active');
    });
    thumb.classList.add('active');
  }
  
  function slideThumbs(offset) {
    thumbsOffset += offset;
    if (thumbsOffset < 0) {
      thumbsOffset = 0;
    }
    if (thumbsOffset > thumbsWidth - sliderThumbs.offsetWidth) {
      thumbsOffset = thumbsWidth - sliderThumbs.offsetWidth;
    }
    sliderThumbs.style.transform = `translateX(-${thumbsOffset}px)`;
  }
  
  thumbImages.forEach((thumb, index) => {
    thumb.addEventListener('click', () => {
      setActiveThumb(thumb);
      mainImage.src = `https://example.com/${thumb.dataset.image}.jpg`;
      const thumbIndex = Array.from(thumbImages).indexOf(thumb);
      const halfVisibleThumbs = Math.floor(visibleThumbs / 2);
      const targetOffset = thumbIndex * thumbWidth - (halfVisibleThumbs * thumbWidth);
      slideThumbs(-(targetOffset - thumbsOffset));
    });
  });
  
  prevButton.addEventListener('click', () => {
    const activeThumb = document.querySelector('.slider-thumbs .active');
    if (activeThumb.previousSibling) {
      setActiveThumb(activeThumb.previousSibling);
      mainImage.src = `https://example.com/${activeThumb.previousSibling.dataset.image}.jpg`;
      const halfVisibleThumbs = Math.floor(visibleThumbs / 2);
      const targetOffset = thumbsOffset - thumbWidth;
      if (thumbsOffset < halfVisibleThumbs * thumbWidth) {
        slideThumbs(-thumbsOffset);
      } else {
        slideThumbs(-thumbWidth);
      }
    }
  });
  
  nextButton.addEventListener('click', () => {
    const activeThumb = document.querySelector('.slider-thumbs .active');
    if (activeThumb.nextSibling) {
      setActiveThumb(activeThumb.nextSibling);
      mainImage.src = `https://example.com/${activeThumb.nextSibling.dataset.image}.jpg`;
      const halfVisibleThumbs = Math.floor(visibleThumbs / 2);
      const targetOffset = thumbsOffset + thumbWidth;
      if (targetOffset > (thumbImages.length - halfVisibleThumbs) * thumbWidth) {
        slideThumbs(thumbsWidth - sliderThumbs.offsetWidth - thumbsOffset);
      } else {
        slideThumbs(thumbWidth);
      }
    }
  });
  

}