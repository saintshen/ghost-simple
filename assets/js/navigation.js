// Toggle the menu open and close when on mobile
export default function navigationInit() {
    const burgerButton = document.querySelector('.nav-toggle');
    burgerButton.addEventListener('click', function () {
        document.body.classList.toggle('nav-open');
    });

    const navItems = document.querySelectorAll('.collection-nav .collection-nav-item a');
    const imageContainers = document.querySelectorAll('.collection-images .image-container');

    navItems.forEach(item => {
        item.addEventListener('mouseenter', function () {
            const urlId = this.parentElement.dataset.urlId;

            // Remove active class from all nav items and image containers
            navItems.forEach(nav => nav.parentElement.classList.remove('active'));
            imageContainers.forEach(img => img.classList.remove('active'));

            // Add active class to the clicked nav item
            this.parentElement.classList.add('active');

            // Add active class to the corresponding image container
            imageContainers.forEach(imgContainer => {
                if (imgContainer.dataset.urlId === urlId) {
                    imgContainer.classList.add('active');
                }
            });
        });
    });

    document.addEventListener('DOMContentLoaded', function () {
        const header = document.querySelector('header');
        let lastScrollY = window.scrollY;
        const headerHeight = header.offsetHeight;

        function handleScroll() {
            const currentScrollY = window.scrollY;
            if (currentScrollY === 0) {
                header.classList.remove('header-hidden');
            }
            else if (currentScrollY > lastScrollY && currentScrollY > headerHeight) {
                // Scrolling down
                header.classList.add('header-hidden');
            } else if (currentScrollY < lastScrollY) {
                // Scrolling up
                header.classList.remove('header-hidden');
            }
            lastScrollY = currentScrollY;
        }

        window.addEventListener('scroll', handleScroll);
        handleScroll();
    });
}
