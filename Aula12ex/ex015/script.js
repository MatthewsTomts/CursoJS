function verificar() {
    var data = new Date().getFullYear()
    var anoNasc = document.getElementById('txtano').value
    var res = document.querySelector('div#res')

    if (anoNasc > data || anoNasc.length == 0) {
        alert('Informe um ano válido')
    } else {
        var idade = data - anoNasc
        var radsexo = document.getElementsByName('radsex')
        var img = document.createElement('img')
        img.setAttribute('id', 'img')
        img.setAttribute('src', '')
        img.setAttribute('alt', 'Foto de uma pessoa.')
        
        if (radsexo[0].checked) {
            sexo = 'Homem'
            if (idade <= 10) {
                img.src = 'imagens/boy.png'
            } else if (idade <= 21) {
                img.src = 'imagens/young_man.png'
            } else if (idade <= 50) {
                img.src = 'imagens/man.png'
            } else {
                img.src = 'imagens/old_man.png'
            }

        } else {
            sexo = 'Mulher'
            if (idade <= 10) {
                img.src = 'imagens/girl.png'
            } else if (idade <= 21) {
                img.src = 'imagens/young_woman.png'
            } else if (idade <= 50) {
                img.src = 'imagens/woman.png'
            } else {
                img.src = 'imagens/old_woman.png'
            }

        }
        // res.style.textAlign = 'center'
        res.innerHTML = `<p>Detectamos ${sexo} com ${idade}</p>`
        res.appendChild(img)
    }
}