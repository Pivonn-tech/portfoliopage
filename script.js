// Smooth scrolling for navigation links
const navLinks = document.querySelectorAll('nav a');

navLinks.forEach(link => {
    link.addEventListener('click', e => {
        e.preventDefault();
        const targetSection = document.querySelector(link.getAttribute('href'));
        targetSection.scrollIntoView({ behavior: 'smooth' });
    });
});

// Form submission handling
const contactForm = document.getElementById('contact-form');
const submitButton = document.querySelector('#contact-form button');

contactForm.addEventListener('submit', async function (e) {
    e.preventDefault();
    
    // Disable the submit button during submission
    submitButton.disabled = true;
    submitButton.textContent = 'Sending...';

    // Simulate form submission (replace with actual API call or backend integration)
    await simulateFormSubmission();

    // Reset form after submission
    contactForm.reset();
    submitButton.disabled = false;
    submitButton.textContent = 'Send Message';
});

async function simulateFormSubmission() {
    // Simulate a delay for demonstration purposes
    await new Promise(resolve => setTimeout(resolve, 1500));
    // Replace with your actual form submission logic (e.g., fetch or axios)
}

// Reveal elements on scroll
const hiddenElements = document.querySelectorAll('.hidden');

function revealElements() {
    hiddenElements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        
        if (elementTop < windowHeight * 0.8) {
            element.classList.add('visible');
        }
    });
}

window.addEventListener('scroll', revealElements);
window.addEventListener('load', revealElements);

// Add interactivity to portfolio items (e.g., modal)
const portfolioItems = document.querySelectorAll('.project');

portfolioItems.forEach(item => {
    item.addEventListener('click', () => {
        // Show a modal or expand the project details as per your design
        // Example: createModal(item);
    });
});
