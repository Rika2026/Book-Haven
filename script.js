alert("JS loaded");
// Subscribe button alert
const subscribeBtn = document.getElementById("subscribeBtn");
if (subscribeBtn) {
  subscribeBtn.addEventListener("click", function () {
    alert("Thank you for subscribing.");
  });
}

// Add to Cart alerts on Gallery page
const addToCartButtons = document.querySelectorAll(".addToCartBtn");
if (addToCartButtons.length > 0) {
  addToCartButtons.forEach(function (button) {
    button.addEventListener("click", function () {
      alert("Item added to the cart.");
    });
  });
}

// Clear Cart alert
const clearCartBtn = document.getElementById("clearCartBtn");
if (clearCartBtn) {
  clearCartBtn.addEventListener("click", function () {
    alert("Cart cleared.");
  });
}

// Process Order alert
const processOrderBtn = document.getElementById("processOrderBtn");
if (processOrderBtn) {
  processOrderBtn.addEventListener("click", function () {
    alert("Thank you for your order.");
  });
}

// About page Submit alert
const submitBtn = document.getElementById("submitBtn");
if (submitBtn) {
  submitBtn.addEventListener("click", function (event) {
    event.preventDefault();
    alert("Thank you for your message.");
  });
}


Marika Stewart 
Assoc. Operation Analyst
Triumph Insulation Systems 
Mstewart@triumphgroup.com
828.503.5124
 
