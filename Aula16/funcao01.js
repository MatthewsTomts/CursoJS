function parimp(n) {  /* O bloco dentro de '{}' é chamado de ação */
    if (n%2==0) {
        return 'Par'
    } else {
        return 'Ímpar'
    }
}

let res = parimp(5)
console.log(res)