(function () {
    const openMenuButton = document.querySelector('.header__button-burger');
    const closeMenuButton = document.querySelector('.header__close-button');

    const mobileMenu = document.querySelector('.header__menu-mobile');

    function openMenuMobile(event) {
        event.preventDefault();

        mobileMenu.style.width = '100vw';
    }

    function closeMenuMobile(event) {
        event.preventDefault();

        mobileMenu.style.width = '0%';
    }

    openMenuButton.addEventListener('click', openMenuMobile);
    closeMenuButton.addEventListener('click', closeMenuMobile);
})();
