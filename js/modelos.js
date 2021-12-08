function usuarios(nombreUsuario, email, contraseña, edad, cantidadSeguidores, biografia, sexo, id) {
    this.nombreUsuario = nombreUsuario;
    this.email = email;
    this.contraseña = contraseña;
    this.edad = edad;
    this.cantidadSeguidores = cantidadSeguidores;
    this.biografia = biografia;
    this.sexo = sexo;
    this.id = id;
}

function publicacion(id, texto, fecha, usuario) {
    this.id = id;
    this.texto = texto;
    this.fecha = fecha;
    this.usuario = usuario;
}