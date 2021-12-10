$(document).ready(function () {
    let usuarioLogeado = getUsuarioLogeado();
    if (usuarioLogeado) {
        let edad = calcularEdad(usuarioLogeado.fechaDeNacimiento)
        let perfil = "<button onclick='volver()' class='btn btn-danger btn-md'><div class='row align-items-center'><i class='fas fa-arrow-left'></i></button><h1><i class='fas fa-user-circle'></i>" + usuarioLogeado.nombreUsuario + " <a href='#'>Seguidores</a>: " + usuarioLogeado.cantidadSeguidores + " </h1><p>" + usuarioLogeado.biografia + "...</p> edad: " + edad + "<h2><button class='btn btn-sm btn-outline-secondary'><i class='fas fa-pen'></i> Editar usuario</button></h2></div>"
        $("#perfilUsuario").append(perfil);
    }
})

function volver() {
    event.preventDefault();
    $(location).prop('href', 'muro.html');
}