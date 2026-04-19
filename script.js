
    const cart = [];

    document.querySelectorAll(".cartbtn").forEach(btn => {
      btn.addEventListener("click", function (e) {
        e.preventDefault();

        const name = this.getAttribute("data-name");
        const price = this.getAttribute("data-price");
        const img = this.getAttribute("data-img");

        // Add product to cart array
        cart.push({ name, price, img });

        // Update cart counter
        document.getElementById("cart-count").innerText = cart.length;
      });
    });

    function toggleCart() {
      const container = document.getElementById("cart-container");
      container.style.display = container.style.display === "none" ? "block" : "none";

      // Show items
      const cartItemsDiv = document.getElementById("cart-items");
      cartItemsDiv.innerHTML = "";

      cart.forEach(item => {
        const div = document.createElement("div");
        div.style.marginBottom = "15px";
        div.innerHTML = `
        <img src="${item.img}" alt="${item.name}" width="100">
        <p><strong>${item.name}</strong></p>
        <p>${item.price}</p>
        <hr>
      `;
        cartItemsDiv.appendChild(div);
      });
    }
