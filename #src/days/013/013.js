(() => {
    const l = document.querySelectorAll('.d13__image__overlay')
    const card = document.querySelector('.d13__card')
    const close = document.querySelector('.d13__close-btn')

    for (let i of l) {
        i.addEventListener('click', () => {
            console.log('yo')
            card.classList.remove('d13__card--opened');
        })
    }
    close.addEventListener('click', () => {
        card.classList.add('d13__card--opened');
    })

})();