function addToCartWithOptions(button, name, price) {
    let card = button.closest(".card");

    let beden = card.querySelector(".beden").value;
    let renk = card.querySelector(".renk").value;

    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    cart.push({
        name: name,
        price: Number(price),
        beden: beden,
        renk: renk
    });

    localStorage.setItem("cart", JSON.stringify(cart));

    alert(name + " (" + beden + " - " + renk + ") sepete eklendi!");
}
