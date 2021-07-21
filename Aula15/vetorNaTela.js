let valores = [8, 1, 7, 4, 2, 9]

valores.sort()

for(let pos=0; pos < valores.length; pos++){
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}

console.log('--------------------------')

for(let pos in valores){ // operador "in" similares ao utilizado na linguagem Python
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}