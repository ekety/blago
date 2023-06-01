document.addEventListener('DOMContentLoaded', function () {
    function hamburgerMenu (hc,hm,mm) {
        let closeMenu = document.querySelector(hc);
        let openMenu = document.querySelector(hm);
        let mobileMenu = document.querySelector(mm);

        openMenu.addEventListener('click', function () {
            mobileMenu.classList.add('active-menu');
        });

        closeMenu.addEventListener('click', function () {
            mobileMenu.classList.remove('active-menu');
        });
    }

    hamburgerMenu(
        '.hamburger-close',
        '.hamburger-menu',
        '.mobile-menu');
        });