let cards = document.querySelectorAll(".set-item");

cards.forEach((card) => {
  let minusButton = card.querySelector(".minus");
  let plusButton = card.querySelector(".plus");
  let inputField = card.querySelector(".inputField");
  let addCartButton = card.querySelector(".add-to-cart button");


  let quantityElement = card.querySelector(".stock");
  let quantityText = quantityElement.textContent;
  let availableStock = parseInt(quantityText.match(/\d+/)[0]);

  let value = parseInt(inputField.value) || 1;


  const addminus = () => {
    if (value > 1) {
      value -= 1;
      inputField.value = value;
      availableStock += 1
      quantityElement.textContent = "Total Stocks Available: " + availableStock;

    }
  };

  const addplus = () => {
    if (availableStock > 0) {
      value += 1;
      inputField.value = value;
      availableStock -= 1
      quantityElement.textContent = "Total Stocks Available: " + availableStock;
    }
  };

  const addToCart = () => {

    alert("Added to Cart Successfully!");

    let item = {
      img: card.querySelector(".item-img").innerHTML,
      text: card.querySelector(".item-area-text h3").innerText,
      price: card.querySelector(".price span").innerHTML,
      quantity: value,
    };

    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart.push(item);
    localStorage.setItem("cart", JSON.stringify(cart));
    
  };
  minusButton.addEventListener("click", addminus);
  plusButton.addEventListener("click", addplus);
  addCartButton.addEventListener("click", addToCart);

});

/* for animation */

  document.addEventListener("DOMContentLoaded", () => {
    const left = document.querySelector('.about-section-left');
    const right = document.querySelector('.about-section-right');
    const middle = document.querySelector('.about-section-middle');

    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          
        }
        else {
          entry.target.classList.remove('visible');
       }
      });
    }, {
      threshold: 0.2
    });

    observer.observe(left);
    observer.observe(right);
    observer.observe(middle);
  });

  


