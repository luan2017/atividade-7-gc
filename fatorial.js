function calcularFatorial(n) {
    if (n < 0) return 'Fatorial não existe para números negativos';
    if (n === 0 || n === 1) return 1;
    let fatorial = 1;
    for (let i = 2; i <= n; i++) {
        fatorial *= i;
    }
    return fatorial;
}

const numero = 5;
console.log(O fatorial de ${numero} é: ${calcularFatorial(numero)});