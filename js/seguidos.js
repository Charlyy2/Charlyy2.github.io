$(document).ready(function () {
    debugger
    let usuarioLogeado = getUsuarioLogeado();
    let usuarios = getUsuarios();
    let idUsuariosSeguidos = usuarioLogeado.seguidos; // [4, 6 , 2 , 7]

    if (usuarios) {
        for (let i = 0; i < usuarios.length; i++) {
            let sigoAlUsuario = findIdUsuarioLogeado(usuarios[i]);
            if (sigoAlUsuario !== -1) {
                //se muestran los usuarios que sigo
                let divSeguidores = "<div><a href='perfilUsuarios.html?id=" + usuarios[i].id + "'><li class='list-group-item'><div><h4><i class='fas fa-user-circle'></i> " + usuarios[i].nombreUsuario + "    </a>       </h4><p>" + usuarios[i].biografia + "</p></div><div class='d-grid gap-2 d-md-flex justify-content-md-end'><button class='btn btn-sm btn-primary'onclick='dejarDeSeguir(" + usuarios[i].id + ")'><i class='fas fa-user-check'></i></button><div class='btn-group' role='group'></li></ul></div></div></li></div>"

                $("#seguidos").append(divSeguidores);
            }
        }
    }
})