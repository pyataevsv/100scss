(() => {

    const rect = document.querySelector('.d22__km-cir')

    document.addEventListener('scroll', () => {
        if (isInViewport(rect)) {
            rect.classList.add('d22__km-cir__animated')
            document.querySelector('.d22__steps-cir').classList.add('d22__steps-cir__animated')
            document.querySelector('.d22__cal-cir').classList.add('d22__cal-cir__animated')


        }
    })


})();

function isInViewport(element) {
    const rect = element.getBoundingClientRect();

    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}