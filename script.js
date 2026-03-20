document.addEventListener("DOMContentLoaded", function () {

  /* SUBSCRIBE FORM */
  const subscribeForm = document.getElementById("subscribeForm");

  if (subscribeForm) {
    subscribeForm.addEventListener("submit", function (event) {
      event.preventDefault();

      const subscriberEmail = document.getElementById("subscriberEmail");

      if (!subscriberEmail.checkValidity()) {
        subscriberEmail.reportValidity();
        return;
      }

      alert("Thank you for subscribing.");
      subscribeForm.reset();
    });
  }

  /* GALLERY CART */
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
    let cart = getCart();
    cart.push(itemName);
    saveCart(cart);
    alert(itemName + " added to cart!");
  }

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

  if (addToCartButtons.length > 0) {
    addToCartButtons.forEach(function (button) {
      button.addEventListener("click", function () {
        const productCard = button.closest(".product-card");
        const itemName = productCard.querySelector(".product-title").textContent;
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
      alert("Cart cleared.");
    });
  }

  if (processOrderBtn) {
    processOrderBtn.addEventListener("click", function () {
      sessionStorage.removeItem("cart");
      displayCart();
      alert("Thank you for your order.");
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

  /* ABOUT FORM */
  const contactForm = document.getElementById("contactForm");
  const clearFormBtn = document.getElementById("clearFormBtn");

  if (contactForm) {
    contactForm.addEventListener("submit", function (event) {
      event.preventDefault();

      if (!contactForm.checkValidity()) {
        contactForm.reportValidity();
        return;
      }

      const name = document.getElementById("name").value.trim();
      const email = document.getElementById("email").value.trim();
      const phone = document.getElementById("phone").value.trim();
      const feedback = document.getElementById("feedback").value.trim();
      const customOrder = document.getElementById("customOrder").checked;

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

  if (clearFormBtn) {
    clearFormBtn.addEventListener("click", function () {
      if (contactForm) {
        contactForm.reset();
      }
      localStorage.removeItem("contactFormData");
      alert("Form cleared.");
    });
  }

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
