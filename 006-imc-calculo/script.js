
const res = document.getElementById('resultado')

function calcIMC() {
    const nome = document.getElementById('nome').value
    const peso = document.getElementById('peso').value
    const altura = document.getElementById('altura').value

    let imc = (peso / (altura * altura)).toFixed(1)

    if (nome !== '' && peso !== '' && altura !== '') {
        if (imc < 17.9) {
            document.getElementById('resultado').textContent = `${nome} seu IMC é ${imc}, você está abaixo do peso`
        } else if (imc < 24.9) {
            document.getElementById('resultado').textContent = `${nome} seu IMC é ${imc}, e você está no peso ideal`
        } else if (imc < 29.9) {
            document.getElementById('resultado').textContent = `${nome} seu IMC é ${imc}, você está levemente acima do peso`
        } else {
            document.getElementById('resultado').textContent = `${nome} seu IMC é ${imc}, você está com obesidade`
        } } else {
            document.getElementById('resultado').textContent = 'Preencha todos os campos'
        }
    
}