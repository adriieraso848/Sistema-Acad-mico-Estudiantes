let usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];

function registrarUsuario() {

    let nombre = document.getElementById("nombre").value;
    let apellido = document.getElementById("apellido").value;
    let codigo = document.getElementById("codigo").value;
    let correo = document.getElementById("correo").value;
    let contraseña = document.getElementById("contraseña").value;
    let rol = document.getElementById("rol").value;

    let usuario = {
        nombre: nombre,
        apellido: apellido,
        codigo: codigo,
        correo: correo,
        contraseña: contraseña,
        rol: rol
    };

    usuarios.push(usuario);

    localStorage.setItem("usuarios", JSON.stringify(usuarios));

    alert("Usuario registrado correctamente");
}