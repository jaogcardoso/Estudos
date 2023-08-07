const numero = prompt ("Qual numero voce deseja multiplicar?")

let resultado = ""

for (let fator = 1; fator <= 20; fator++){
    resultado += " -> " + numero + " * " + fator + " = " + (numero * fator) + "\n"
}

alert("Resultado da tabuada de " + numero + ":\n\n" + resultado)