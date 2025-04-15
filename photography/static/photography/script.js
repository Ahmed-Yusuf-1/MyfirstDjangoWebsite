// Wait for the HTML document to be fully loaded
document.addEventListener('DOMContentLoaded', () => {

    const slidesContainer = document.querySelector('.slides');
    // NodeListOf<Element> is like an array, but not exactly. Convert it for easier use.
    const slides = Array.from(document.querySelectorAll('.slide'));
    const prevButton = document.getElementById('prevBtn');
    const nextButton = document.getElementById('nextBtn');

    // Check if essential elements exist
    if (!slidesContainer || !prevButton || !nextButton || slides.length === 0) {
        console.error("Slideshow elements not found!");
        return; // Stop if elements are missing
    }

    let currentIndex = 0; // Keep track of the current slide index (0-based)
    const totalSlides = slides.length;

    // Function to move to a specific slide
    function goToSlide(index) {
        // Remove 'active' class from all slides
        slides.forEach(slide => slide.classList.remove('active'));

        // Add 'active' class to the target slide
        slides[index].classList.add('active');

        // Update the current index tracker
        currentIndex = index;

        // Button states are handled by the looping logic now
        // prevButton.disabled = index === 0; // Removed for looping
        // nextButton.disabled = index === totalSlides - 1; // Removed for looping
    }

    // Event Listener for the Next Button
    nextButton.addEventListener('click', () => {
        if (currentIndex < totalSlides - 1) { // Only proceed if not the last slide
            goToSlide(currentIndex + 1);
        }
        // Optional: Add looping - uncomment below
        else {
            goToSlide(0); // Go back to the first slide
        }
    });

    // Event Listener for the Previous Button
    prevButton.addEventListener('click', () => {
        if (currentIndex > 0) { // Only proceed if not the first slide
            goToSlide(currentIndex - 1);
        }
        // Optional: Add looping - uncomment below
        else {
            goToSlide(totalSlides - 1); // Go to the last slide
        }
    });

    // Initialize the slideshow
    if (slides.length > 0) {
        slides[0].classList.add('active'); // Make the first slide visible initially
        goToSlide(currentIndex); // Set initial button states
    }


}); // End of DOMContentLoaded listener