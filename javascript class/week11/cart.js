//define items with price and img

const items = [
    { name: "Apple", price: 0.99, image: "🍎" },
    { name: "Banana", price: 0.59, image: "🍌" },
    { name: "Orange", price: 0.79, image: "🍊" }
  ];
  
  let cart = [];

  //get elements from html
  const itemsList = document.getElementById("items-list");
  const cartList = document.getElementById("cart-list");
  const totalPrice = document.getElementById("total-price");
  
  // Render items to buy
  function renderItems() {
    itemsList.innerHTML = "";
    //set each item with the name image and price into html
    items.forEach(item => {
      const div = document.createElement("div");
      div.className = "item";
      div.innerHTML = `
        <h3>${item.image} ${item.name}</h3>
        <p>$${item.price.toFixed(2)}</p>
        <button onclick="addToCart('${item.name}')">Add to Cart</button>
      `;
      itemsList.appendChild(div);
    });
  }
  
  // Render cart
  function renderCart() {
    cartList.innerHTML = "";
    cart.forEach((item, index) => {
      const div = document.createElement("div");
      div.className = "cart-item";
      div.innerHTML = `
        <h4>${item.image} ${item.name}</h4>
        <p>$${item.price.toFixed(2)}</p>
        <button onclick="removeFromCart(${index})">Remove from Cart</button>
      `;
      cartList.appendChild(div);
    });
    updateTotal();
  }
  
  //make function to add items into the cart
  function addToCart(name) {
    const item = items.find(i => i.name === name);
    cart.push(item);
    renderCart();
  }
  //make function to remove items from cart
  function removeFromCart(index) {
    cart.splice(index, 1);
    renderCart();
  }
  //create funtion to keep track of the price 
  function updateTotal() {
    const total = cart.reduce((sum, item) => sum + item.price, 0);
    totalPrice.textContent = total.toFixed(2);
  }
  
  renderItems();
  