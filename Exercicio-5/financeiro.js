let saldo = prompt("informe a quantidade inicial de dinheiro:")
saldo = parseFloat(saldo)
let opcao = ""

do {
    opcao = prompt("Saldo disponivel R$: "+ saldo +
    "\n1. Adicionar dinheiro" +
    "\n2. Remover dinheiro" +
    "\n3. Sair")

switch (opcao) {
    case "1":
        saldo += parseFloat(prompt("informe o quanto de dinheiro deseja adicionar"))
        break
    case "2":
        saldo -= parseFloat(prompt("quanto de dinheiro deseja remover?"))
        break
    case "3":
        alert("Saindo")
        break
    default:
        alert("Entrada invalida")
}

} while (opcao !== "3")