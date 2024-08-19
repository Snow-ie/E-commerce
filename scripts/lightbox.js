// Selectors for the lightbox elements
const main = document.querySelector("main");
const lightbox = document.querySelector(".light-box");
const closeBtn = document.querySelector(".light-box .close");
const largeImage = document.querySelector(".light-box .show-img");
const thumbnails = document.querySelectorAll("#light-box-images .images");
const thumbnails2 = document.querySelectorAll(".thumbnails");
const prevBtn = document.querySelector(".light-box .previous");
const nextBtn = document.querySelector(".light-box .next");

// Current image index
let currentIndex = 0;

// Function to open the lightbox
function openLightbox(index) {
    if (!lightbox.classList.contains("active")) {
        lightbox.classList.add("active");
        console.log("Calleds");
    }
    currentIndex = index;
    console.log("object");
    updateLargeImage(thumbnails[currentIndex].dataset.large);
}

// Function to close the lightbox
function closeLightbox() {
    lightbox.classList.remove("active");
}

// Function to update the large image
function updateLargeImage(src) {
    largeImage.src = src;
}

// Event listener to close the lightbox when the close button is clicked
closeBtn.addEventListener("click", closeLightbox);

// Event listeners to navigate through images in the lightbox
prevBtn.addEventListener("click", () => {
    currentIndex =
        currentIndex === 0 ? thumbnails.length - 1 : currentIndex - 1;
    updateLargeImage(thumbnails[currentIndex].dataset.large);
});

nextBtn.addEventListener("click", () => {
    currentIndex =
        currentIndex === thumbnails.length - 1 ? 0 : currentIndex + 1;
    updateLargeImage(thumbnails[currentIndex].dataset.large);
});

// Event listeners to update the large image when a thumbnail is clicked
thumbnails.forEach((thumbnail, index) => {
    thumbnail.addEventListener("click", () => {
        openLightbox(index);
    });
});

thumbnails2.forEach((thumbnail, index) => {
    thumbnail.addEventListener("click", () => {
        openLightbox(index);
    });
});

// Optional: Open lightbox when main product image is clicked (if desired)
document
    .querySelector(".product-container .display-img")
    .addEventListener("click", () => {
        openLightbox(0); // Assuming first thumbnail corresponds to the main image
    });
