// scripts.js
// Embudo de ventas y captura de formulario

document.addEventListener('DOMContentLoaded', function() {
  // Formulario de captura
  const form = document.querySelector('.lead-form');
  if(form) {
    form.addEventListener('submit', function(e) {
      e.preventDefault();
      // Aquí podrías enviar los datos a un backend o servicio externo
      alert('¡Gracias por tu interés! Pronto recibirás novedades de Vinos de Mendoza.');
      form.reset();
    });
  }
  // CTA scroll
  const ctaBtn = document.querySelector('.cta-btn');
  if(ctaBtn) {
    ctaBtn.addEventListener('click', function() {
      document.querySelector('.form-section').scrollIntoView({behavior: 'smooth'});
    });
  }
  // Embudo de ventas: resalta productos al hacer scroll
  window.addEventListener('scroll', function() {
    const products = document.querySelector('.products');
    if(products && window.scrollY > products.offsetTop - 200) {
      products.classList.add('highlight');
    }
  });
});
