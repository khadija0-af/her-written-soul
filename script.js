window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;

    // Parallax Effect for Hero
    const sunsetBg = document.getElementById('sunset-bg');
    const birdsOverlay = document.getElementById('birds-overlay');

    if (sunsetBg) {
        // Sunset background stays still as requested
        sunsetBg.style.transform = 'none';
    }

    if (birdsOverlay) {
        // Birds glide across the entire viewport
        birdsOverlay.style.transform = `translate3d(${scrollY * -0.15}px, ${scrollY * 0.3}px, 0)`;
    }

    // Navbar Color Toggle
    const navbar = document.getElementById('navbar');
    if (scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Reveal Animation on Scroll
const revealElements = document.querySelectorAll('.reveal');

const revealOnScroll = () => {
    const windowHeight = window.innerHeight;
    const revealPoint = 150;

    revealElements.forEach(el => {
        const revealTop = el.getBoundingClientRect().top;
        if (revealTop < windowHeight - revealPoint) {
            el.classList.add('active');
        }
    });
};

window.addEventListener('scroll', revealOnScroll);

// Initial call to reveal elements already in view
revealOnScroll();

// Contact Form "Submission"
const contactForm = document.getElementById('contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Thank you for sharing your whisper. We will reach out soon!');
        contactForm.reset();
    });
}
