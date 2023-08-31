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

// Seleciona o elemento que representa a área desejada na tela
const cards = document.querySelectorAll('.card');
const card3Bg = document.querySelector('.card-3-bg');
const card3SubBg = document.querySelector('.card-3-sub-bg');
const tag = document.querySelector('.tag');

const launchDateWrapper = document.querySelector('.launch-date-wrapper');
const invText = document.querySelector('.inv-text');

const titleVip = document.querySelector('.title-vip');
const exlusive = document.getElementById('exclusive-animated');

const formButton = document.getElementById('form-button');

// Função para verificar se o usuário está na área desejada
function verificarArea() {
    const alturaTela = window.innerHeight; // Altura da tela visível
    const larguraTela = window.innerWidth;
    const scrollTop = window.scrollY; // Posição vertical do usuário
    cards.forEach(card => {
        card.classList.remove('card-hover');
        card.classList.remove('card-1-hover');
        card3Bg.classList.remove('card-3-bg-hover');
        tag.classList.remove('tag-hover');
    });

    cards.forEach(card => {
        // Verifica se o topo da área desejada está visível na tela
        const areaTopo = (card.offsetTop); // Posição vertical da área desejada
        if (scrollTop <= areaTopo && areaTopo + 500 <= scrollTop + alturaTela && larguraTela <= 500) {
            card.classList.add('card-hover');
            if (card.classList.contains('card-1')) {
                card.classList.add('card-1-hover');
            }
            if (card.classList.contains('card-3')) {
                card3SubBg.classList.add('card-3-bg-hover');
            }
            if (card.classList.contains('card-4')) {
                tag.classList.add('tag-hover');
            }

        } else {
            card.classList.remove('card-hover');
            card.classList.remove('card-1-hover');
            if (card.classList.contains('card-3')) {
                card3SubBg.classList.remove('card-3-bg-hover');
            }
            if (card.classList.contains('card-4')) {
                tag.classList.remove('tag-hover');
            }
        }
    });

    // Verifica se o topo da área desejada está visível na tela
    const areaTopoLaunchDateWrapper = launchDateWrapper.offsetTop; // Posição vertical da área desejada
    if (scrollTop <= areaTopoLaunchDateWrapper - 100 && areaTopoLaunchDateWrapper + 300 <= scrollTop + alturaTela && larguraTela <= 500) {
        invText.classList.add('inv-text-hover');
    }
    else {
        invText.classList.remove('inv-text-hover');
    }

    const areaTopoExclusive = titleVip.offsetTop; // Posição vertical da área desejada
    if (scrollTop <= areaTopoExclusive - 100 && areaTopoExclusive + 400 <= scrollTop + alturaTela) {
        exlusive.play();
    }
    else {
    }

    const areaTopoFormButton = formButton.offsetTop; // Posição vertical da área desejada
    if (scrollTop <= areaTopoFormButton && areaTopoFormButton + 500 <= scrollTop + alturaTela && larguraTela <= 500) {
        formButton.classList.add('form-button-hover');
    }
    else {
        formButton.classList.remove('form-button-hover');

    }

}

// Registra o evento de scroll para chamar a função verificarArea
window.addEventListener('scroll', verificarArea);
