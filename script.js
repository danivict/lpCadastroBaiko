const barFixed = document.getElementsByClassName("bar-fixed")[0];
// window.addEventListener("scroll", (event) => {

// });
// function fade() {
// barFixed.classList.add("fade-out");
//     console.log("ds");
// }
// console.log(barFixed);

/**
 * This function will determine if a client mousewheel is scrolling up or down.
 */
//window.addEventListener("load", eScroll);

function eScroll() {

    window.addEventListener('mousewheel', (event) => {

        let originalEvent = event.wheelDeltaY;

        if (event.wheelDeltaY >= 0) {
            console.log('Scroll up');
        }
        else {
            console.log('Scroll down');
        }
    });
}

window.addEventListener("load", scrollDown);

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

        if (window.scrollY < 250) {

            barFixed.classList.add("fade-out");
            barFixed.classList.remove("fade-in");
            // console.log(event.wheelDeltaY);
            // console.log('Mousewheel has scrolled up');
        }
    })

}