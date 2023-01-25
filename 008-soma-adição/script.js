const resultado = document.getElementById('resultado')

    function soma() {
        let num1 = document.getElementById('num1').value
        let num2 = document.getElementById('num2').value

        if (num1 !== '' && num2 !== '') {
            num1 = parseInt(num1)
            num2 = parseInt(num2)

            resultado.textContent = 'O resultado da soma é: ' + (num1 + num2)
        } else {
            resultado.textContent = 'Preencha todos os campos'
        }
    }

