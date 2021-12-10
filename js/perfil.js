$(document).ready(function () {
    let usuarioLogeado = getUsuarioLogeado();
    if (usuarioLogeado) {
        let edad = calcularEdad(usuarioLogeado.fechaDeNacimiento)
        let perfil = "<button onclick='volver('muro.html')' class='btn btn-danger btn-md'><div class='row align-items-center'><i class='fas fa-arrow-left'></i></button><h1><i class='fas fa-user-circle'></i>" + usuarioLogeado.nombreUsuario + " <a href='seguidores.html'>Seguidores</a>: " + usuarioLogeado.seguidores.length + " <a href='seguidos.html'>Seguidos:</a> "+ usuarioLogeado.seguidos.length +" </h1><p>" + usuarioLogeado.biografia + "...</p> edad: " + edad + "<h2><button class='btn btn-sm btn-outline-secondary'><i class='fas fa-pen'></i> Editar usuario</button></h2></div>"
        $("#perfilUsuario").append(perfil);
    }
})

