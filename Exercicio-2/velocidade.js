const Veiculo1 = prompt("qual é o nome do primeiro carro?")
const Velocidade1 = parseFloat(prompt("qual é a velocidade do primeiro carro?"))

const Veiculo2 = prompt("qual é o nome do segundo carro?")
const Velocidade2 = parseFloat(prompt("qual é a velocidade do segundo carro carro?"))

if (Velocidade1 > Velocidade2) {
    alert(Veiculo1 + " é mais rapido do que " + Veiculo2)
} else if (Velocidade2 > Velocidade1) {
    alert(Veiculo2 + " é mais rapido do que " + Veiculo1)
} else {
    alert(Veiculo1 + " e " + Veiculo2 + " Possuem a mesma velocidade")
}
