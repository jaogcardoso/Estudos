const entrada1 = prompt("informe o primeiro numero") 
const entrada2 = prompt("informe o segundo numero")

const x = parseFloat(entrada1)
const y = parseFloat(entrada2)

const soma = x + y
const subtracao = x - y
const multiplcacao = x * y
const divisao = x / y

alert(
    "Resultados:\n" +
    "\nSoma: " + soma +
    "\nSubtracao: " + subtracao +
    "\nMultiplicacao: " + multiplcacao +
    "\nDivisao: " + divisao
)