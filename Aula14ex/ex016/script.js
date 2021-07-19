function contar() {
    var ini = Number(document.getElementById('initext').value)
    var fim = Number(document.getElementById('fimtext').value)
    var pas = Number(document.getElementById('pastext').value)
    var msg = document.getElementById('res')
    msg.innerHTML = ''

    if (pas == 0) {
        alert('Não é possível utilizar o passo 0 (zero), o valor 1 (um) será usada no lugar.')
        pas = 1
    }

    if (ini === '' || fim === '' || pas === '') {
        msg.innerHTML += `Impossível contar!`
    } else {
        msg.innerHTML += '<p>Contando:</p>'
        if (fim < ini) {
            for (ini; ini >= fim; ini -= pas) {
                msg.innerHTML += `${ini} &#x1F449 `  //Emoji de mão apontando, HTML &#xCódigo do emoji
            }
        } else {
            for (ini; ini <= fim; ini += pas) {
                msg.innerHTML += `${ini} \u{1F449} ` //Emoji de mão apontando, JavaScript \u{Código do emoji}
            }
        }
        msg.innerHTML += '\u{1F3C1}'
    }
}