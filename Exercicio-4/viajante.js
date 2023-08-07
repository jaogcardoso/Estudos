const turista = prompt("Qual o nome do turista?")
    let cidades = " "
    let contagem = 0

let continuar = prompt ("voce visitou alguma cidade? (Sim/Não)")

while (continuar === "sim") {
    let cidade = prompt ("Qual o nome da cidade vistada?")
    //cidades = cidades + ...
    cidades += " - " + cidade + "\n"
    contagem ++
    continuar = prompt ("voce visitou alguma outra cidade? (sim/não)")
}

alert(
    "Turista " + turista + 
    "\nQuantidade de cidades visitadas é: " + contagem +
    "\nCidades visitadas:\n" + cidades
)