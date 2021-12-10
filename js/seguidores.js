$(document).ready(function () {
debugger
let usuarioLogeado = getUsuarioLogeado();
let usuarios = getUsuarios();
let seguidoresDeUsuarioLogeado  = usuarioLogeado.seguidores;

let seguidores = usuarios.findIndex(w => w.id = seguidoresDeUsuarioLogeado)

for(let i = 0; i < seguidores.length; i++){
let divSeguidores = "<div><a href='perfilUsuarios.html?id=" + seguidores[i].id + "'><li class='list-group-item'><div><h4><i class='fas fa-user-circle'></i> " + seguidores[i].nombreUsuario + "    </a>       </h4><p>" + seguidores[i].biografia + "</p></div><div class='d-grid gap-2 d-md-flex justify-content-md-end'><button class='btn btn-sm btn-primary'onclick='seguirUsuario(" + usuarios[i].id + ")'><i class='fas fa-user-plus'></i></button><div class='btn-group' role='group'></li></ul></div></div></li></div>"
}

$("#seguidores").append(divSeguidores);



});