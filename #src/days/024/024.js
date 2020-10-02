(() => {
    const btn = document.querySelector('.d24__button');
    const circle = document.querySelector('.d24__circle')

    btn.addEventListener('click', () => {
        circle.classList.remove('d24__circle__animated')
        btn.classList.toggle('d24__button__min')
        btn.addEventListener('transitionend', foo)

        function foo() {

            if (btn.classList.contains('d24__button__min')) circle.classList.add('d24__circle__animated')

            btn.removeEventListener('transitionend', foo)
        }
    })
})();