const atacante = prompt("Qual é o nome do personagem atacante?")
const poderDeAtaque = parseFloat(prompt("qual é o seu valor de ataque"))

const defensor = prompt("Qual é o nome do personagem defensor?")
let pontosDeVida = parseFloat(prompt("quantos pontos de vida ele possui?"))
const poderDeDefesa = parseFloat(prompt("qual é o valor de defesa?"))
const possuiEscudo = prompt("ele possui um escudo? (sim/não")

let danoCausado = 0

if (poderDeAtaque > poderDeDefesa && possuiEscudo === "nao"){
    danoCausado = poderDeAtaque - poderDeDefesa
} else if (poderDeAtaque > poderDeDefesa && possuiEscudo === "sim"){
    danoCausado = (poderDeAtaque - poderDeDefesa) / 2
}

pontosDeVida -= danoCausado

alert(atacante + " causou " + danoCausado + " pontos de dano em " + defensor)
alert(
  atacante + "\nPoder de ataque: " + poderDeAtaque + "\n\n" +
  defensor + "\nPontos de vida: " + pontosDeVida +
  "\nPoder de defesa: " + poderDeDefesa + "\nPossui escudo: " + possuiEscudo
)