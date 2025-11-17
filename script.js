// script.js

// Indices for each slideshow
let recycleIndex = 0;
let spellIndex = 0;
let duckIndex = 0;
let treatIndex = 0;

// ---------- RECYCLE ME (uses .slideshow-container .slide) ----------
function showRecycleSlides(index) {
    const slides = document.querySelectorAll('.slideshow-container .slide');
    if (slides.length === 0) return;

    if (index >= slides.length) {
        index = 0;
    } else if (index < 0) {
        index = slides.length - 1;
    }

    slides.forEach((slide, i) => {
        slide.style.display = (i === index) ? 'block' : 'none';
    });

    recycleIndex = index;
}

function changeSlide1(delta) {
    showRecycleSlides(recycleIndex + delta);
}

// ---------- SPELLFISTER (uses .additional-slideshow .slide2) ----------
function showSpellSlides(index) {
    const slides = document.querySelectorAll('.additional-slideshow .slide2');
    if (slides.length === 0) return;

    if (index >= slides.length) {
        index = 0;
    } else if (index < 0) {
        index = slides.length - 1;
    }

    slides.forEach((slide, i) => {
        slide.style.display = (i === index) ? 'block' : 'none';
    });

    spellIndex = index;
}

function changeSlide2(delta) {
    showSpellSlides(spellIndex + delta);
}

// ---------- DUCK TD (uses .duck-slideshow .duck-slide) ----------
function showDuckSlides(index) {
    const slides = document.querySelectorAll('.duck-slideshow .duck-slide');
    if (slides.length === 0) return;

    if (index >= slides.length) {
        index = 0;
    } else if (index < 0) {
        index = slides.length - 1;
    }

    slides.forEach((slide, i) => {
        slide.style.display = (i === index) ? 'block' : 'none';
    });

    duckIndex = index;
}

function changeDuckSlide(delta) {
    showDuckSlides(duckIndex + delta);
}

// ---------- TRICK OR TREAT (uses .treat-slideshow .treat-slide) ----------
function showTreatSlides(index) {
    const slides = document.querySelectorAll('.treat-slideshow .treat-slide');
    if (slides.length === 0) return;

    if (index >= slides.length) {
        index = 0;
    } else if (index < 0) {
        index = slides.length - 1;
    }

    slides.forEach((slide, i) => {
        slide.style.display = (i === index) ? 'block' : 'none';
    });

    treatIndex = index;
}

function changeTreatSlide(delta) {
    showTreatSlides(treatIndex + delta);
}

// ---------- NAVBAR + INITIALIZATION ----------
document.addEventListener('DOMContentLoaded', () => {
    // Initialize all slideshows so they don't start blank
    showDuckSlides(0);
    showTreatSlides(0);
    showSpellSlides(0);
    showRecycleSlides(0);

    const navbar = document.getElementById('navbar');
    const main = document.querySelector('main');

    function adjustMainMargin() {
        const navbarHeight = navbar.offsetHeight;
        main.style.marginTop = `${navbarHeight}px`;
    }

    adjustMainMargin();
    window.addEventListener('resize', adjustMainMargin);

    // Navbar hide / show on scroll
    let lastScrollTop = 0;
    let navbarHeight = navbar.offsetHeight;

    window.addEventListener('scroll', () => {
        const currentScroll = window.scrollY || document.documentElement.scrollTop;

        if (currentScroll > lastScrollTop) {
            // Scrolling down
            navbar.style.top = `-${navbarHeight}px`;
        } else {
            // Scrolling up
            navbar.style.top = '0';
        }

        lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
    });
});
