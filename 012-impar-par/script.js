const resultado = document.getElementById('resultado')

function ImparPar() {
    const num = document.getElementById('num').value
    var numero = parseInt(num)

    if (num !== '') {
        if ( numero % 2 == 0 ) {
            resultado.textContent = 'Este número é Par'
        } else {
            resultado.textContent = 'Este número é Impar'
        }
    } else {
        resultado.textContent = 'Preencha o campo!'
    }
}