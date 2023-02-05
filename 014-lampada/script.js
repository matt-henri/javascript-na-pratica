const turnOn = document.getElementById('turnOn')
const turnOff = document.getElementById('turnOff')
const lamp = document.getElementById('lamp')

function isLampBroken() {
    return lamp.src.indexOf ( 'quebrada' ) > -1
}

function lampBroken() {
    if ( !isLampBroken() ) {
            lamp.src = './img/quebrada.jpg'
    }
}

function lampOn() {
    if ( !isLampBroken() ) {
        lamp.src = './img/ligada.jpg'
    }
}

function lampOf() {
    if ( isLampBroken() ) {
            lamp.src = './img/desligada.jpg'
    }
}

turnOn.addEventListener('click', lampOn)
turnOff.addEventListener('click', lampOf)
lamp.addEventListener('mouseover', lampOn)
lamp.addEventListener('mouseleave', lampOf)
lamp.addEventListener('dblclick', lampBroken)
