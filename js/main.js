// GO PROP — main.js
document.addEventListener('DOMContentLoaded', () => {
  // Placeholder for future interactions (gallery carousel controls, form validation, etc.)

  const contactForm = document.getElementById('contactForm');

  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const statusEl = document.getElementById('formStatus');
      const formData = new FormData(contactForm);

      fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(formData).toString(),
      })
        .then(() => {
          statusEl.textContent = 'Gracias, tu mensaje fue enviado. Nos contactaremos a la brevedad.';
          statusEl.classList.remove('form-status-error');
          contactForm.reset();
          contactForm.querySelector('button[type="submit"]').disabled = true;
        })
        .catch(() => {
          statusEl.textContent = 'Hubo un error al enviar el formulario. Intenta nuevamente o escribinos por email.';
          statusEl.classList.add('form-status-error');
        });
    });
  }
});