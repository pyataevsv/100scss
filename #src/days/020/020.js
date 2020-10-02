(() => {
    const btn = document.querySelector('.d20__button')

    const path1 = document.querySelector('.d20__path1')
    const path2 = document.querySelector('.d20__path2')
    const path3 = document.querySelector('.d20__path3')
    const path4 = document.querySelector('.d20__path4')
    const svg = document.querySelector('.d20__svg-box')
    const cir = document.querySelector('.d20__back-cir')

    btn.addEventListener('click', () => {
        path1.classList.toggle('d20__path1__animated')
        path2.classList.toggle('d20__path2__animated')
        path3.classList.toggle('d20__path3__animated')
        path4.classList.toggle('d20__path4__animated')
        svg.classList.toggle('d20__svg-box__animated')
        cir.classList.toggle('d20__back-cir__animated')

        if (btn.innerHTML == 'send mail') { btn.innerHTML = 'reset' }
        else { btn.innerHTML = 'send mail' }


    })
})();