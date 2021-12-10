function guardarPublicacionLocal(publicacion) {
    let arrayPublicaciones = JSON.parse(localStorage.getItem("Publicaciones"));
    arrayPublicaciones.push(publicacion)
    localStorage.setItem("Publicaciones", JSON.stringify(arrayPublicaciones));
}

function getPublicaciones() {
    debugger
    let publicaciones = JSON.parse(localStorage.getItem("Publicaciones"));
    return publicaciones
}

function publicacionId() {
    let publicacionId;
    let arrayPublicaciones = JSON.parse(localStorage.getItem("Publicaciones"))
    for (let i = 0; i < arrayPublicaciones.length; i++) {
        publicacionId = Math.max(arrayPublicaciones[i].id)
    }
    if (arrayPublicaciones.length == 0) {
        publicacionId = 1
    }
    else {
        publicacionId = (publicacionId + 1)
    }
    return publicacionId;
}

function getPublicacionesMuro() {
    debugger
    let usuarioLogeado = getUsuarioLogeado();
    let publicaciones = getPublicaciones();

    let usuariosQueSigo = usuarioLogeado.seguidos;

    usuariosQueSigo.push(parseInt(usuarioLogeado.id));

    let publicacionesFiltradas = publicaciones.filter(p => usuariosQueSigo.includes(p.idUsuario));

    return publicacionesFiltradas;
}
