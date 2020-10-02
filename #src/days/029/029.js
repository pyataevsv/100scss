(() => {
    const input = document.querySelector('.d29__input')
    const dd = document.querySelector('.d29__list')
    const itemList = document.querySelectorAll('.d29__list-item')
    let itemText = [], y = 0, z = 0
    for (let i of itemList) {
        itemText[y] = i.innerHTML
        y++
    }


    input.addEventListener('input', function () {
        let value = this.value

        if (!value) {
            dd.classList.add('d29__list__hidden')
        } else {
            dd.classList.remove('d29__list__hidden')
        }

        for (let item of itemList) {

            item.innerHTML = itemText[z] + value
            z++
        }
        z = 0
    })
    input.addEventListener('focusout', function () {
        dd.classList.add('d29__list__hidden')
        z = 0
        for (let item of itemList) {
            item.innerHTML = itemText[z]
            input.value = ''
            z++
        }
        z = 0
    })

})();