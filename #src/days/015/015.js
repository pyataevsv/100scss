(() => {

    const btn = document.querySelector('.d15__submit');
    const input = document.querySelector('.d15__input');
    const label = document.querySelector('label');
    const filename = document.querySelector('.d15__filename')
    const card = document.querySelector('.d15__card')

    input.addEventListener("change", () => {
        console.log(input.files[0].name)
        label.classList.toggle('d15__label--getfile')
        filename.innerHTML = input.files[0].name
    })

    btn.addEventListener('click', (e) => {

        e.preventDefault()
        if (label.classList.contains('d15__label--getfile')) {
            card.classList.add('d15__card--loading')
        }

        document.querySelector('.d15__loader').addEventListener('transitionend', () => {
            console.log('yo')
            document.querySelector('.d15__syncing').style.display = 'none';
            document.querySelector('.d15__check').style.display = 'block';
        })

    })


})();