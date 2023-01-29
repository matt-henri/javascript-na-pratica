const mais = document.getElementById('mais')
const menos = document.getElementById('menos')
const p = document.getElementById('contador')

let contador = 0

p.textContent = contador

mais.addEventListener('click', function () {
    p.textContent = ++contador
})

menos.addEventListener('click', function () {
    p.textContent = --contador
})