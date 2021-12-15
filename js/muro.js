$(document).ready(function () {
    let usuarios = getUsuarios();
    let usuarioLogeado = getUsuarioLogeado();
    let publicaciones = getPublicacionesMuro();
    let usuariosBloqueados = usuarioLogeado.bloqueados;
    for (let i = 0; i < publicaciones.length; i++) {
        debugger
        let publicacionesBloqueadas = usuariosBloqueados.findIndex(w => w == publicaciones[i].idUsuario);
        if (publicacionesBloqueadas == -1) {
            let idDeUsuariosConPublicaciones = publicaciones[i].idUsuario;
            let usuario = usuarios.find(w => w.id == idDeUsuariosConPublicaciones);
            let publicacionesBloqueadas = usuario.bloqueados.findIndex(w => w == usuarioLogeado.id);
            if (publicacionesBloqueadas == -1) {
                let publicacion = generarPerfilHTML(publicaciones[i].fecha, usuario.nombreUsuario, publicaciones[i].texto, publicaciones[i].likes, usuario.imagen);
                $("#publicaciones").append(publicacion);;
            }
        }
    }

    $("#mostrarUsuarios").show();
    $("#perfil").show();
    let loggedUser = getUsuarioLogeado();
    if (loggedUser) {
        debugger
        let perfil = "<div><div class='card' style='width: 18rem;'><img src='...' class='card-img-top' alt='...'><div class='card-body'><a href='perfil.html'><h1 class='card-title'><image src="+ loggedUser.imagen +"  width = '40px'></image>" + loggedUser.nombreUsuario + "</h1></a><p class='card-text'></p><a href='#' class='btn btn-primary' onclick='cerrarSesion()'>Cerrar Sesion</a></div'</div></div>";
        $("#miperfil").append(perfil);
    } else {
        $(location).prop('href', 'Registrarse.html');
    }


    if (usuarios) {
        for (let i = 0; i < usuarios.length; i++) {
            let sigoAlUsuario = findSeguidosUsuarioLogeado(usuarios[i]);
            if (sigoAlUsuario == -1) {
                //se muestran los usuarios que no sigo
                if (usuarioLogeado.nombreUsuario !== usuarios[i].nombreUsuario) {
                    let perfiles = "<a href='perfilUsuarios.html?id=" + usuarios[i].id + "'><li class='list-group-item'><div><h4><image src="+ usuarios[i].imagen +"  width = '20px'></image>" + usuarios[i].nombreUsuario + "    </a>       </h4><p>" + usuarios[i].biografia + "</p></div><div class='d-grid gap-2 d-md-flex justify-content-md-end'><button class='btn btn-sm btn-primary'onclick='seguirUsuario(" + usuarios[i].id + ")'><i class='fas fa-user-plus'></i></button><button onclick='bloquearUsuario(" + usuarios[i].id + ")' class='btn btn-sm btn-danger'><i class='fas fa-user-slash'></i></button><div class='btn-group' role='group'></li></ul></div></div></li>"
                    $("#mostrarUsuarios").append(perfiles);
                }
            }
        }
    }
});



function publicar() {
    debugger
    let loggedUser = getUsuarioLogeado();
    let texto = $("#inputPublicaciones")[0].value;
    let publicacion_ = new publicacion(publicacionId(), texto, new Date(), loggedUser.nombreUsuario, parseInt(loggedUser.id), [], loggedUser.imagen);
    if (texto != "") {
        let publicacion = generarPerfilHTML(new Date(), loggedUser.nombreUsuario, texto, [], loggedUser.imagen);
        $("#publicaciones").append(publicacion);
        guardarPublicacionLocal(publicacion_);
    }
}



//<button id='btnGroupDrop1' type='button'class='btn btn-secondary btn-sm dropdown-toggle' data-bs-toggle='dropdown'aria-expanded='false'><i class='fas fa-ellipsis-h'></i></button><ul class='dropdown-menu' aria-labelledby='btnGroupDrop1'><li><button class='dropdown-item' onclick='bloquearUsuario(" + Usuarios[i].id + ")'>Bloquear usuario</button></li><li><button class='dropdown-item' onclick='dejarDeSeguir(" + Usuarios[i].id + ")'>Dejar de seguir</button>