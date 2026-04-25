// company-script.js

// Mobile Menu Toggle
const mobileMenuToggle = () => {
    const menu = document.querySelector('.menu');
    const toggleButton = document.querySelector('.menu-toggle');

    toggleButton.addEventListener('click', () => {
        menu.classList.toggle('active');
    });
};

// Navbar Scroll Effects
const navbarScrollEffects = () => {
    const navbar = document.querySelector('.navbar');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
};

// Smooth Scrolling
const smoothScrolling = () => {
    const links = document.querySelectorAll('a[href^="#"]');

    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            target.scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
};

// Form Validation and Submission
const formValidationAndSubmission = () => {
    const form = document.querySelector('form');
    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const isValid = validateForm();
        if (isValid) {
            // Submit form data
            const formData = new FormData(form);
            // Perform submission (fetch API or any other method)
            console.log('Form submitted successfully!');
        }
    });
};

const validateForm = () => {
    // Implement validation logic (check required fields, formats, etc.)
    return true; // Adjust based on validation results
};

// Intersection Observer for Animations
const setupIntersectionObserver = () => {
    const observerOptions = {
        root: null,
        threshold: 0.1
    };

    const observerCallback = (entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    const targets = document.querySelectorAll('.animate-on-scroll');
    targets.forEach(target => {
        observer.observe(target);
    });
};

// Initialize all functions
const init = () => {
    mobileMenuToggle();
    navbarScrollEffects();
    smoothScrolling();
    formValidationAndSubmission();
    setupIntersectionObserver();
};

document.addEventListener('DOMContentLoaded', init);