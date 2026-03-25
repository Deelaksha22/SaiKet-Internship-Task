let count = 1;

function increase() {
    count++;
    document.getElementById("qty").innerText = count;
}

function decrease() {
    if(count > 1) {
        count--;
        document.getElementById("qty").innerText = count;
    }
}

function addToCart() {
    alert("Added " + count + " item(s) to cart!");
}

function wishlist() {
    alert("Added to wishlist ❤️");
}