const inicioSesion = () => {

    let email = document.getElementById("email")
    let password = document.getElementById("password")

    let Email = email.value
    let Password = password.value

    let usuario = JSON.parse(localStorage.getItem("usuario"))

    console.log(usuario)

    if (Email == usuario.correo) {

        alert("Email escrito correctamente")

        if (Password == usuario.password) {

            alert("Contraseña correcta")
            console.log("Logeado correctamente")

        }
        else {

            alert("Contraseña incorrecta")

        }

    }
    else {

        alert("Email incorrecto")

    }
}