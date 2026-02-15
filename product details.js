// product details.js
document.addEventListener("DOMContentLoaded", () => {// Ensure the DOM is fully loaded
    let cartCount = localStorage.getItem("cartCount") || 0;
    cartCount = parseInt(cartCount);

    const cartCountDisplay = document.getElementById("cart-count");// Get the cart count display element
    cartCountDisplay.textContent = cartCount;// Initialize the display with the current cart count

    const cartButtons = document.querySelectorAll(".add-to-cart-btn");

    cartButtons.forEach(button => {// Add event listener to each "Add to Cart" button
        button.addEventListener("click", () => {
            cartCount++;//  Increase cart count by 1
            cartCountDisplay.textContent = cartCount;
            localStorage.setItem("cartCount", cartCount);// Update local storage with the new cart count
        });
    });
});
