function inicializar_base_datos() {
    //carga los usuarios al localstorage 
    let usuario01 = new usuarios("Eduardo_diaz", "Edu87D@gmail.com", "123123123", "20-11-2001", [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12], "holaa", "Masculino", 1, [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12], []);
    let usuario02 = new usuarios("MaleMiani42", "MianiM@gmail.com", "123123123", "12-02-2002", [1, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12], "...", "Femenino", 2, [1, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12], []);
    let usuario03 = new usuarios("SantiH_", "Hugosgo@gmail.com", "hola", "29-08-2002", [1, 2, 4, 5, 6, 7, 8, 9, 10, 11], "Q hay", "Masculino", 3, [1, 2, 4, 5, 6, 7, 8, 9, 10, 11, 12], []);
    let usuario04 = new usuarios("JuanCRU", "Eskere@gmail.com", "123123123", "28-12-2000", [1, 2, 3, 5, 6, 7, 8, 9, 10, 11, 12], "Juan Cruz Esmere", "Masculino", 4, [1, 2, 3, 5, 6, 7, 8, 9, 10, 11, 12], []);
    let usuario05 = new usuarios("CarlosVillaa", "VC@gmail.com", "123123123", "14-10-2002", [1, 2, 3, 4, 6, 7, 8, 9, 10, 11], "siganme", "Masculino", 5, [1, 2, 3, 4, 6, 7, 8, 9, 10, 11, 12], []);
    let usuario06 = new usuarios("RaulAlonzo91", "RAlonzo0@gmail.com", "123123123", "06-01-1987", [1, 2, 3, 4, 5, 7, 8, 9, 10, 11], "infuriated", "Masculino", 6, [1, 2, 3, 4, 5, 7, 8, 9, 10, 11, 12], []);
    let usuario07 = new usuarios("_MikhaelaM_", "m_morales@gmail.com", "123123123", "01-05-1999", [1, 2, 3, 4, 5, 6, 8, 9, 10, 11, 12], "good vibes only", "Femenino", 7, [1, 2, 3, 4, 5, 6, 8, 9, 10, 11, 12], []);
    let usuario08 = new usuarios("IVAN-12-", "User2306@gmail.com", "123123123", "19-10-1994", [1, 2, 3, 4, 5, 6, 7, 9, 11], "que es esto", "Masculino", 8, [1, 2, 3, 4, 5, 6, 7, 9, 10, 11, 12], []);
    let usuario09 = new usuarios("Estefania6Soria", "SS@gmail.com", "123123123", "12-04-2000", [1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 12], "Hate is gasoline", "Femenino", 9, [1, 2, 3, 4, 5, 6, 7, 8, 10, 11, 12], []);
    let usuario10 = new usuarios("lucasprompt", "1Lukas@gmail.com", "123123123", "17-11-1997", [1, 2, 3, 5, 6, 7, 8, 9, 11], "diseño grafico es mi pasion", "Masculino", 10, [1, 2, 3, 5, 6, 7, 11], []);
    let usuario11 = new usuarios("Ale_RT", "RampieriAlejo@gmail.com", "123123123", "04-09-1994", [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], "Lic. en nutricion", "Masculino", 11, [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12], []);
    let usuario12 = new usuarios("LaraSilvetti", "Lara_Nassif@gmail.com", "123123123", "07-08-2002", [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], "Lara Silvetti 7-8-02", "Femenino", 12, [1, 2, 4, 7, 9], []);

    let arrayVacio = []

    usuariosExistentes.push(usuario01);
    usuariosExistentes.push(usuario02);
    usuariosExistentes.push(usuario03);
    usuariosExistentes.push(usuario04);
    usuariosExistentes.push(usuario05);
    usuariosExistentes.push(usuario06);
    usuariosExistentes.push(usuario07);
    usuariosExistentes.push(usuario08);
    usuariosExistentes.push(usuario09);
    usuariosExistentes.push(usuario10);
    usuariosExistentes.push(usuario11);
    usuariosExistentes.push(usuario12);

    publicacionesExistentes.push(arrayVacio);

    localStorage.setItem("Publicaciones", "[]");

    localStorage.setItem("Usuarios", JSON.stringify(usuariosExistentes));
}

function findUserById(id) {
    //busca al usuario por ID
    let usuario = JSON.parse(localStorage.getItem("Usuarios"));
    let user = usuario.find(w => w.id == id);
    return user;
    // to do quitar contraseña
}

