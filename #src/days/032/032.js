(() => {
    const inc = document.querySelector('.d32__inc')
    const dec = document.querySelector('.d32__dec')
    const count = document.querySelector('.d32__countnum')

    inc.addEventListener('click', () => {

        count.classList.add('d32__countnum__transition');
        count.classList.add('d32__countnum__fade-out');
        const f1 = () => {
            console.log('yo')
            count.innerHTML = Number(count.innerHTML) + 1;
            count.removeEventListener('transitionend', f1)
            count.classList.remove('d32__countnum__transition');
            count.classList.add('d32__countnum__fade-in');
            count.classList.remove('d32__countnum__fade-out');
            setTimeout(() => {
                count.classList.add('d32__countnum__transition');
                count.classList.remove('d32__countnum__fade-in');
            });
        }
        count.addEventListener('transitionend', f1)
    })

    dec.addEventListener('click', () => {

        count.classList.add('d32__countnum__transition');
        count.classList.add('d32__countnum__fade-in');
        const f1 = () => {
            console.log('yo')
            count.innerHTML = Number(count.innerHTML) - 1;
            count.removeEventListener('transitionend', f1)
            count.classList.remove('d32__countnum__transition');
            count.classList.add('d32__countnum__fade-out');
            count.classList.remove('d32__countnum__fade-in');
            setTimeout(() => {
                count.classList.add('d32__countnum__transition');
                count.classList.remove('d32__countnum__fade-out');
            });
        }
        count.addEventListener('transitionend', f1)
    })

})();