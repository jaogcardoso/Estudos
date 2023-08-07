let opcao = ""

do {
    opcao = prompt("Seja bem vindo" + 
    "\nEscolha uma das opções abaixo" +
    "\n1. opção um" +
    "\n2. opção dois" +
    "\n3. opção tres" +
    "\n4. opção quatro" +
    "\n5. encerrar"
    )

    switch (opcao) {
        case "1":
            alert("voce escolheu a opção 1")
            break
        case "2":
            alert("voce escolheu a opção 2")
            break
        case "3":
            alert("voce escolheu a opção 3")
            break
        case "4":
            alert("voce escolheu a opção 4")
            break
        case "5":
            alert("Finalizando")
            break
        default:
            alert("opção invalida")
    }

} while (opcao !== "5")