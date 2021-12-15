$(document).ready(function () {
    $("#editor").hide();
    let usuarioLogeado = getUsuarioLogeado();
    if (usuarioLogeado) {
        let edad = calcularEdad(usuarioLogeado.fechaDeNacimiento);
        if (usuarioLogeado.seguidores !== null) {
            debugger
            if (usuarioLogeado.seguidos.length !== 0) {
                let perfil = "<button onclick='volver()' class='btn btn-danger btn-md'><div class='row align-items-center'><i class='fas fa-arrow-left'></i></button><h1><image src=" + usuarioLogeado.imagen + "  width = '40px'></image>" + usuarioLogeado.nombreUsuario + " <a href='seguidores.html'>Seguidores</a>: " + usuarioLogeado.seguidores.length + " <a href='seguidos.html'>Seguidos:</a> " + usuarioLogeado.seguidos.length + " </h1><p>" + usuarioLogeado.biografia + "...</p> edad: " + edad + "<h2><button onclick='editarUsuario()' class='btn btn-sm btn-outline-secondary'><i class='fas fa-pen'></i> Editar</button></h2></div>"
                $("#miPerfil").append(perfil);

            } else {
                let perfil = "<button onclick='volver()' class='btn btn-danger btn-md'><div class='row align-items-center'><i class='fas fa-arrow-left'></i></button><h1><image src=" + usuarioLogeado.imagen + "  width = '40px'></image>" + usuarioLogeado.nombreUsuario + " <a href='seguidores.html'>Seguidores</a>: " + usuarioLogeado.seguidores.length + " <a href='seguidos.html'>Seguidos:</a> " + 0 + " </h1><p>" + usuarioLogeado.biografia + "...</p> edad: " + edad + "<h2><button onclick='editarUsuario()' class='btn btn-sm btn-outline-secondary'><i class='fas fa-pen'></i> Editar</button></h2></div>"
                $("#miPerfil").append(perfil);
            }
        } else {
            if (usuarioLogeado.seguidos.length == 0) {
                let perfil = "<button onclick='volver()' class='btn btn-danger btn-md'><div class='row align-items-center'><i class='fas fa-arrow-left'></i></button><h1><image src=" + usuarioLogeado.imagen + "  width = '40px'></image>" + usuarioLogeado.nombreUsuario + " <a href='seguidores.html'>Seguidores</a>: " + 0 + " <a href='seguidos.html'>Seguidos:</a> " + 0 + " </h1><p>" + usuarioLogeado.biografia + "...</p> edad: " + edad + "<h2><button onclick='editarUsuario()' class='btn btn-sm btn-outline-secondary'><i class='fas fa-pen'></i> Editar</button></h2></div>"
                $("#miPerfil").append(perfil);
            } else {
                let perfil = "<button onclick='volver()' class='btn btn-danger btn-md'><div class='row align-items-center'><i class='fas fa-arrow-left'></i></button><h1><image src=" + usuarioLogeado.imagen + "  width = '40px'></image>" + usuarioLogeado.nombreUsuario + " <a href='seguidores.html'>Seguidores</a>: " + 0 + " <a href='seguidos.html'>Seguidos:</a> " + usuarioLogeado.seguidos.length + " </h1><p>" + usuarioLogeado.biografia + "...</p> edad: " + edad + "<h2><button onclick='editarUsuario()' class='btn btn-sm btn-outline-secondary'><i class='fas fa-pen'></i> Editar</button></h2></div>"
                $("#miPerfil").append(perfil);
            }
        }
        let usuarios = getUsuarios();
        let publicaciones = getPublicacionesMuro();
        let miUsuario = usuarioLogeado.id;
        let publicacionesMias = publicaciones.filter(w => w.idUsuario == miUsuario);
        for (let i = 0; i < publicacionesMias.length; i++) {
            let publicacion = generarPublicacionHTML(publicacionesMias[i].fecha, usuarioLogeado.nombreUsuario, publicacionesMias[i].texto, publicacionesMias[i].likes, usuarioLogeado.imagen);
            $("#misPulicaciones").append(publicacion);
        }
    }
})

