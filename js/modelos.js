function usuarios(nombreUsuario, email, contraseña, edad, cantidadSeguidores, biografia, sexo, id, seguidos) {
    this.nombreUsuario = nombreUsuario;
    this.email = email;
    this.contraseña = contraseña;
    this.edad = edad;
    this.cantidadSeguidores = cantidadSeguidores;
    this.biografia = biografia;
    this.sexo = sexo;
    this.id = id;
    this.seguidos = seguidos;
}

function publicacion(id, texto, fecha, nombreUsuario, idUsuario) {
    this.id = id;
    this.texto = texto;
    this.fecha = fecha;
    this.nombreUsuario = nombreUsuario;
    this.idUsuario = idUsuario;
}