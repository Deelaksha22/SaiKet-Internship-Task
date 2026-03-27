const toggle = document.getElementById("menuToggle");
const nav = document.getElementById("navLinks");

toggle.addEventListener("click", () => {
    nav.classList.toggle("active");
});