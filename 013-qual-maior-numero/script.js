const resultado = document.getElementById('resultado')

function soma() {
    const numUm = document.getElementById('numUm').value
    const numDois = document.getElementById('numDois').value

    var numeroUm = parseInt(numUm)
    var numeroDois = parseInt(numDois)

    if (numUm !== '' && numDois !== '') {
        if (numeroUm > numeroDois) {
            resultado.textContent = 'O número da Primeira Caixa é maior'
        } else {
            resultado.textContent = 'O número da Segunda Caixa é maior'
        }
    } else {
        resultado.textContent = 'Favor preencher todos os campos!'
    }

}