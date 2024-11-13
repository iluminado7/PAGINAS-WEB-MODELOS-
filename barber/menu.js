const menuElement = document.querySelectorAll('.navlink, .logo');
const menuFather = document.querySelector('.menu');
menuElement.forEach(Element => {
  Element.addEventListener('mouseover', () => {
    menuFather.style.backgroundColor = '#000000'; // Cambia el color de fondo a negro
    menuFather.style.transition = 'background-color 0.3s'; // Agrega una transición
  });

  Element.addEventListener('mouseout', () => {
    menuFather.style.backgroundColor = ''; // Cambia el color de fondo de vuelta al predeterminado
    menuFather.style.transition = 'background-color 0.3s'; // Agrega una transición
  });
});
