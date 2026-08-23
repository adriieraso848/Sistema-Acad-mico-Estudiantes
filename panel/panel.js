let usuario = JSON.parse(localStorage.getItem("usuarioActivo"));

let bienvenido = document.getElementById("bienvenido");
let contenido = document.getElementById("contenido");

bienvenido.textContent = "Bienvenido " + usuario.nombre;

if (usuario.rol == "administrador") {

    contenido.innerHTML =
        "<h2>Administrador</h2>" +
        "<p>Gestión de estudiantes</p>" +
        "<p>Gestión de docentes</p>" +
        "<p>Reportes académicos</p>";

} else if (usuario.rol == "docente") {

    contenido.innerHTML =
        "<h2>Docente</h2>" +
        "<p>Cursos asignados</p>" +
        "<p>Registro de notas</p>" +
        "<p>Lista de estudiantes</p>";

} else if (usuario.rol == "estudiante") {

    contenido.innerHTML =
        "<h2>Estudiante</h2>" +
        "<p>Cursos matriculados</p>" +
        "<p>Notas</p>" +
        "<p>Información personal</p>";

} else {

    contenido.innerHTML =
        "<h2>Rol no reconocido</h2>" +
        "<p>No se encontró un rol válido</p>";
}