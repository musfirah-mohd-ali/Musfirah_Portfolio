let currentDesignIndex = 0;
let currentSubImageIndex = 0;

const designDescriptions = [
    "This post was created as an assignment for my Design Principles module in my first year of Polytechnic. The inspiration came from scrapbooking and making a post be 'messily' organized.",
    "This post showcases my involvement in the CCA Fair, highlighting the creative and collaborative efforts of my peers.",
    "This post was a recap post for our May General Meeting for the Student Council where we planned fun games for our CCA to bond.",
    "This post was to showcase my fellow EXCO members in our award ceremony where we were awarded Service Star Awards for our contributions to the club.",
    "This post was a recap of our January General Meeting, it was the first one of the new academic year where we got to meet all the new year 1s and new members."
];

// 1. MAIN CAROUSEL TRIGGER: Switches between groups/posts
function changeSlide(direction) {
    const track = document.querySelector('.design-track');
    const slides = document.querySelectorAll('.design-slide');
    const descText = document.getElementById('design-desc-text');
    
    const totalSlides = slides.length;
    currentDesignIndex = (currentDesignIndex + direction + totalSlides) % totalSlides;
    
    // Slide main track frame (Each step slides exactly 460px)
    track.style.transform = `translateX(-${currentDesignIndex * 460}px)`;
    
    // Update main descriptive copy
    if (descText) {
        descText.textContent = designDescriptions[currentDesignIndex];
    }

    // Reset sub-image state back to the first photo whenever changing major posts
    currentSubImageIndex = 0;
    updateSubImageDisplay();
    generateDots();
}

// 2. SUB-IMAGE CAROUSEL TRIGGER: Switches images within a single active post
function changeSubImage(direction) {
    const slides = document.querySelectorAll('.design-slide');
    const activeSlide = slides[currentDesignIndex];
    
    // Safely pull the total number of images via the data-attribute built into our HTML
    const totalImages = parseInt(activeSlide.getAttribute('data-total-images')) || 1;
    
    currentSubImageIndex = (currentSubImageIndex + direction + totalImages) % totalImages;
    
    updateSubImageDisplay();
    updateDots();
}

// Moves the actual images inside the active gallery track row wrapper
function updateSubImageDisplay() {
    const slides = document.querySelectorAll('.design-slide');
    
    // Reset all other inactive galleries back to 0 so they're pristine when arrived at
    slides.forEach((slide, idx) => {
        const images = slide.querySelectorAll('.slide-gallery-wrapper img');
        if (idx === currentDesignIndex) {
            // Apply a transform to move images sideways inside the viewport bounding frame box
            images.forEach(img => {
                img.style.transform = `translateX(-${currentSubImageIndex * 100}%)`;
            });
        } else {
            images.forEach(img => {
                img.style.transform = `translateX(0%)`;
            });
        }
    });
}

// Dynamically draws the pagination dots depending on how many images the active post contains
function generateDots() {
    const dotsContainer = document.getElementById('gallery-dots');
    if (!dotsContainer) return;
    
    const slides = document.querySelectorAll('.design-slide');
    const activeSlide = slides[currentDesignIndex];
    const totalImages = parseInt(activeSlide.getAttribute('data-total-images')) || 1;
    
    dotsContainer.innerHTML = ''; // Wipe out old set of dots
    
    for (let i = 0; i < totalImages; i++) {
        const dot = document.createElement('span');
        dot.classList.add('dot');
        if (i === 0) dot.classList.add('active');
        dotsContainer.appendChild(dot);
    }
}

// Switches which dot is highlighted
function updateDots() {
    const dots = document.querySelectorAll('#gallery-dots .dot');
    dots.forEach((dot, idx) => {
        if (idx === currentSubImageIndex) {
            dot.classList.add('active');
        } else {
            dot.classList.remove('active');
        }
    });
}

// Run immediately upon webpage boot initialization to make sure the first dots draw perfectly
document.addEventListener("DOMContentLoaded", () => {
    generateDots();
});