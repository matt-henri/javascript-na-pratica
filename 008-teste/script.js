

function soma() {
    let num1 = document.getElementById('num1').value
    let num2 = document.getElementById('num2').value

    num1 = parseInt(num1)
    num2 = parseInt(num2)

    document.getElementById('resultado').textContent = 'O resultado da soma é: ' + (num1 + num2)
}

