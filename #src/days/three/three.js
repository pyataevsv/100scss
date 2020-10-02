(() => {
    const list = document.querySelectorAll('.three__item-box')

    for (let item of list) {
        item.addEventListener('click', () => {
            item.classList.add('three__item-box__complete')
        })
    }
})();