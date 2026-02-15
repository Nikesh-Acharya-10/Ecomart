// Function to toggle the "Read More" and "Read Less" functionality
function toggleReadMore(button) {
    const paragraph = button.previousElementSibling;// Get the paragraph element
    const moreText = paragraph.querySelector(".more-text");// Get the additional text element
    const dots = paragraph.querySelector(".dots");// Get the dots element
// Toggle the display of more text and dots
    if (moreText.style.display === "inline") {
        moreText.style.display = "none";
        dots.style.display = "inline";
        button.textContent = "Read More";
    } else {// Show more text
        moreText.style.display = "inline";
        dots.style.display = "none";
        button.textContent = "Read Less";
    }
}

