// Get the mode toggle button
const modeToggleBtn = document.getElementById('modeToggle');

// Add an event listener for the button
modeToggleBtn.addEventListener('click', () => {
    // Toggle the 'dark-mode' class on the body
    document.body.classList.toggle('dark-mode');

    // Optionally, update the button text based on the current mode
    if (document.body.classList.contains('dark-mode')) {
        modeToggleBtn.textContent = 'Switch to Light Mode';
    } else {
        modeToggleBtn.textContent = 'Switch to Dark Mode';
    }
});

function toggleMenu() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('active');
}

// Show Alert on Gallery Item Click
const galleryImages = document.querySelectorAll('.gallery img');
galleryImages.forEach((img) => {
    img.addEventListener('click', () => {
        alert(`You clicked on the image: ${img.alt}`);
    });
});


// Smooth Scroll to Sections
const navLinks = document.querySelectorAll('nav ul li a');
navLinks.forEach((link) => {
    link.addEventListener('click', (event) => {
        const targetId = link.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);
        if (targetSection) {
            // If the target section exists, perform smooth scrolling
            event.preventDefault();
            targetSection.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});


// Animate Elements on Scroll
const animateOnScroll = () => {
    const sections = document.querySelectorAll('section');
    const triggerBottom = window.innerHeight / 5 * 4;

    sections.forEach((section) => {
        const sectionTop = section.getBoundingClientRect().top;

        if (sectionTop < triggerBottom) {
            section.classList.add('show');
        } else {
            section.classList.remove('show');
        }
    });
};

window.addEventListener('scroll', animateOnScroll);
animateOnScroll(); // Initial check

// Initial Button Text Setting
updateButtonText();

document.getElementById('modeToggle').addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
});

// Select the menu toggle button and the navigation list
const menuToggle = document.querySelector('#mobile-menu');
const navList = document.querySelector('#nav-list');

// Add click event listener to toggle the 'open' class on the nav list
menuToggle.addEventListener('click', () => {
    navList.classList.toggle('open');
});

// JavaScript to toggle the navigation menu
document.addEventListener("DOMContentLoaded", function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.querySelector('nav ul');

    menuToggle.addEventListener('click', function() {
        navMenu.classList.toggle('open'); // Toggle the 'open' class
    });
});
// Select elements
const menuToggle = document.querySelector('.menu-toggle'); // Hamburger icon
const navMenu = document.querySelector('nav ul'); // Navigation menu
const sidebar = document.querySelector('aside'); // Sidebar

// Function to toggle the navigation menu
function toggleNavMenu() {
    navMenu.classList.toggle('open'); // Toggle the open class
}

// Function to toggle the sidebar
function toggleSidebar() {
    sidebar.classList.toggle('open'); // Toggle the open class
}

// Event listener for the hamburger menu click
menuToggle.addEventListener('click', () => {
    toggleNavMenu(); // Toggle navigation menu
    toggleSidebar(); // Toggle sidebar
});

// Close sidebar and navigation when clicking outside
document.addEventListener('click', (event) => {
    const isClickInsideMenu = navMenu.contains(event.target) || menuToggle.contains(event.target);
    const isClickInsideSidebar = sidebar.contains(event.target);

    // Close sidebar and navigation if clicking outside
    if (!isClickInsideMenu && !isClickInsideSidebar) {
        navMenu.classList.remove('open');
        sidebar.classList.remove('open');
    }
});
