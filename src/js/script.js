card = document.querySelectorAll('.card')

card.addEventListener('click', () => {
    card.front.display = "none"
    card.back.display = "block"
})