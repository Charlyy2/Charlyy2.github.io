$(document).ready(function () {
    getPublicacionesMuro()
    let publicaciones = getPublicacionesMuro();
    for (let i = 0; i < publicaciones.length; i++) {
        let publicacion = "<div>" + publicaciones[i].nombreUsuario + ":" + publicaciones[i].texto + "<button class='btn btn-sm btn-danger'><i class='fas fa-heart'></i></button></div>";
        $("#publicaciones").append(publicacion);
        $("#publicaciones").append(publicaciones)
    }

    $("#mostrarUsuarios").show();
    $("#perfil").show();
    let loggedUser = getUsuarioLogeado();
    if (loggedUser) {
        let perfil = "<div><div class='card' style='width: 18rem;'><img src='...' class='card-img-top' alt='...'><div class='card-body'><a href='perfil.html'><h1 class='card-title'><i class='fas fa-user-circle'></i>" + loggedUser.nombreUsuario + "</h1></a><p class='card-text'></p><a href='#' class='btn btn-primary' onclick='cerrarSesion()'>Cerrar Sesion</a></div'</div></div>";
        $("#miperfil").append(perfil);
    } else {
        $(location).prop('href', 'Registrarse.html');
    }

    let Usuarios = getUsuarios();
    if (Usuarios) {
        for (let i = 0; i < usuarios.length; i++) {
            let perfiles = "<a href='perfilUsuarios.html?id=" + Usuarios[i].id + "'><li class='list-group-item'><div><h4><i class='fas fa-user-circle'></i> " + Usuarios[i].nombreUsuario + "    </a>       </h4><p>" + Usuarios[i].biografia + "</p></div><div class='d-grid gap-2 d-md-flex justify-content-md-end'><button class='btn btn-sm btn-primary'onclick='seguir(" + Usuarios[i].id + ")'><i class='fas fa-user-plus'></i></button><div class='btn-group' role='group'></li></ul></div></div></li>"
            $("#mostrarUsuarios").append(perfiles);
        }

    }
});

function cerrarSesion() {
    if (confirm("estas seguro que desea cerrar sesion?")) {
        logout();
        $(location).prop('href', 'index.html');
    }
}

function bloquearUsuario(usuarioId) {
    //bloquea al usuario seleccionado
    let usuario = findUserByEmail(usuarioId);
    if (confirm("¿estas seguro que desea bloquear a este usuario?")) {
        return usuario
    }
}

function dejarDeSeguir(usuarioId) {
    //deja de seguir al usuario seleccionado
    let usuario = findUserByEmail(usuarioId);
    if (confirm("¿estas seguro que desea dejar de seguir a este usuario?")) {
        return usuario
    }
}

function publicar() {
    let loggedUser = getUsuarioLogeado();
    let texto = $("#validationTextarea")[0].value;
    let publicacion_ = new publicacion(publicacionId(), texto, new Date(), loggedUser.nombreUsuario, parseInt(loggedUser.id));
    if (texto != "") {
        let publicacion = "<div>" + loggedUser.nombreUsuario + ":" + texto + "<button class='btn btn-sm btn-danger'><i class='fas fa-heart'></i></button></div>";
        $("#publicaciones").append(publicacion);
        guardarPublicacionLocal(publicacion_);
    }
}

function seguir(usuarioId) {
    seguirUsuario(usuarioId)
    let usuario = getUsuarios();
    let user = usuario.find(w => w.id == usuarioId);
    if (user) {
        user.cantidadSeguidores = parseInt(user.cantidadSeguidores) + 1;
        setUsuarios(usuario);
    }
}


//<button id='btnGroupDrop1' type='button'class='btn btn-secondary btn-sm dropdown-toggle' data-bs-toggle='dropdown'aria-expanded='false'><i class='fas fa-ellipsis-h'></i></button><ul class='dropdown-menu' aria-labelledby='btnGroupDrop1'><li><button class='dropdown-item' onclick='bloquearUsuario(" + Usuarios[i].id + ")'>Bloquear usuario</button></li><li><button class='dropdown-item' onclick='dejarDeSeguir(" + Usuarios[i].id + ")'>Dejar de seguir</button>