
  const form = document.getElementById('register-form');

  // Verificamos que el formulario exista antes de añadir el listener
  if (form) {
    form.addEventListener('submit', async (e) => {
      e.preventDefault(); // Evita el refresco de inmediato

      const username = document.getElementById('username').value;
      const email = document.getElementById('email').value;
      const passwordHash = document.getElementById('passwordHash').value;

      try {
        const response = await fetch('http://localhost:3000/api/auth/signup', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ username, email, passwordHash }),
        });

        const data = await response.json();

        if (response.ok) {
          alert('✅ ¡Cuenta creada con éxito!');
          window.location.href = '/login'; 
        } else {
          // Si el backend devuelve un error (ej: email duplicado)
          alert('❌ Error: ' + (data.error || 'No se pudo crear la cuenta'));
        }
      } catch (error) {
        console.error('Error en la conexión:', error);
        alert('Hubo un error al conectar con el servidor. ¿Está encendido el backend?');
      }
    });
  }
