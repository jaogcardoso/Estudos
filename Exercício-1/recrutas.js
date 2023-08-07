const PrimeiroNome = prompt("Informe o nome do recruta")
const Sobrenome = prompt("Informe o sobrenome do recruta")
const CampoDeEstudo = prompt("Qual é o campo de estudo do recruta?")
const AnoDeNascimento = prompt("Qual é a data de nascimento do recruta?")

alert(
    "Recruta cadastrado com Sucesso!" + 
    "Nome Completo: " + PrimeiroNome + " " + Sobrenome +
    "Campo de estudo: " + CampoDeEstudo + 
    "Idade: " + (2023 - AnoDeNascimento)
)