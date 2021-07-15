function carregar() {
    var msg = document.getElementById('msg')
    var img = document.querySelector('#img')
    var hora = new Date().getHours()
    msg.innerHTML = `Agora são ${hora} horas`
    if (hora > 5 && hora < 12) {
        img.src = 'imagens/morning.png'
        img.alt = 'foto da manhã'
        document.body.style.background = 'lightskyblue'
    } else if (hora >= 12 && hora < 18) {
        img.src = 'imagens/afternoon.png'
        img.alt = 'foto da tarde'
        document.body.style.background = 'rgb(245, 193, 98)'
    } else {
        img.src = 'imagens/evening.png'
        img.alt = 'foto da noite'
        document.body.style.background = 'darkslateblue'
    }
}

