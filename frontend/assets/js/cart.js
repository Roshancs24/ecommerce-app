function getCart() {
    return JSON.parse(localStorage.getItem("cart")) || [];
}

function saveCart(cart) {
    localStorage.setItem("cart", JSON.stringify(cart));
}

function addToCart(id, name, price) {
    const cart = getCart();
    cart.push({ id, name, price });
    saveCart(cart);
    alert("Added to cart");
}

function loadCart() {
    const cart = getCart();
    const list = document.getElementById("cartList");
    list.innerHTML = "";

    cart.forEach((item, index) => {
        list.innerHTML += `
      <li>
        ${item.name} - ₹${item.price}
        <button onclick="removeFromCart(${index})">Remove</button>
      </li>
    `;
    });
}

function removeFromCart(index) {
    const cart = getCart();
    cart.splice(index, 1);
    saveCart(cart);
    loadCart();
}
