const buttonTop = document.getElementById('button-top');
const main = document.getElementById('main');

window.addEventListener('DOMContentLoaded', () => {
    const screenHeight = window.innerHeight;
    console.log(String(screenHeight));
    main.style.height = String(screenHeight) + 'px';
    if (window.innerHeight < 700 && window.innerWidth < 500) {
        main.style.height = String(screenHeight + 150) + 'px';
    }
});

window.addEventListener('scroll', () => {
    const scrollTop = window.scrollY; // Posição vertical do usuário
    const larguraTela = window.innerWidth;
    if (scrollTop > 500 && larguraTela <= 500) {
        buttonTop.style.display = "block";
    } else {
        buttonTop.style.display = "none";
    }
});

