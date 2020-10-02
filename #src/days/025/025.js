(() => {
    const pointer = document.querySelector('.d25__pointer-box')
    const card = document.querySelector('.d25__card')

    pointer.addEventListener('click', () => {
        pointer.classList.add('d25__pointer-box__hide')
        const foo = () => {
            pointer.removeEventListener('transitionend', foo)
            card.classList.remove('d25__card__hide')
        }
        pointer.addEventListener('transitionend', foo)
    })

    card.addEventListener('click', () => {
        card.classList.add('d25__card__hide')
        const foo = () => {
            card.removeEventListener('transitionend', foo)
            pointer.classList.remove('d25__pointer-box__hide')
        }
        card.addEventListener('transitionend', foo)
    })

})();