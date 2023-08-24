const barFixed = document.getElementsByClassName("bar-fixed")[0];

function eScroll() {

    window.addEventListener('mousewheel', (event) => {

        if (event.wheelDeltaY >= 0) {
            console.log('Scroll up');
        }
        else {
            console.log('Scroll down');
        }
    });
}

window.addEventListener("load", scrollDown);
const triggerPointVH = 500; // Distância em vh a partir do topo para mostrar a mensagem
const windowHeightVH = (window.innerHeight / document.documentElement.clientHeight) * 100;

function scrollDown() {

    window.addEventListener('mousewheel', (event) => {

        if (event.wheelDeltaY <= 0) {
            barFixed.classList.add("fade-in");
            barFixed.classList.remove("fade-out");
            // console.log(event.wheelDeltaY);
            // console.log('Mousewheel has scrolled down');
        }
    })
}

window.addEventListener("load", scrollUp);

function scrollUp() {

    window.addEventListener('mousewheel', () => {

        if (window.scrollY < 300) {
            barFixed.classList.add("fade-out");
            barFixed.classList.remove("fade-in");
            // console.log(event.wheelDeltaY);
            // console.log('Mousewheel has scrolled up');
        }
    })

}

// // Seleciona o elemento que representa a área desejada na tela
// const areaDesejada = document.getElementById('sua-area-desejada');

// // Função para verificar se o usuário está na área desejada
// function verificarArea() {
//     const alturaTela = window.innerHeight; // Altura da tela visível
//     const scrollTop = window.scrollY; // Posição vertical do usuário
//     const areaTopo = areaDesejada.offsetTop; // Posição vertical da área desejada

//     // Verifica se o topo da área desejada está visível na tela
//     if (scrollTop <= areaTopo && areaTopo <= scrollTop + alturaTela) {
//         console.log('Usuário está na área desejada');
//     } else {
//         console.log('Usuário não está na área desejada');
//     }
// }

// // Registra o evento de scroll para chamar a função verificarArea
// window.addEventListener('scroll', verificarArea);
