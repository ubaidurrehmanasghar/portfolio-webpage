/* Toggle Icon Navbar */
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
menuIcon.onclick = () => {
    menuIcon.classList.toggle('fa-xmark');
    navbar.classList.toggle('active');
}
// Selecting all navbar links and sections
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('nav a');

// Creating an IntersectionObserver to observe sections
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        const link = document.querySelector(`nav a[href="#${entry.target.id}"]`);
        
        if (entry.isIntersecting) {
            // Add 'active' class to the navbar link corresponding to the section
            link.classList.add('active');
        } else {
            // Remove 'active' class when section is not in view
            link.classList.remove('active');
        }
    });
}, { threshold: 0.6 }); // Adjust threshold to control when the section is considered 'in view'

// Observe each section
sections.forEach(section => {
    observer.observe(section);
});
/* Scroll Reveal */
ScrollReveal({
    distance: '80px',
    duration:2000,
    delay: 200,
 });
 ScrollReveal().reveal('.home-content, heading', { origin: 'top' });
 ScrollReveal().reveal('.home-img, .services-container,.portfolio-box, .contact form', { origin: 'bottom' });
 ScrollReveal().reveal('.home-content h1, .about-img', { origin: 'left' });
 ScrollReveal().reveal('.home-content p, .about-content', { origin: 'right' });
