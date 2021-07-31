var lista = []
function analisar() {
    var res = document.getElementById('res')
    var txtnum = Number(document.getElementById('txtnum').value)
    var tab = document.getElementById('seltab')
    var tem = false

    res.innerHTML = ''

    for (let num in lista) {
        if (lista[num] == txtnum) {
            tem = true
        }
    }

    if (txtnum > 0 && txtnum < 101 && !tem) {
        lista.push(txtnum)
        tab.innerHTML += `<option value="${txtnum}">Valor ${txtnum} adicionado</option>`
    } else {
        alert('Valor inválido ou já adicionado na lista.')
    }
}

function finalizar() {
    var res = document.getElementById('res')
    var maior = 0
    var menor = 0
    var soma = 0
    var med = 0

    if (lista.length != 0) {
        for (let num in lista) {
            soma += lista[num]
            if (num == 0) {
                maior = lista[num]
                menor = lista[num]
            } else {
                if (lista[num] > maior) {
                    maior = lista[num]
                }
                if (lista[num] < menor) {
                    menor = lista[num]
                }
            }
            med = soma / lista.length
        }

        res.innerHTML += `<p>Ao todo, temos ${lista.length} números cadastrados</p>`
        res.innerHTML += `<p>O maior valor informado foi ${maior}</p>`
        res.innerHTML += `<p>O menor valor informado foi ${menor}</p>`
        res.innerHTML += `<p>Somando todos os valores, temos ${soma}</p>`
        res.innerHTML += `<p>A média dos valores digitados é ${med}</p>`
    } else {
        alert('Adicione valores antes de finalizar.')
    }
}