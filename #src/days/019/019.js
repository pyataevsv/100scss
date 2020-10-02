(() => {
    const r = document.querySelector('.d19__round')
    const back = document.querySelector('.d19__back-box')

    const b1 = document.querySelector('.d19__cir1')
    const b2 = document.querySelector('.d19__cir2')
    const b3 = document.querySelector('.d19__cir3')

    b1.addEventListener('click', () => {
        r.classList.remove('d19__round__mid')
        r.classList.remove('d19__round__right')
        r.classList.add('d19__round__left')

        back.classList.remove('d19__back-box__mid')
        back.classList.remove('d19__back-box__right')
        back.classList.add('d19__back-box__left')

    })

    b2.addEventListener('click', () => {
        r.classList.remove('d19__round__right')
        r.classList.remove('d19__right__left')
        r.classList.add('d19__round__mid')

        back.classList.remove('d19__back-box__right')
        back.classList.remove('d19__back-box__left')
        back.classList.add('d19__back-box__mid')
    })
    b3.addEventListener('click', () => {
        r.classList.remove('d19__round__left')
        r.classList.remove('d19__right__mid')
        r.classList.add('d19__round__right')

        back.classList.remove('d19__back-box__left')
        back.classList.remove('d19__back-box__mid')
        back.classList.add('d19__back-box__right')
    })

})();