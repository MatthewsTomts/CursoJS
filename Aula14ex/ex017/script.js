function calcular() {
    var mult = document.getElementById('multtext').value
    var list = document.getElementById('seltab')
    list.innerHTML = ''

    if (mult === '') {
        alert('Preencha a caixa de texto.')
    } else {
        for (var ini = 0; ini <= 10; ini++) {
            /*
            let item = document.createElement('option')
            item.innerHTML = `${mult} x ${ini} = ${Number(mult)*ini}`
            item.value = `tab${ini}`
            list.appendChild(item)
            */
            list.innerHTML += `<option value="tab${ini}">${mult} x ${ini} = ${Number(mult)*ini}</option>`
        }
    }
}