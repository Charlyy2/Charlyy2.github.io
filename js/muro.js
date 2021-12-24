$(document).ready(function () {
    let usuarios = getUsuarios();
    let usuarioLogeado = getUsuarioLogeado();
    let publicaciones = getPublicacionesMuro();
    let usuariosBloqueados = usuarioLogeado.bloqueados;
    for (let i = 0; i < publicaciones.length; i++) {
        let publicacionesBloqueadas = usuariosBloqueados.findIndex(w => w == publicaciones[i].idUsuario);
        if (publicacionesBloqueadas == -1) {
            let idDeUsuariosConPublicaciones = publicaciones[i].idUsuario;
            let usuario = usuarios.find(w => w.id == idDeUsuariosConPublicaciones);
            let publicacionesBloqueadas = usuario.bloqueados.findIndex(w => w == usuarioLogeado.id);
            if (publicacionesBloqueadas == -1) {
                let publicacion = generarPublicacionHTML(publicaciones[i].fecha, usuario.nombreUsuario, publicaciones[i].texto, publicaciones[i].likes, usuario.imagen, publicaciones[i].id);
                $("#publicaciones").append(publicacion);;
            }
        }
    }

    $("#mostrarUsuarios").show();
    $("#perfil").show();
    let loggedUser = getUsuarioLogeado();
    if (loggedUser) {
        let perfil = "<div><div class='card'  alt='...'><div class='card-body'><a href='perfil.html'><h1 class='card-title'><image src=" + loggedUser.imagen + "  style='width:50px; height:50px' class='rounded-circle mt-3 mb-3 img-fluid'></image>" + loggedUser.nombreUsuario + "</h1></a><p class='card-text'></p><a href='#' class='btn btn-primary' onclick='cerrarSesion()'>Cerrar Sesion</a></div'</div></div>";
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
                    let perfiles = "<a href='perfilUsuarios.html?id=" + usuarios[i].id + "'><li class='list-group-item'><div><h4><image src=" + usuarios[i].imagen + " style='width:30px; height:30px' class='rounded-circle mt-3 mb-3 img-fluid' ></image>" + " " + usuarios[i].nombreUsuario + "    </a>       </h4><p>" + usuarios[i].biografia + "</p></div><div class='d-grid gap-2 d-md-flex justify-content-md-end'><button class='btn btn-sm btn-primary'onclick='seguirUsuario(" + usuarios[i].id + ")'><i class='fas fa-user-plus'></i></button><button onclick='bloquearUsuario(" + usuarios[i].id + ")' class='btn btn-sm btn-danger'><i class='fas fa-user-slash'></i></button><div class='btn-group' role='group'></li></ul></div></div></li>"
                    $("#mostrarUsuarios").append(perfiles);
                }
            }
        }
    }

    mostrarHora();
});


function mostrarHora() {
    
    $.ajax('http://worldtimeapi.org/api/ip').done(function (res) {
        let date = new Date(res.datetime)
        let hora = "<h6>"+ date + "</h6>"
$("#hora").append(hora)
    });
}

function publicar() {
    let loggedUser = getUsuarioLogeado();
    let texto = $("#inputPublicaciones")[0].value;
    let publicacion_ = new publicacion(publicacionId(), texto, new Date(), loggedUser.nombreUsuario, parseInt(loggedUser.id), [], loggedUser.imagen);
    if (texto != "") {
        let publicacion = generarPublicacionHTML(new Date(), loggedUser.nombreUsuario, texto, [], loggedUser.imagen);
        $("#publicaciones").append(publicacion);
        guardarPublicacionLocal(publicacion_);
    }
}



//<button id='btnGroupDrop1' type='button'class='btn btn-secondary btn-sm dropdown-toggle' data-bs-toggle='dropdown'aria-expanded='false'><i class='fas fa-ellipsis-h'></i></button><ul class='dropdown-menu' aria-labelledby='btnGroupDrop1'><li><button class='dropdown-item' onclick='bloquearUsuario(" + Usuarios[i].id + ")'>Bloquear usuario</button></li><li><button class='dropdown-item' onclick='dejarDeSeguir(" + Usuarios[i].id + ")'>Dejar de seguir</button>