function findUserByEmail(email) {
    //busca al usuario por Email
    let usuarios = getUsuarios()
    let user = usuarios.find(w => w.email == email);
    return user;
    // to do quitar contraseña


}
function registrarUsuario(nombreUsuario, email, contraseña, fechaDeNacimiento, sexoElegido) {
    //busco en la base de datos para comprobar que no exista
    let usuario = JSON.parse(localStorage.getItem("Usuarios"));
    let user = usuario.find(w => w.email == email);
    if (user) {
        return { code: 403 };
    }
    else {
        let arrayGuardado = JSON.parse(localStorage.getItem("Usuarios"));
        let usuario = new usuarios(nombreUsuario, email, contraseña, fechaDeNacimiento, [], "", sexoElegido, parseInt(agregarId()), [], []);
        arrayGuardado.push(usuario);
        localStorage.setItem("Usuarios", JSON.stringify(arrayGuardado));
        localStorage.setItem("loggedUser", JSON.stringify(usuario))
        return { code: 200, loggedUser: usuario };
    }
}

function logout() {
    //elimina el usuario guardado del local storage
    localStorage.removeItem("loggedUser");
}

function getUsuarioLogeado() {
    //obtiene el usuario registrado del Local Storage
    try {
        return JSON.parse(localStorage.getItem("loggedUser"));
    } catch (e) {
        return undefined;
    }
}

function setUsuarioLogeado(usuario) {
    //guarda el usuario que esta registrado en el Local storage
    return localStorage.setItem("loggedUser", JSON.stringify(usuario));
}

function getUsuarios() {
    //obtiene el array de usuarios del Local Storage
    try {
        return JSON.parse(localStorage.getItem("Usuarios"));
    } catch (e) {
        return undefined;
    }
}

function setUsuarios(usuariosExistentes) {
    //guarda el array de usuarios en el Local Storage
    localStorage.setItem("Usuarios", JSON.stringify(usuariosExistentes))
}


function findSeguidosUsuarioLogeado(usuario) {
    let usuarioLogeado = getUsuarioLogeado()
    let usuariosQueSigo = usuarioLogeado.seguidos;
    let idUsuarioAseguir = usuariosQueSigo.findIndex(w => w == usuario.id);
    return idUsuarioAseguir
}

function findSeguidoresUsuarioLogeado(usuario) {
    let usuarioLogeado = getUsuarioLogeado()
    let usuariosSeguidores = usuarioLogeado.seguidores;
    let idSeguidor = usuariosSeguidores.findIndex(w => w == usuario.id);
    return idSeguidor
}

function calcularEdad(fecha) {
    fecha = fecha.split("-")
    let ahora = new Date();
    let fechaDeNacimiento = new Date(fecha[2] + "/" + fecha[1] + "/" + fecha[0]);
    let edad = (parseInt((ahora - fechaDeNacimiento) / (1000 * 60 * 60 * 24 * 365)));
    return edad
}

function seguirUsuario(UsuarioId) {
    // guarda el ID del usuario al que deseas seguir en tu propiedad "seguidos"
    let usuarioLogeado = getUsuarioLogeado();
    let usuarios = getUsuarios();
    let user = usuarios.findIndex(w => w.id == usuarioLogeado.id);
    let usuariosQueSigo = usuarioLogeado.seguidos;
    let idUsuarioAseguir = usuariosQueSigo.findIndex(w => w == UsuarioId);
    let usuarioAseguir = usuarios.find(w => w.id == UsuarioId)
    if (idUsuarioAseguir == -1) {
        usuarios[user].seguidos.push(UsuarioId);
        usuariosQueSigo.push(UsuarioId);
        usuarioAseguir.seguidores.push(usuarios[user].id)
        setUsuarioLogeado(usuarioLogeado);
        setUsuarios(usuarios);
    } else {
        alert("ya sigues a este usuario")
    }

}

function volver() {
    event.preventDefault();
    $(location).prop('href', 'muro.html');
}

function volverAperfil() {
    event.preventDefault();
    $(location).prop('href', 'perfil.html');
}

function buscarPalabras(frase, palabra) {
    let index = frase.search(palabra);
    return index;
}


function filtrarNombre() {
    if (isNaN($("#buscador")[0].value)) {
        $("#tablaUsuarios").html("");
        let nombreIngresado = $("#buscador")[0].value;
        const nuevoArray = usuariosExistentes.filter(usuario => buscarPalabras(usuario.nombreUsuario.toLowerCase(), nombreIngresado.toLowerCase()) != -1);
        for (let i = 0; i < usuariosExistentes.length; i++) {
            insertarDiv();
        }
        return nuevoArray;
    }
}



function agregarId() {

    //genera el ID procedural
    let usuarioId;
    let arrayGuardado = JSON.parse(localStorage.getItem("Usuarios"));
    for (let i = 0; i < arrayGuardado.length; i++) {
        usuarioId = Math.max(arrayGuardado[i].id)
    }
    if (arrayGuardado.length == 0) {
        usuarioId = 1
    }
    else {
        usuarioId = (usuarioId + 1)
    }
    return usuarioId;
}

