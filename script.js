let modalSlideIndex = 0;

const postGalleries = {
    'group1': {
        description: "This post was created as an assignment for my Design Principles module in my first year of Polytechnic. The inspiration came from scrapbooking and making a post be 'messily' organized.",
        images: [
            'images/aboutMe.jpg',
            'images/aboutMe2.jpg',
            'images/aboutMe3.jpg',  
            
        ]
    },
    'group2': {
        description: "This post showcases my involvement in the CCA Fair, highlighting the creative and collaborative efforts of my peers.",
        images: [
            'images/ccaFair.jpg',
            'images/ccaFair2.jpg',
        ]
    },
    'group3': {
        description: "This post was a recap post for our May General Meting for the Student Council where we planed fun games for our CCA to bond.",
        images: [
            'images/mayGM.jpg',
            'images/mayGM2.jpg',
        ]
    },
    'group4': {
        description: "This post was to showcase my fellow EXCO members in our award ceremoney where we were awards Service Star Awards for our contributions to the club.",
        images: [
            'images/ssa.jpg',
            'images/ssa2.jpg',
            'images/ssa3.jpg',
            'images/ssa4.jpg',
            'images/ssa5.jpg',
        ]
    },
    'group5': {
        description: "This post was a recap of our January General Meeting, it was the first one of the new academic year where we got to meet all the new year 1s and new members.",
        images: [
            'images/janGM.jpg',
            'images/janGM2.jpg',
        ]
    }
};

function openPost(category) {
    const modal = document.getElementById('postModal');
    const track = document.getElementById('modalCarouselTrack');
    const desc = document.getElementById('modalDescription');
    
    modalSlideIndex = 0; // Reset to first image
    track.style.transform = `translateX(0)`;
    track.innerHTML = ""; // Clear old images

    // Set Description text
    desc.innerText = postGalleries[category].description;

    // Add images
    postGalleries[category].images.forEach(src => {
        const img = document.createElement('img');
        img.src = src;
        track.appendChild(img);
    });

    modal.style.display = "block";
    document.body.style.overflow = "hidden";
}

function moveModalSlide(dir) {
    const track = document.getElementById('modalCarouselTrack');
    const totalSlides = track.children.length;
    
    modalSlideIndex = (modalSlideIndex + dir + totalSlides) % totalSlides;
    track.style.transform = `translateX(-${modalSlideIndex * 100}%)`;
}

function closePost() {
    document.getElementById('postModal').style.display = "none";
    document.body.style.overflow = "auto";
}

let currentDesign = 0;

function changeSlide(dir) {
    const track = document.querySelector('.design-track');
    const slides = document.querySelectorAll('.design-slide');
    const totalSlides = slides.length;

    // This math ensures it loops correctly (0 -> 1 -> 0)
    currentDesign = (currentDesign + dir + totalSlides) % totalSlides;
    
    // This moves the track by 100% of the container width per slide
    track.style.transform = `translateX(-${currentDesign * 100}%)`;
}