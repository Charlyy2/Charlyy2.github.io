function usuarios(nombreUsuario, email, contraseña, fechaDeNacimiento, seguidores, biografia, sexo, id, seguidos, bloqueados, imagen) {
    this.nombreUsuario = nombreUsuario;
    this.email = email.toLowerCase();
    this.contraseña = hashcode(contraseña);
    this.fechaDeNacimiento = fechaDeNacimiento;
    this.seguidores = seguidores;
    this.biografia = biografia;
    this.sexo = sexo;
    this.id = id;
    this.seguidos = seguidos;
    this.bloqueados = bloqueados;
    this.imagen = "https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/User-avatar.svg/1024px-User-avatar.svg.png";
}

function publicacion(id, texto, fecha, nombreUsuario, idUsuario) {
    this.id = id;
    this.texto = texto;
    this.fecha = fecha;
    this.nombreUsuario = nombreUsuario;
    this.idUsuario = idUsuario;
}