document.addEventListener("DOMContentLoaded", function () {
    const toggleButton = document.querySelector(".custom-navbar-toggler");
    const navbarMenu = document.querySelector("#navbarNav");
    const iconList = toggleButton.querySelector(".bi-list");
    const iconX = toggleButton.querySelector(".bi-x");

    toggleButton.addEventListener("click", function () {
        navbarMenu.classList.toggle("d-block");

        // Alterna le icone
        iconList.classList.toggle("d-none");
        iconX.classList.toggle("d-none");
    });
});
