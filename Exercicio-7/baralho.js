const baralho = []
let opcao = ""

do{
    opcao = prompt("Quantidade de cartas no baralho " + baralho.length + 
    "\n1. Adicionar uma carta\n2. Puxar uma carta\n3. Sair"    
    )

    switch (opcao) {
      case "1":
        const novaCarta = prompt("Qual é a carta?")
        baralho.push(novaCarta)
        break
      case "2":
        const cartaPuxada = baralho.pop ()
        if(!cartaPuxada) {
            alert("Não ha nenhuma carta no baralho")
        } else {
            alert("Voce puxou um " + cartaPuxada)
        }
      case "3":
        alert("Saindo...")
        break
      default:
        alert("Opção invalida")
    }

} while (opcao !== "3")