document.addEventListener("DOMContentLoaded", function () {

  /* =========================
     SUBSCRIBE BUTTON
  ========================= */
  const subscribeBtn = document.getElementById("subscribeBtn");
  if (subscribeBtn) {
    subscribeBtn.addEventListener("click", function () {
      alert("Thank you for subscribing.");
    });
  }


  /* =========================
     GALLERY PAGE - CART
  ========================= */

  const addToCartButtons = document.querySelectorAll(".addToCartBtn");
  const viewCartBtn = document.getElementById("viewCartBtn");
  const clearCartBtn = document.getElementById("clearCartBtn");
  const processOrderBtn = document.getElementById("processOrderBtn");
  const closeCartBtn = document.getElementById("closeCartBtn");
  const cartModal = document.getElementById("cartModal");
  const cartItems = document.getElementById("cartItems");

  // Get cart from sessionStorage
  function getCart() {
    return JSON.parse(sessionStorage.getItem("cart")) || [];
  }

  // Save cart to sessionStorage
  function saveCart(cart) {
    sessionStorage.setItem("cart", JSON.stringify(cart));
  }

  // Add item to cart
  function addToCart(itemName) {
    let cart = getCart();
    cart.push(itemName);
    saveCart(cart);
    alert(itemName + " added to cart!");
  }

  // Display cart items in modal
  function displayCart() {
    if (!cartItems) return;

    let cart = getCart();
    cartItems.innerHTML = "";

    if (cart.length === 0) {
      cartItems.innerHTML = "<li>Your cart is empty.</li>";
    } else {
      cart.forEach(function (item) {
        const li = document.createElement("li");
        li.textContent = item;
        cartItems.appendChild(li);
      });
    }
  }

  // Add to Cart button clicks
  if (addToCartButtons.length > 0) {
    addToCartButtons.forEach(function (button) {
      button.addEventListener("click", function () {
        const productCard = button.closest(".product-card");
        const itemName = productCard.querySelector(".product-title").textContent;
        addToCart(itemName);
      });
    });
  }

  // View Cart
  if (viewCartBtn) {
    viewCartBtn.addEventListener("click", function () {
      displayCart();
      if (cartModal) cartModal.style.display = "block";
    });
  }

  // Clear Cart
  if (clearCartBtn) {
    clearCartBtn.addEventListener("click", function () {
      sessionStorage.removeItem("cart");
      displayCart();
      alert("Cart cleared.");
    });
  }

  // Process Order
  if (processOrderBtn) {
    processOrderBtn.addEventListener("click", function () {
      sessionStorage.removeItem("cart");
      displayCart();
      alert("Thank you for your order.");
    });
  }

  // Close Cart Modal
  if (closeCartBtn) {
    closeCartBtn.addEventListener("click", function () {
      cartModal.style.display = "none";
    });
  }

  // Close modal if clicking outside
  if (cartModal) {
    window.addEventListener("click", function (event) {
      if (event.target === cartModal) {
        cartModal.style.display = "none";
      }
    });
  }


  /* =========================
     ABOUT PAGE - FORM
  ========================= */

  const contactForm = document.getElementById("contactForm");
  const submitBtn = document.getElementById("submitBtn");
  const clearFormBtn = document.getElementById("clearFormBtn");

  // Submit form
  if (submitBtn) {
    submitBtn.addEventListener("click", function () {

      const name = document.getElementById("name").value.trim();
      const email = document.getElementById("email").value.trim();
      const phone = document.getElementById("phone").value.trim();
      const feedback = document.getElementById("feedback").value.trim();
      const customOrder = document.getElementById("customOrder").checked;

      // Validation
      if (name === "" || email === "" || phone === "" || feedback === "") {
        alert("Please fill out all fields.");
        return;
      }

      // Save to localStorage
      const contactData = {
        name: name,
        email: email,
        phone: phone,
        feedback: feedback,
        customOrder: customOrder
      };

      localStorage.setItem("contactFormData", JSON.stringify(contactData));

      alert("Thank you for your message, " + name + "!");
    });
  }

  // Clear form
  if (clearFormBtn) {
    clearFormBtn.addEventListener("click", function () {
      if (contactForm) {
        contactForm.reset();
      }
      localStorage.removeItem("contactFormData");
      alert("Form cleared.");
    });
  }

  // Load saved data (optional but good for assignment)
  if (contactForm) {
    const savedData = JSON.parse(localStorage.getItem("contactFormData"));

    if (savedData) {
      document.getElementById("name").value = savedData.name || "";
      document.getElementById("email").value = savedData.email || "";
      document.getElementById("phone").value = savedData.phone || "";
      document.getElementById("feedback").value = savedData.feedback || "";
      document.getElementById("customOrder").checked = savedData.customOrder || false;
    }
  }

});
