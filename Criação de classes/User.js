class User {
    constructor(fullname, email, password) {
        this.fullname = fullname
        this.email = email
        this.password = password
    }

    login(email, password) {
        if (this.email === email && this.password === password) {
            console.log("Login realizado com sucesso")
        } else {
            console.log("Falha ao fazer login! E-mail ou senha invalida")
        }
    }
}

const john = new User("John Doe", "john@gmail.com", "1234")

john.login("john@gmail.com", "1234")