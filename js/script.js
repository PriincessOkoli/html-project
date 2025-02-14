window.addEventListener("scroll", function() {
    let navbar = document.getElementById("top-bar");
    if (window.scrollY > 50) {
        navbar.classList.add("sticky");
    } else {
        navbar.classList.remove("sticky");
    }
});
