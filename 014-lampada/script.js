const turnOn = document.getElementById('turnOn')
const turnOff = document.getElementById('turnOff')
const lamp = document.getElementById('lamp')


function lampOn() {
    img.src = './img/ligada.jpg'
}


turnOn.addEventListener('clickup', lampOn)