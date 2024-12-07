const track = document.getElementById('carousel-track');
const slides = Array.from(track.children);
const nextButton = document.getElementById('next');
const prevButton = document.getElementById('prev');
const dotsContainer = document.getElementById('carousel-dots');
let currentIndex = 0;

// Create dots
slides.forEach((_, index) => {
    const dot = document.createElement('div');
    dot.classList.add('carousel-dot');
    if (index === 0) dot.classList.add('active');
    dot.addEventListener('click', () => goToSlide(index));
    dotsContainer.appendChild(dot);
});

const dots = Array.from(dotsContainer.children);

function goToSlide(index) {
    slides[currentIndex].classList.remove('active'); // Remove active class
    currentIndex = index;
    const slideWidth = slides[0].getBoundingClientRect().width + 100; // Account for gap
    track.style.transform = `translateX(-${index * slideWidth}px)`;
    slides[currentIndex].classList.add('active'); // Add active class
    updateDots();
}

function updateDots() {
    dots.forEach((dot, index) => {
        dot.classList.toggle('active', index === currentIndex);
    });
}

function nextSlide() {
    const newIndex = (currentIndex + 1) % slides.length;
    goToSlide(newIndex);
}

function prevSlide() {
    const newIndex = (currentIndex - 1 + slides.length) % slides.length;
    goToSlide(newIndex);
}

nextButton.addEventListener('click', nextSlide);
prevButton.addEventListener('click', prevSlide);

// Adjust carousel on window resize
window.addEventListener('resize', () => goToSlide(currentIndex));


window.addEventListener("scroll", function () {
    const header = document.querySelector(".header");
    const titleContainer = document.querySelector(".title-container");
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    // If user scrolls past the 100px of padding, fix the header
    if (scrollTop > 200) {
        header.style.position = "fixed";
        header.style.top = "0";
        header.style.width = "100vw";
        header.style.margin = "0, 0, 0, 2%";
        header.style.paddingTop = "10px"; // Adjust padding when fixed to ensure proper sizing
    } else {
        // When scrolling back up, restore the original layout
        header.style.position = "relative";
        header.style.paddingTop = "10px"; // Original padding
    }

    // Handle title scrolling effect (optional)
    if (scrollTop > 50) {
        titleContainer.style.transform = "translateY(-100%)";
    } else {
        titleContainer.style.transform = "translateY(0)";
    }
});

// Get the menu icon and the nav links container
const menuIcon = document.getElementById("menu-icon");
const navLinks = document.querySelector(".nav");

// Add event listener to the menu icon for the click event
menuIcon.addEventListener("click", function () {
    // Toggle the "active" class on the nav links container
    navLinks.classList.toggle("active");
});
