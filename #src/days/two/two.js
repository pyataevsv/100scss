(() => {
    let card = document.querySelector('.two__card')
    let btn = document.querySelector('.two__button')

    card.classList.add('two__card__transition')
    card.classList.remove('two__card__fade-in')

    btn.addEventListener('click', () => {
        card.classList.add('two__card__fade-out')

        const foo = () => {
            console.log('end')
            card.classList.remove('two__card__transition')
            card.classList.remove('two__card__fade-out')
            card.classList.add('two__card__fade-in')

            setTimeout(() => {
                card.classList.add('two__card__transition')
                card.classList.remove('two__card__fade-in')
            })
            //card.classList.remove('two__card__fade-in')
            card.removeEventListener('transitionend', foo)
        }
        card.addEventListener('transitionend', foo)
    })
})();


