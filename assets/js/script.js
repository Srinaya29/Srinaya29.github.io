// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });
  
  // Form submission handling
  const contactForm = document.querySelector('#contact form');
  if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
      e.preventDefault();
      const formData = new FormData(this);
      const name = formData.get('name');
      const email = formData.get('email');
      const message = formData.get('message');
  
      // Simulate form submission
      console.log('Name:', name);
      console.log('Email:', email);
      console.log('Message:', message);
  
      alert('Thank you for your message! I will get back to you soon.');
      this.reset();
    });
  }
  
  // Dynamic year in footer
  const year = new Date().getFullYear();
  document.querySelector('footer p').textContent = `© ${year} Srinaya. All rights reserved.`;