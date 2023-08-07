const imoveis = []
let opcao = ""

do {
    opcao = prompt(
        "Bem vindo ao cadastro de imoveis\n" +
        "Total de imoveis " + imoveis.length +
        "\n\nEscolha uma opção:\n1. Novo imovel\n2. Lista de imoveis\n3. Sair"
    )
    
    switch (opcao){
        case "1":
            const imovel = {}

            imovel.proprietario = prompt("informe o nome do proprietario")
            imovel.quartos = prompt("quantos quartos possui o imovel?")
            imovel.banheiros = prompt("quantos banheiros possui o imovel?")
            imovel.garagem = prompt("O imovel possui garagem? (Sim/Não)")

            const confirmacao = confirm(
               "Deseja salvar o imovel com as seguintes informações?\n" +
               "\nQuantidade de quartos: " + imovel.quartos +
               "\nQuantidade de banheiros: " + imovel.banheiros +
               "\nPossui garagem: " + imovel.garagem
            )
            if(confirmacao){
                imoveis.push(imovel)
                alert ("Imovel salvo com sucesso")
            } else {
                alert("Voltando ao menu.")
            }

            break

        case "2":
          for (let i = 0; i < imoveis.length; i++) {
            alert(
                "Imovel " + (i + 1) +
                "\nProprietario: " + imoveis[i].proprietario +
                "\nQuantidade de Quartos: " + imoveis[i].quartos +
                "\nQuantidade de banheiros: " + imoveis[i].banheiros +
                "\nPossui garagem? " + imoveis[i].garagem
            )
          }
          break
        case "3":
            alert("Encerrando....")
            break
        default:
            alert("Opção invalida")
    }

} while (opcao !== "3")