document.addEventListener("DOMContentLoaded", function () {
  //SUBSCRIBE FORM IN THE FOOTER
  
  const subscribeForm = document.getElementById("subscribeForm");

  if (subscribeForm) {
    subscribeForm.addEventListener("submit", function (event) {
      event.preventDefault();

      const subscriberEmail = document.getElementById("subscriberEmail");

      if (!subscriberEmail.checkValidity()) {
        subscriberEmail.reportValidity();
        return;
      }

      window.alert("Thank you for subscribing.");
      subscribeForm.reset();
    });
  }

  // GALLERY PAGE FOR THE CART
  
  const addToCartButtons = document.querySelectorAll(".addToCartBtn");
  const viewCartBtn = document.getElementById("viewCartBtn");
  const clearCartBtn = document.getElementById("clearCartBtn");
  const processOrderBtn = document.getElementById("processOrderBtn");
  const closeCartBtn = document.getElementById("closeCartBtn");
  const cartModal = document.getElementById("cartModal");
  const cartItems = document.getElementById("cartItems");

  function getCart() {
    return JSON.parse(sessionStorage.getItem("cart")) || [];
  }

  function saveCart(cart) {
    sessionStorage.setItem("cart", JSON.stringify(cart));
  }

  function addToCart(itemName) {
    const cart = getCart();
    cart.push(itemName);
    saveCart(cart);
    window.alert(itemName + " added to cart!");
  }

  function displayCart() {
    if (!cartItems) return;

    const cart = getCart();
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

  if (addToCartButtons.length > 0) {
    addToCartButtons.forEach(function (button) {
      button.addEventListener("click", function () {
        const productCard = button.closest(".product-card");
        if (!productCard) return;

        const titleElement = productCard.querySelector(".product-title");
        if (!titleElement) return;

        const itemName = titleElement.textContent.trim();
        addToCart(itemName);
      });
    });
  }

  if (viewCartBtn) {
    viewCartBtn.addEventListener("click", function () {
      displayCart();
      if (cartModal) {
        cartModal.style.display = "block";
      }
    });
  }

  if (clearCartBtn) {
    clearCartBtn.addEventListener("click", function () {
      sessionStorage.removeItem("cart");
      displayCart();
      window.alert("Cart cleared.");
    });
  }

  if (processOrderBtn) {
    processOrderBtn.addEventListener("click", function () {
      sessionStorage.removeItem("cart");
      displayCart();
      window.alert("Thank you for your order.");
    });
  }

  if (closeCartBtn) {
    closeCartBtn.addEventListener("click", function () {
      if (cartModal) {
        cartModal.style.display = "none";
      }
    });
  }

  if (cartModal) {
    window.addEventListener("click", function (event) {
      if (event.target === cartModal) {
        cartModal.style.display = "none";
      }
    });
  }

  //ABOUT PAGE FORM
  const contactForm = document.getElementById("contactForm");
  const clearFormBtn = document.getElementById("clearFormBtn");

  if (contactForm) {
    contactForm.addEventListener("submit", function (event) {
      event.preventDefault();

      if (!contactForm.checkValidity()) {
        contactForm.reportValidity();
        return;
      }

      const nameField = document.getElementById("name");
      const emailField = document.getElementById("email");
      const phoneField = document.getElementById("phone");
      const feedbackField = document.getElementById("feedback");
      const customOrderField = document.getElementById("customOrder");

      const name = nameField ? nameField.value.trim() : "";
      const email = emailField ? emailField.value.trim() : "";
      const phone = phoneField ? phoneField.value.trim() : "";
      const feedback = feedbackField ? feedbackField.value.trim() : "";
      const customOrder = customOrderField ? customOrderField.checked : false;

      const contactData = {
        name: name,
        email: email,
        phone: phone,
        feedback: feedback,
        customOrder: customOrder
      };

      localStorage.setItem("contactFormData", JSON.stringify(contactData));
      window.alert("Thank you for your message, " + name + "!");
    });
  }

  if (clearFormBtn) {
    clearFormBtn.addEventListener("click", function () {
      if (contactForm) {
        contactForm.reset();
      }
      localStorage.removeItem("contactFormData");
      window.alert("Form cleared.");
    });
  }

  if (contactForm) {
    const savedData = JSON.parse(localStorage.getItem("contactFormData"));

    if (savedData) {
      const nameField = document.getElementById("name");
      const emailField = document.getElementById("email");
      const phoneField = document.getElementById("phone");
      const feedbackField = document.getElementById("feedback");
      const customOrderField = document.getElementById("customOrder");

      if (nameField) nameField.value = savedData.name || "";
      if (emailField) emailField.value = savedData.email || "";
      if (phoneField) phoneField.value = savedData.phone || "";
      if (feedbackField) feedbackField.value = savedData.feedback || "";
      if (customOrderField) customOrderField.checked = savedData.customOrder || false;
    }
  }
});
