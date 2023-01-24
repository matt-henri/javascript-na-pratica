
const res = document.getElementById('resultado')

function calcIMC() {
    const nome = document.getElementById('nome').value
    const peso = document.getElementById('peso').value
    const altura = document.getElementById('altura').value

    let imc = (peso / (altura * altura))

    
        if (imc < 17.9) {
            document.getElementById('resultado').textContent = 'vc esta abaixo do peso'
        } else if (imc < 24.9) {
            document.getElementById('resultado').textContent = 'vc esta no peso ideal'
        } else if (imc < 29.9) {
            document.getElementById('resultado').textContent = 'vc esta levemente acima do peso'
        } else {
            document.getElementById('resultado').textContent = 'vc esta com obesidade'
        }
    
}