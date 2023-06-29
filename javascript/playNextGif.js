window.addEventListener('DOMContentLoaded', function() {
    var gifs = document.querySelectorAll('#gif-container img');
    var currentIndex = 0;

    function playNextGif() {
      gifs[currentIndex].style.display = 'none'; // Oculta el GIF actual
      currentIndex = (currentIndex + 1) % gifs.length; // Calcula el índice del siguiente GIF
      gifs[currentIndex].style.display = 'block'; // Muestra el siguiente GIF
    }

    setInterval(playNextGif, 2000); // Cambia de GIF cada 2 segundos (ajusta el tiempo según tus necesidades)
  });