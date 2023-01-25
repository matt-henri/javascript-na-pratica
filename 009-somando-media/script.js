const resultado = document.getElementById('resultado')

function soma() {

    let primeiro = document.getElementById('primeiro').value
    let segundo  = document.getElementById('segundo').value
    let terceiro = document.getElementById('terceiro').value
    let quarto   = document.getElementById('quarto').value

    if ( primeiro !== '' && segundo !== '' && terceiro !== '' && quarto !== '') {

        primeiro = parseInt(primeiro)
        segundo = parseInt(segundo)
        terceiro = parseInt(terceiro)
        quarto = parseInt(quarto)

        let media = (primeiro + segundo + terceiro + quarto) / 4

        resultado.textContent = 'Sua nota média anual foi de ' + (media)
    } else {
        resultado.textContent = 'preencha todos os campos'
    }

}