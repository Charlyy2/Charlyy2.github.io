$(document).ready(function () {
    let usuarioLogeado = getUsuarioLogeado();
    let usuarios = getUsuarios();
    let seguidoresDeUsuarioLogeado = usuarioLogeado.seguidores;

    //let seguidores = usuarios.findIndex(w => w.id = seguidoresDeUsuarioLogeado)
if(seguidoresDeUsuarioLogeado.length !== 0){
    for (let i = 0; i < usuarios.length; i++) {
        let seguidores = findSeguidoresUsuarioLogeado(usuarios[i]);
        let seguidos = findSeguidosUsuarioLogeado(usuarios[i])
        if (seguidores !== -1) {
            if (seguidos == -1) {
                let divSeguidores = "<div><a href='perfilUsuarios.html?id=" + usuarios[i].id + "'><li class='list-group-item'><div><h4><image src="+ usuarios[i].imagen +"   style='width:50px; height:50px' class='rounded-circle mt-3 mb-3 img-fluid'></image>"+ " "  + usuarios[i].nombreUsuario + "    </a>       </h4><p>" + usuarios[i].biografia + "</p></div><div class='d-grid gap-2 d-md-flex justify-content-md-end'><button class='btn btn-sm btn-primary'onclick='seguirUsuario(" + usuarios[i].id + ")'><i class='fas fa-user-plus'></i></button><button onclick='bloquearUsuario(" + usuarios[i].id + ")' class='btn btn-sm btn-danger'><i class='fas fa-user-slash'></i></button><div class='btn-group' role='group'></li></ul></div></div></li></div>"
                $("#seguidores").append(divSeguidores);
            } else {
                let divSeguidores = "<div><a href='perfilUsuarios.html?id=" + usuarios[i].id + "'><li class='list-group-item'><div><h4><image src="+ usuarios[i].imagen +"   style='width:50px; height:50px' class='rounded-circle mt-3 mb-3 img-fluid'></image>"+ " "  + usuarios[i].nombreUsuario + "    </a>       </h4><p>" + usuarios[i].biografia + "</p></div><div class='d-grid gap-2 d-md-flex justify-content-md-end'><button class='btn btn-sm btn-primary'onclick='dejarDeSeguir(" + usuarios[i].id + ")'><i class='fas fa-user-check'></i></button><button onclick='bloquearUsuario(" + usuarios[i].id + ")' class='btn btn-sm btn-danger'><i class='fas fa-user-slash'></i></button><div class='btn-group' role='group'></li></ul></div></div></li></div>"

                $("#seguidores").append(divSeguidores);
            }
        }
    }
}else{
    alert("ningun usuario te sigue por ahora");
    $(location).prop('href', 'perfil.html')   
}




});