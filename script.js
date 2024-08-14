// script.js

// Initialize slide indices
let currentSlideIndex = 0;
let currentSlideIndex2 = 0;

// Function to show slides
function showSlides1(slideIndex, containerClass) {
    const slides = document.querySelectorAll(`${containerClass} .slide`);
    // console.log(slides);
    if (slides.length === 0) return; // No slides to show

    // Ensure slideIndex is within bounds
    if (slideIndex >= 4) {
        slideIndex = 0;
    } else if (slideIndex < 0) {
        slideIndex = 3;
    }

    slides.forEach((slide, index) => {
        // console.log("slide ", slide, "index ", index);
        slide.style.display = (index === slideIndex) ? 'block' : 'none';
    });

    currentSlideIndex = slideIndex;
    console.log("Slides1: ", currentSlideIndex);
}

// Function to show slides
function showSlides2(slide2Index, containerClass) {
    const slides = document.querySelectorAll(`${containerClass} .slide2`);
    if (slides.length === 0) return; // No slides to show

    // Ensure slideIndex is within bounds
    if (slide2Index >= 4) {
        slide2Index = 0;
    } else if (slide2Index < 0) {
        slide2Index = 4;
    }

    slides.forEach((slide, index) => {
        slide.style.display = (index === slide2Index) ? 'block' : 'none';
    });

    console.log("Slides2: ", currentSlideIndex2);
    currentSlideIndex2 = slide2Index;
}

// Function to navigate slides
function changeSlide1(n) {
    // console.log(n);
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

    const navbar = document.querySelector('nav');
    const main = document.querySelector('main');

    function adjustMainMargin() {
        const navbarHeight = navbar.offsetHeight;
        main.style.marginTop = `${navbarHeight}px`;
    }

    // Initial adjustment
    adjustMainMargin();
});

// Navbar hide and show on scroll
let lastScrollTop = 0; // Track the last scroll position
const navbar = document.getElementById('navbar'); // Select the navbar
let navbarHeight = navbar.offsetHeight;

window.addEventListener('scroll', () => {
    // Get the current scroll position
    let currentScroll = window.scrollY;

    // Compare the current scroll position with the last scroll position
    if (currentScroll > lastScrollTop) {
        // Scrolling down
        console.log("Scrolling down");
        navbar.style.top = `-${navbarHeight}px`; // Adjust based on the height of your navbar
        console.log(navbar.style.top);
    } else {
        // Scrolling up
        console.log("Scrolling up");
        navbar.style.top = "0";
    }

    // Update lastScrollTop to the current position for the next scroll event
    lastScrollTop = currentScroll <= 0 ? 0 : currentScroll; // Prevent negative scroll values
});

window.addEventListener('resize', () => {
    navbarHeight = navbar.offsetHeight; // Update the height of the navbar
    window.addEventListener('resize', adjustMainMargin);    // Adjust on window resize
});
