

    function calcular() {
        let multiplos3 = 0
    let multiplos5 = 0
    for (i = 0; i < 100; i++){
        multiplos3 += (i % 3 == 0) ? i : 0;
        multiplos5 += (i % 5 == 0) ? i : 0;

    }

        document.getElementById('resultado').textContent = ("Somatórios dos Múltiplos de 3: " + multiplos3 );
        document.getElementById('resultado2').textContent = ("Somatórios dos Múltiplos de 5: " + multiplos5 );
        document.getElementById('resultado3').textContent = ("Somatórios dos Múltiplos de 5 e 3: " + parseInt(multiplos3+multiplos5));
    }

    function limpar() {
        document.getElementById('resultado').textContent = ''
        document.getElementById('resultado2').textContent = ''
        document.getElementById('resultado3').textContent = ''
    }