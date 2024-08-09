// script.js

// Initialize slide indices
let currentSlideIndex = 0;
let currentSlideIndex2 = 0;

// Function to show slides
function showSlides1(slideIndex, containerClass) {
    const slides = document.querySelectorAll(`${containerClass} .slide`);
    if (slides.length === 0) return; // No slides to show

    // Ensure slideIndex is within bounds
    if (slideIndex >= 4) {
        slideIndex = 0;
    } else if (slideIndex < 0) {
        slideIndex = 4;
    }

    slides.forEach((slide, index) => {
        slide.style.display = (index === slideIndex) ? 'block' : 'none';
    });

    console.log("Slides1: ", currentSlideIndex);
    currentSlideIndex = slideIndex;
}

// Function to show slides
function showSlides2(slideIndex, containerClass) {
    const slides = document.querySelectorAll(`${containerClass} .slide2`);
    if (slides.length === 0) return; // No slides to show

    // Ensure slideIndex is within bounds
    if (slideIndex >= 4) {
        slideIndex = 0;
    } else if (slideIndex < 0) {
        slideIndex = 4;
    }

    slides.forEach((slide, index) => {
        slide.style.display = (index === slideIndex) ? 'block' : 'none';
    });

    console.log("Slides2: ", currentSlideIndex2);
    currentSlideIndex2 = slideIndex;
}

// Function to navigate slides
function changeSlide1(n) {
    showSlides1(currentSlideIndex + n, '.slideshow-container');
    // console.log('Changing first slideshow! ', currentSlideIndex + n);
}

// Function to navigate additional slides
function changeSlide2(n) {
    showSlides2(currentSlideIndex2 + n, '.additional-slideshow');
    // console.log('Changing second slideshow! ', currentSlideIndex2 + n);
}

// Initialize slides when the page loads
document.addEventListener('DOMContentLoaded', () => {
    showSlides1(currentSlideIndex, '.slideshow-container');
    showSlides2(currentSlideIndex2, '.additional-slideshow');
});
