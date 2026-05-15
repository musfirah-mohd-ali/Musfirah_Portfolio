let modalSlideIndex = 0;

const postGalleries = {
    'group1': {
        description: "This post was created as an assignment for my Design Principles module in my first year of Polytechnic. The inspiration came from scrapbooking and making a post be 'messily' organized.",
        images: [
            'images/SaveClip.App_655991143_18150538129457452_4970595272513946665_n (1).jpg',
            'images/SaveClip.App_654317667_18316776400249931_6795416395720381741_n.jpg',
            'images/SaveClip.App_655226358_18171196198408047_6732408999947200622_n.jpg'  
            
        ]
    },
    'group2': {
        description: "This post showcases my involvement in the CCA Fair, highlighting the creative and collaborative efforts of my peers.",
        images: [
            'images/651377820_18096682117820708_3955526221074624476_n.jpg',
            'images/648990063_17995790084874632_3678229428231411820_n.jpg',
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