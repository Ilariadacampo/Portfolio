const navbarToggler = document.querySelector('.custom-navbar-toggler');
const menuIcon = navbarToggler.querySelector('.bi-list');
const closeIcon = navbarToggler.querySelector('.bi-x');
const navbarNav = document.querySelector('#navbarNav');

navbarToggler.addEventListener('click', () => {
    navbarNav.classList.toggle('show'); // Mostra/nasconde il menu
    menuIcon.classList.toggle('d-none'); // Nasconde l'hamburger
    closeIcon.classList.toggle('d-none'); // Mostra la "X"
});
