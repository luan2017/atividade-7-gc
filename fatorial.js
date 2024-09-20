function calcularFatorial(n) {
  if (n < 0) return "Fatorial não existe para números negativos";
  if (n === 0 || n === 1) return 1;
  let fatorial = 1;
  for (let i = 2; i <= n; i++) {
    fatorial *= i;
  }
  return fatorial;
}

document.getElementById("calcular").addEventListener("click", () => {
  const numero = parseInt(document.getElementById("numero").value);
  const resultado = calcularFatorial(numero);
  document.getElementById(
    "resultado"
  ).innerText = `O fatorial de ${numero} é: ${resultado}`;
});
