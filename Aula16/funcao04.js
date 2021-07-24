function fatorial(f) {
    let fat = 1
    for (f; f >= 1; f--) {
        fat *= f
    }
    return fat
}

console.log(fatorial(5))