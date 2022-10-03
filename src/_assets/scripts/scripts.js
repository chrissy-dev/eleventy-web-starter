(async () => {
	const menuToggle = document.querySelector('#mobile-menu-toggle');
	const mobileMenu = document.querySelector('#mobile-menu');

    menuToggle.addEventListener('click', (e) => {
        // If the current value is 'false' but we've just clicked it - it's going to be expanded.
        let isExpanded = menuToggle.getAttribute("aria-expanded") == 'false';
        menuToggle.setAttribute("aria-expanded", isExpanded);
        mobileMenu.setAttribute("aria-expanded", isExpanded);
        mobileMenu.classList.toggle('hidden');
    });
})();

