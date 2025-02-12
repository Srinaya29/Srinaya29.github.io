// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault(); // Prevent default anchor behavior
      const targetId = this.getAttribute('href'); // Get the target section ID
      const targetSection = document.querySelector(targetId); // Find the target section
  
      if (targetSection) {
        // Scroll smoothly to the target section
        targetSection.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        });
      }
    });
  });
  
  // Form submission handling
  const contactForm = document.querySelector('#contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
      e.preventDefault(); // Prevent default form submission
  
      // Get form data
      const formData = new FormData(this);
      const name = formData.get('name');
      const email = formData.get('email');
      const message = formData.get('message');
  
      // Simulate form submission (replace with actual API call or backend logic)
      console.log('Form Data Submitted:'); // Log form data to the console
      console.log('Name:', name);
      console.log('Email:', email);
      console.log('Message:', message);
  
      // Show a success message to the user
      alert('Thank you for your message! I will get back to you soon.');
  
      // Reset the form after submission
      this.reset();
    });
  }
  
  // Dynamic year in footer
  const currentYear = new Date().getFullYear(); // Get the current year
  const yearElement = document.getElementById('current-year');
  if (yearElement) {
    yearElement.textContent = currentYear; // Update the footer year dynamically
  }