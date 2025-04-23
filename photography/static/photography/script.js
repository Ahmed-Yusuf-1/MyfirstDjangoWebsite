// Wait for the HTML document to be fully loaded
document.addEventListener('DOMContentLoaded', () => {

    // Function to initialize a slideshow
    function initializeSlideshow(containerId, prevBtnId, nextBtnId) {
        const slidesContainer = document.getElementById(containerId);
        // Select elements *within* the specific container
        if (!slidesContainer) {
            console.error(`Slideshow container with ID "${containerId}" not found!`);
            return; // Stop if container is missing
        }
        // NodeListOf<Element> is like an array, but not exactly. Convert it for easier use.
        const slides = Array.from(slidesContainer.querySelectorAll('.slide'));
        const prevButton = document.getElementById(prevBtnId);
        const nextButton = document.getElementById(nextBtnId);

        // Check if essential elements exist within this specific slideshow
        if (!prevButton || !nextButton || slides.length === 0) {
            console.error(`Slideshow elements (slides/buttons) not found for container #${containerId}!`);
            return; // Stop if elements are missing
        }

        let currentIndex = 0; // Keep track of the current slide index (0-based) for *this* slideshow
        const totalSlides = slides.length;

        // Function to move to a specific slide within *this* slideshow
        function goToSlide(index) {
            // Ensure index loops correctly
            if (index < 0) {
                index = totalSlides - 1;
            } else if (index >= totalSlides) {
                index = 0;
            }

            // Remove 'active' class from all slides *within this slideshow*
            slides.forEach(slide => slide.classList.remove('active'));

            // Add 'active' class to the target slide *within this slideshow*
            slides[index].classList.add('active');

            // Update the current index tracker for *this* slideshow
            currentIndex = index;
        }

        // Event Listener for the Next Button for *this* slideshow
        nextButton.addEventListener('click', () => {
            goToSlide(currentIndex + 1);
        });

        // Event Listener for the Previous Button for *this* slideshow
        prevButton.addEventListener('click', () => {
            goToSlide(currentIndex - 1);
        });

        // Initialize *this* slideshow
        if (slides.length > 0) {
            goToSlide(0); // Start at the first slide
        }
    }

    // Initialize the first slideshow
    initializeSlideshow('slideshow1', 'prevBtn1', 'nextBtn1');

    // Initialize the second slideshow
    initializeSlideshow('slideshow2', 'prevBtn2', 'nextBtn2');

}); // End of DOMContentLoaded listener