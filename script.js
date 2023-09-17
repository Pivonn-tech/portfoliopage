const { Analytics } = require('@vercel/analytics');
// Smooth scrolling for navigation links
const navLinks = document.querySelectorAll("nav a");

navLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    const targetSection = document.querySelector(link.getAttribute("href"));
    targetSection.scrollIntoView({ behavior: "smooth" });
  });
});

// Form submission handling
const contactForm = document.getElementById("contact-form");
const submitButton = document.querySelector("#contact-form button");

contactForm.addEventListener("submit", async function (e) {
  e.preventDefault();

  // Disable the submit button during submission
  submitButton.disabled = true;
  submitButton.textContent = "Sending...";

  // Simulate form submission (replace with actual API call or backend integration)
  await simulateFormSubmission();

  // Reset form after submission
  contactForm.reset();
  submitButton.disabled = false;
  submitButton.textContent = "Send Message";
});

async function simulateFormSubmission() {
  // Simulate a delay for demonstration purposes
  await new Promise((resolve) => setTimeout(resolve, 1500));
  // Replace with your actual form submission logic (e.g., fetch or axios)
}

// Reveal elements on scroll
const hiddenElements = document.querySelectorAll(".hidden");

function revealElements() {
  hiddenElements.forEach((element) => {
    const elementTop = element.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    if (elementTop < windowHeight * 0.8) {
      element.classList.add("visible");
    }
  });
}

window.addEventListener("scroll", revealElements);
window.addEventListener("load", revealElements);

// Add interactivity to portfolio items (e.g., modal)
const portfolioItems = document.querySelectorAll(".project");

portfolioItems.forEach((item) => {
  item.addEventListener("click", () => {
    // Show a modal or expand the project details as per your design
    // Example: createModal(item);
  });
});

// JavaScript for toggling the navigation menu on smaller screens
const menuIcon = document.querySelector(".menu-icon");
const navbarMenu = document.querySelector(".navbar-menu");

menuIcon.addEventListener("click", () => {
  // Toggle the "active" class on the menu icon
  menuIcon.classList.toggle("active");

  // Toggle the display of the navigation menu
  if (navbarMenu.style.display === "flex") {
    navbarMenu.style.display = "none";
  } else {
    navbarMenu.style.display = "flex";
  }
});

// Get the modal element and the close button
const techDocModal = document.getElementById("techDocModal");
const closeButton = document.querySelector(".close");

// Get the project item that corresponds to the Technical Documentation Page Project
const techDocProject = document.querySelector(".tech-doc-project");

// Add a click event listener to the Technical Documentation Project item
techDocProject.addEventListener("click", () => {
  // Show the modal when the project item is clicked
  techDocModal.style.display = "block";
});

// Close the modal when the close button is clicked
closeButton.addEventListener("click", () => {
  techDocModal.style.display = "none";
});

// Close the modal when the user clicks anywhere outside the modal
window.addEventListener("click", (event) => {
  if (event.target === techDocModal) {
    techDocModal.style.display = "none";
  }
});
// JavaScript for Testimonial Section

const testimonials = [
    {
        icon: '👍',
        text: "Pivon's work is exceptional. I'm truly impressed by the quality and creativity.",
        author: 'John Doe',
    },
    {
        icon: '🚀',
        text: "Pivon is a front-end wizard. The websites created are both beautiful and efficient.",
        author: 'Jane Smith',
    },
    {
        icon: '💡',
        text: "I always turn to Pivon for web development. They have a knack for solving complex problems.",
        author: 'David Johnson',
    },
    {
        icon: '⭐',
        text: "Pivon's attention to detail is unmatched. I highly recommend their services.",
        author: 'Sarah Brown',
    },
    {
        icon: '🌟',
        text: "Working with Pivon has been a pleasure. Their dedication and skills are top-notch.",
        author: 'Michael Clark',
    },
];

const testimonialContainer = document.querySelector('.testimonial-container');

function createTestimonialElement(testimonial) {
    const testimonialElement = document.createElement('div');
    testimonialElement.classList.add('testimonial');
    testimonialElement.innerHTML = `
        <div class="testimonial-icon">${testimonial.icon}</div>
        <p class="testimonial-text">${testimonial.text}</p>
        <p class="testimonial-author">- ${testimonial.author}</p>
    `;
    return testimonialElement;
}

function displayTestimonials() {
    testimonials.forEach(testimonial => {
        const testimonialElement = createTestimonialElement(testimonial);
        testimonialContainer.appendChild(testimonialElement);
    });
}

// Call the function to display testimonials when the page loads
window.addEventListener('load', displayTestimonials);
