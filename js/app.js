
// Y&M WEAR

let cart = JSON.parse(localStorage.getItem("cart")) || [];

function addToCart(name, price) {
    cart.push({
        name: name,
        price: price
    });

    localStorage.setItem("cart", JSON.stringify(cart));

    alert(name + " sepete eklendi!");
}

function removeFromCart(index) {
    cart.splice(index, 1);
    localStorage.setItem("cart", JSON.stringify(cart));
}

function getCartCount() {
    return cart.length;
}

console.log("Y&M WEAR yüklendi.");
console.log("Sepette " + getCartCount() + " ürün var.");
