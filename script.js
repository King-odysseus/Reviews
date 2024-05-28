// script.js

document.addEventListener('DOMContentLoaded', () => {
  const slides = document.querySelector('.slides');
  const slideCount = document.querySelectorAll('.slide').length;
  const prevButton = document.querySelector('.prev');
  const nextButton = document.querySelector('.next');
  let currentIndex = 0;
  const intervalTime = 3000;
  let slideInterval;

  const updateSlidePosition = () => {
      slides.style.transform = `translateX(-${currentIndex * 100}%)`;
  };

  const showNextSlide = () => {
      currentIndex = (currentIndex + 1) % slideCount;
      updateSlidePosition();
  };

  const showPrevSlide = () => {
      currentIndex = (currentIndex - 1 + slideCount) % slideCount;
      updateSlidePosition();
  };

  nextButton.addEventListener('click', () => {
      showNextSlide();
      resetInterval();
  });

  prevButton.addEventListener('click', () => {
      showPrevSlide();
      resetInterval();
  });

  const startInterval = () => {
      slideInterval = setInterval(showNextSlide, intervalTime);
  };

  const resetInterval = () => {
      clearInterval(slideInterval);
      startInterval();
  };

  startInterval();
});
