const buttonTop = document.getElementById('button-top');


window.addEventListener('scroll', () => {
    const scrollTop = window.scrollY; // Posição vertical do usuário
    const larguraTela = window.innerWidth;
    if (scrollTop > 500 && larguraTela <= 500) {
        buttonTop.style.display = "block";
    } else {
        buttonTop.style.display = "none";
    }
})

