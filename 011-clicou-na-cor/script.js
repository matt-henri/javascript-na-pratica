const azul = document.getElementById('azul')
const verde = document.getElementById('verde')
const amarelo = document.getElementById('amarelo')
const vermelho = document.getElementById('vermelho')
const resultado = document.getElementById('resultado')


azul.addEventListener('click', function() {
    resultado.textContent = 'Você clicou no Azul'
})

verde.addEventListener('click', function() {
    resultado.textContent = 'Você clicou no Verde'
})

amarelo.addEventListener('click', function() {
    resultado.textContent = 'Você clicou no Amarelo'
})

vermelho.addEventListener('click', function() {
    resultado.textContent = 'Você clicou no Vermelho'
})