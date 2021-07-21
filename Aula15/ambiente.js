let num = [5, 8, 2, 9, 3]
num.push(1) // adiciona o número 1 ao final do vetor
num.sort() // método por isso tem '()'
console.log(num)
console.log(`O vetor tem ${num.length} elementos`)  // length é um atributo e por isso não possui '()'
console.log(`O primeiro valor do vetor é ${num[0]}`)
console.log(`O valor 9 está na posição ${num.indexOf(9)}`) // Retorna o index do parâmetro informado

if (num.indexOf(323) == -1) {
    console.log('Valor não encontrado.')
} else {
    console.log(`O valor 323 está na posição ${num.indexOf(323)}`) // Caso ele não encontre o valor ele retorna o valor '-1'
}

for(let cont = 0; cont < num.length; cont++) {
    console.log(num[cont])
}