var lista = []
var res = document.getElementById('res')
var tab = document.getElementById('seltab')

function inLista(veri, verLista) {
    /*
    for (let num in verLista) {
        if (lista[num] == veri) {
            tem = true
        } else {
            tem = false
        }
    }
    */

    if (verLista.indexOf(veri) != -1){
        return true
    } else
    // As chaves ({}) só são necessárias quando é executado mais de um comando na condição
        return false
}

function analisar() {
    var txtnum = Number(document.querySelector('#txtnum').value)
    res.innerHTML = ''

    if (txtnum > 0 && txtnum < 101 && !inLista(txtnum, lista)) {
        lista.push(txtnum)
        tab.innerHTML += `<option value="${txtnum}">Valor ${txtnum} adicionado</option>`
    } else
        alert('Valor inválido ou já adicionado na lista.')

    document.querySelector('#txtnum').value = ''
    document.querySelector('#txtnum').focus()  // Faz com que a caixa de digitação seja selecionada
}

function finalizar() {
    var res = document.getElementById('res')
    var maior = lista[0]
    var menor = lista[0]
    var soma = 0
    var med = 0

    if (lista.length != 0) {
        res.innerHTML = ''
        for (let num in lista) {
            soma += lista[num]
            if (lista[num] > maior)  
                maior = lista[num]
            if (lista[num] < menor)
                menor = lista[num]  
        }
        med = soma / lista.length

        res.innerHTML += `<p>Ao todo, temos ${lista.length} números cadastrados</p>`
        res.innerHTML += `<p>O maior valor informado foi ${maior}</p>`
        res.innerHTML += `<p>O menor valor informado foi ${menor}</p>`
        res.innerHTML += `<p>Somando todos os vaores, temos ${soma}</p>`
        res.innerHTML += `<p>A média dos valores digitados é ${med}</p>`
    } else
        alert('Adicione valores antes de finalizar.')
}