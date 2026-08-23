const inicioSesion = () => {

    let email = document.getElementById("email");
    let password = document.getElementById("password");

    let Email = email.value;
    let Password = password.value;

    let usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];

    let usuario = usuarios.find(usuario => usuario.correo == Email);

    if (usuario) {

        alert("Email escrito correctamente");

        if (Password == usuario.contraseña) {

            alert("Contraseña correcta");

            localStorage.setItem("usuarioActivo", JSON.stringify(usuario));

            console.log("Logeado correctamente");
            console.log("Rol:", usuario.rol);

            window.location.href = "../panel/panel.html";

        } 
        else {

            alert("Contraseña incorrecta");

        }

    } 
    else {

        alert("Email incorrecto");

    }
}