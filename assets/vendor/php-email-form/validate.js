document.getElementById('contactForm').addEventListener('submit', function(event) {
  event.preventDefault(); // Evita la recarga de página
  var form = event.target;

  // Muestra el mensaje de carga
  document.querySelector('.loading').style.display = 'block';
  document.querySelector('.error-message').style.display = 'none';
  document.querySelector('.sent-message').style.display = 'none';

  fetch(form.action, {
      method: form.method,
      body: new FormData(form),
      headers: {
          'Accept': 'application/json'
      }
  }).then(response => {
      // Oculta el mensaje de carga
      document.querySelector('.loading').style.display = 'none';
      
      if (response.ok) {
          document.querySelector('.sent-message').style.display = 'block';
          form.reset(); // Limpia el formulario después de enviarlo
      } else {
          document.querySelector('.error-message').style.display = 'block';
      }
  }).catch(error => {
      document.querySelector('.loading').style.display = 'none';
      document.querySelector('.error-message').style.display = 'block';
  });
});
