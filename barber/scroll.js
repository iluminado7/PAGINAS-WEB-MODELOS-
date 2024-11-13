document.addEventListener('DOMContentLoaded', function() {
    const menuLinks = document.querySelectorAll('.nav-bar a');
  
    menuLinks.forEach(link => {
      link.addEventListener('click', smoothScroll);
    });
  
    function smoothScroll(event) {
      event.preventDefault();
      const targetId = event.target.getAttribute('href');
      const targetSection = document.querySelector(targetId);
      
      if (targetSection) {
        const targetPosition = targetSection.offsetTop;
        const startPosition = window.pageYOffset;
        const distance = targetPosition - startPosition;
        const duration = 800; // Duración de la animación en milisegundos
        const startTime = performance.now();
    
        function animation(currentTime) {
          const elapsedTime = currentTime - startTime;
          const progress = Math.min(elapsedTime / duration, 1);
          const easing = easeInOutCubic(progress);
          window.scrollTo(0, startPosition + distance * easing);
    
          if (elapsedTime < duration) {
            requestAnimationFrame(animation);
          }
        }
    
        function easeInOutCubic(t) {
          return t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;
        }
    
        requestAnimationFrame(animation);
      }
    }
  });
  