document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu toggle
    const menuToggle = document.getElementById('menuToggle');
    const navLinks = document.getElementById('navLinks');
    const navItems = document.querySelectorAll('.nav-links a');

    menuToggle.addEventListener('click', function() {
        navLinks.classList.toggle('active');
    });

    // Close mobile menu when a link is clicked
    navItems.forEach(item => {
        item.addEventListener('click', function() {
            navLinks.classList.remove('active');
        });
    });

    // Smooth scroll effect for section links
    function smoothScroll(event) {
        event.preventDefault(); // Prevent the default anchor behavior

        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);

        window.scrollTo({
            top: targetElement.offsetTop - document.querySelector('header').offsetHeight, // Adjust offset for header
            behavior: 'smooth'
        });
    }

    navItems.forEach(item => {
        item.addEventListener('click', smoothScroll);
    });

    // Add smooth scroll for "Get in Touch" button
    const getStartedButton = document.querySelector('.btn');
    if (getStartedButton) {
        getStartedButton.addEventListener('click', smoothScroll);
    }
});
