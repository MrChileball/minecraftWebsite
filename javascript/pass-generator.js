function passgenerator() {
    const caracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+~`|}{[]:;?><,./-=';
  
    let contrasena = '';
    const longitud = 10;
  
    for (let i = 0; i < longitud; i++) {
      const indice = Math.floor(Math.random() * caracteres.length);
      contrasena += caracteres[indice];
    }
  
    const elementoContraseña = document.getElementById('contrasena-generada');
    elementoContraseña.textContent = 'Contraseña generada: ' + contrasena;
  }