// Simple enhancements for Sunny Day Adventures static site

document.addEventListener('DOMContentLoaded', () => {
  // Smooth highlight of current nav section
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav a');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        navLinks.forEach(link => {
          link.classList.toggle('active', link.getAttribute('href') === `#${entry.target.id}`);
        });
      }
    });
  }, { threshold: 0.35 });

  sections.forEach(sec => observer.observe(sec));

  // Form note – remind that WhatsApp is faster
  const form = document.querySelector('.contact-form');
  if (form) {
    form.addEventListener('submit', (e) => {
      // Formspree will handle it. Just a gentle UX note.
      const note = form.querySelector('.form-note');
      if (note) {
        note.textContent = 'Thanks! We usually reply fastest on WhatsApp.';
      }
    });
  }
});
