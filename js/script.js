window.addEventListener("scroll", function() {
    let navbar = document.getElementById("top-bar");
    if (window.scrollY > 50) {
        navbar.classList.add("sticky");
    } else {
        navbar.classList.remove("sticky");
    }
});


document.addEventListener("DOMContentLoaded", function () {
    const backToTopButton = document.querySelector("#back-to-top");

    // Smooth scroll to top on click
    backToTopButton.addEventListener("click", function () {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });
});