function cerrarSesion() {
    if (confirm("estas seguro que desea cerrar sesion?")) {
        logout();
        $(location).prop('href', 'index.html');
    }
}

function bloquearUsuario(usuarioId) {
    //bloquea al usuario seleccionado
    let usuarios = getUsuarios();
    let usuario = findUserById(usuarioId);
    let usuarioLogeado = getUsuarioLogeado();
    let indexUsuario = usuarios.findIndex(w => w.id == usuario.id);
    let indexUsuarioLogeado = usuarios.findIndex(w => w.id == usuarioLogeado.id);
    let usuariosBloqueados = usuarioLogeado.bloqueados.findIndex(w => w == usuario.id);
    if (usuariosBloqueados == -1) {
        if (confirm("¿estas seguro que desea bloquear a este usuario?")) {
            usuarios[indexUsuarioLogeado].bloqueados.push(usuario.id);
            usuarioLogeado.bloqueados.push(usuario.id);
            setUsuarios(usuarios);
            setUsuarioLogeado(usuarioLogeado)
        }
    } else {
        alert("este usuario ya esta bloqueado")
    }
}

function dejarDeSeguir(usuarioId) {
    //deja de seguir al usuario seleccionado
    let usuario = findUserById(usuarioId);
    let usuarios = getUsuarios();
    let usuarioLogeado = getUsuarioLogeado();
    let indexUsuario = usuarios.findIndex(w => w.id == usuario.id)
    let indexIdUsuario = usuarioLogeado.seguidos.findIndex(w => w == usuario.id);
    let indexMiUsuario = usuarios.findIndex(w => w.id == usuarioLogeado.id);
    let indexIdMiUsuario = usuario.seguidores.findIndex(w => w == usuarioLogeado.id)
    if (confirm("¿estas seguro que desea dejar de seguir a este usuario?")) {
        usuarioLogeado.seguidos.splice(indexIdUsuario, 1);
        usuarios[indexMiUsuario].seguidos.splice(indexIdUsuario, 1);
        usuarios[indexUsuario].seguidores.splice(indexIdMiUsuario, 1);
        setUsuarios(usuarios);
        setUsuarioLogeado(usuarioLogeado);
    }
}

function editarUsuario() {
    let usuarioLogeado = getUsuarioLogeado();
    $("#contenedor").hide();
    $("#editor").show();
    $("#url")[0].value = usuarioLogeado.imagen
    $("#inputNickname")[0].value = usuarioLogeado.nombreUsuario
    $("#inputBiografia")[0].value = usuarioLogeado.biografia
}

function editar(biografia, nickname, imagen) {
    event.preventDefault();
    let usuarioLogeado = getUsuarioLogeado();
    let usuarios = getUsuarios();
    let indexUsuarioLogeado = usuarios.findIndex(w => w.id == usuarioLogeado.id);
    if (confirm("¿esta seguro que desea guardar los cambios?")) {
        usuarioLogeado.nombreUsuario = nickname;
        usuarioLogeado.biografia = biografia;
        usuarioLogeado.imagen = imagen;
        usuarios[indexUsuarioLogeado].nombreUsuario = nickname;
        usuarios[indexUsuarioLogeado].biografia = biografia;
        usuarios[indexUsuarioLogeado].imagen = imagen;
        setUsuarioLogeado(usuarioLogeado);
        setUsuarios(usuarios);
        $("#editor").hide();
        $("#contenedor").show();
    }
}

function confirmarContraseña(contraseña) {
    event.preventDefault();
    let usuarioLogeado = getUsuarioLogeado();
    if (contraseña !== "") {
        if (hashcode(contraseña) == usuarioLogeado.contraseña) {
            $("#confirmarContraseña").hide();
            $("#cambiarContraseña").show();
            event.preventDefault();
        } else {
            alert("contraseña incorrecta")
        }
    } else {
        alert("ingrese una contraseña")
    }
}

function GuardarContraseña(contraseña, contraseñaReingresada) {
    event.preventDefault();
    let usuarioLogeado = getUsuarioLogeado();
    let usuarios = getUsuarios();
    let indexUsuarioLogeado = usuarios.findIndex(w => w.id == usuarioLogeado.id);
    if (contraseña == contraseñaReingresada) {
        if (contraseña.length >= 6) {
            usuarioLogeado.contraseña = hashcode(contraseña);
            usuarios[indexUsuarioLogeado].contraseña = hashcode(contraseña);
            setUsuarioLogeado(usuarioLogeado);
            setUsuarios(usuarios);
            alert("contraseña guardada con exito!");
            $(location).prop('href', 'muro.html');
        } else {
            alert("su contraseña debe tener mas de 6 caracteres")
        }
    } else {
        alert("las contraseñas no son iguales")
    }
}
