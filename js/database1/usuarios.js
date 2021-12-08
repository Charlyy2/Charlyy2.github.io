function inicializar_base_datos() {
    //carga los usuarios al localstorage 
    let usuario01 = new usuarios("Eduardo_diaz", "Edu87D@gmail.com", "123123123", "20-11-2001", "572", "holaa", "Masculino", "1");
    let usuario02 = new usuarios("MaleMiani42", "MianiM@gmail.com", "123123123", "12-02-2002", "823", "...", "Femenino", "2");
    let usuario03 = new usuarios("SantiH_", "Hugosgo@gmail.com", "123123123", "29-08-2002", "250", "Q hay", "Masculino", "3");
    let usuario04 = new usuarios("JuanCRU", "Eskere@gmail.com", "123123123", "28-12-2000", "1203", "Juan Cruz Esmere", "Masculino", "4");
    let usuario05 = new usuarios("CarlosVillaa", "VC@gmail.com", "123123123", "14-10-2002", "951", "siganme", "Masculino", "5");
    let usuario06 = new usuarios("RaulAlonzo91", "RAlonzo0@gmail.com", "123123123", "06-01-1987", "145", "infuriated", "Masculino", "6");
    let usuario07 = new usuarios("_MikhaelaM_", "m_morales@gmail.com", "123123123", "01-05-1999", "1232", "good vibes only", "Femenino", "7");
    let usuario08 = new usuarios("IVAN-12-", "User2306@gmail.com", "123123123", "19-10-1994", "57", "que es esto", "Masculino", "8");
    let usuario09 = new usuarios("Estefania6Soria", "SS@gmail.com", "123123123", "12-04-2000", "624", "Hate is gasoline", "Femenino", "9");
    let usuario10 = new usuarios("lucasprompt", "1Lukas@gmail.com", "123123123", "17-11-1997", "432", "diseño grafico es mi pasion", "Masculino", "10");
    let usuario11 = new usuarios("Ale_RT", "RampieriAlejo@gmail.com", "123123123", "04-09-1994", "670", "Lic. en nutricion", "Masculino", "11");
    let usuario12 = new usuarios("LaraSilvetti", "Lara_Nassif@gmail.com", "123123123", "07-08-2002", "2100", "Lara Silvetti 7-8-02", "Femenino", "12");

    let arrayVacio = [];

    usuariosExistentes.push(usuario01.toLowerCase());
    usuariosExistentes.push(usuario02.toLowerCase());
    usuariosExistentes.push(usuario03.toLowerCase());
    usuariosExistentes.push(usuario04.toLowerCase());
    usuariosExistentes.push(usuario05.toLowerCase());
    usuariosExistentes.push(usuario06.toLowerCase());
    usuariosExistentes.push(usuario07.toLowerCase());
    usuariosExistentes.push(usuario08.toLowerCase());
    usuariosExistentes.push(usuario09.toLowerCase());
    usuariosExistentes.push(usuario10.toLowerCase());
    usuariosExistentes.push(usuario11.toLowerCase());
    usuariosExistentes.push(usuario12.toLowerCase());

    publicacionesExistentes.push(arrayVacio);

    localStorage.setItem("Publicaciones", "[]");

    localStorage.setItem("Usuarios", JSON.stringify(usuariosExistentes));
}

function findUserById(id) {
    let usuario = JSON.parse(localStorage.getItem("Usuarios"));
    let user = usuario.find(w => w.id == id);
    return user;
    // to do quitar contraseña
}

function findUserByEmail(email) {
    let usuario = JSON.parse(localStorage.getItem("Usuarios"));
    let user = usuario.find(w => w.email == email);
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
        let usuario = new usuarios(nombreUsuario, email, contraseña, fechaDeNacimiento, "0", "", sexoElegido, agregarId());
        arrayGuardado.push(usuario);
        localStorage.setItem("Usuarios", JSON.stringify(arrayGuardado));
        localStorage.setItem("loggedUser", JSON.stringify(usuario))
        return { code: 200, loggedUser: usuario };
    }
}

function logout() {
    localStorage.removeItem("loggedUser");
}

function getUsuarioLogeado() {
    try {
        return JSON.parse(localStorage.getItem("loggedUser"));
    } catch (e) {
        return undefined;
    }
}

function setUsuarioLogeado(usuario) {
    return localStorage.setItem("loggedUser", JSON.stringify(usuario));
}

function getUsuarios() {
    try {
        return JSON.parse(localStorage.getItem("Usuarios"));
    } catch (e) {
        return undefined;
    }
}

function seguirUsuario(usuarioId) {
    debugger
    let usuario = JSON.parse(localStorage.getItem("Usuarios"));
    let user = usuario.find(w => w.id == usuarioId);
    if (user) {
        user.cantidadSeguidores = parseInt(user.cantidadSeguidores) + parseInt("1");
        usuariosExistentes.push(user);
    }
}

function filtrarNombre() {
    debugger
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

function buscarPalabras(frase, palabra) {
    debugger
    let index = frase.search(palabra);
    return index;
}

function agregarId() {
    debugger
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

