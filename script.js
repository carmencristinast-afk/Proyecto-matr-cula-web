const formulario = document.getElementById('formAlumno');
const mensaje = document.getElementById('mensaje');

formulario.addEventListener('submit', function(e) {
    e.preventDefault(); // Evita que se recargue la página

    const nombre = document.getElementById('nombre').value.trim();
    const correo = document.getElementById('correo').value.trim();
    const curso = document.getElementById('curso').value;

    // Valida que no queden campos vacíos
    if (!nombre || !correo || !curso) {
        mensaje.className = 'text-danger';
        mensaje.textContent = '⚠️ Por favor, complete todos los campos.';
        return;
    }

    // Éxito
    mensaje.className = 'text-success';
    mensaje.textContent = '¡Registro exitoso! Datos guardados correctamente.';
    formulario.reset();
});            