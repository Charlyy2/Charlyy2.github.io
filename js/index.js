
let usuariosExistentes = [];

let publicacionesExistentes = [];

let mi_perfil = {
    nickname: null,
    email: null,
    fechaDeNacimiento: null,
    sexo: null,
    numero: null,
    seguidos: null,
}

$(document).ready(function () {
    $("#completarDatos").hide();
    $("#mostrarUsuarios").hide();
});


function inicializarBd(){
    inicializar_base_datos();
}





