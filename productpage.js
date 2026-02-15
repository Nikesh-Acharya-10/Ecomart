let cartCount = 0;//at first cart no will count as 0

// select all cart buttons
const cartButtons = document.querySelectorAll(".cartbtn");//it will select all the cart buttons
const cartCountDisplay = document.getElementById("cart-count");//it will get the cart count display element

// add click event to each cart button
cartButtons.forEach(button => {
    button.addEventListener("click", () => {
        cartCount++;//it will  increase the cart by 1 
        cartCountDisplay.textContent = cartCount;
    });
});

