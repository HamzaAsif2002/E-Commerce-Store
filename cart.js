document.addEventListener("DOMContentLoaded", () => {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    let cartContainer = document.querySelector(".cart");
  
    cart.forEach((item, index) => {
      let newdiv = document.createElement("div");
      newdiv.classList.add("cart-items");
      let numericPrice = parseFloat(item.price.replace("$", ""));
      let total = numericPrice * item.quantity;

  
      newdiv.innerHTML = `
        <div class="cart-item-img">${item.img}</div>
        <div class="cart-item-area-text">${item.text}</div>
        <div >${item.price}</div>      
        <div class="text-area-quantity">
            Quantity:
            <input type="text" placeholder=${item.quantity} class="inputField" readonly />
          </div>
        <div>Total Price = $${total.toFixed(2)}</div>
        <div class="add-to-cart">
          <button class="remove-from-cart">Remove From Cart</button>
        </div>
      `;
  
      // add click listener to remove button
      newdiv.querySelector(".remove-from-cart").addEventListener("click", () => {
        // remove from DOM
        newdiv.remove();
  
        // remove from localStorage (remove the correct index)
        cart.splice(index, 1);
        localStorage.setItem("cart", JSON.stringify(cart));
      });
  
      cartContainer.appendChild(newdiv);
    });
  });
  