let usuario;

$(document).ready(function(){
let vars = getUrlVars();
if(vars.id){
    // busco al usuario en la base de datos
   usuario = findUserById(vars.id);
   let edad = calcularEdad(usuario.fechaDeNacimiento)
let perfilUsuario = "<button onclick='volver()' class='btn btn-danger btn-md'><div class='row align-items-center'><i class='fas fa-arrow-left'></i></button><h1><i class='fas fa-user-circle'></i>"+ usuario.nombreUsuario + " Seguidores: "+ usuario.cantidadSeguidores+" <button onclick='seguirUsuario("+ usuario.id+")' class='btn btn-bg btn-primary'><i class='fas fa-user-plus'></i></button></h1><p>"+ usuario.biografia+"</p> edad: "+ edad+"</div>"
   $("#contenedor").append(perfilUsuario)
}else{
    alert("no tengo el usuario"); 
}
});

function calcularEdad(fecha) {
    fecha = fecha.split("-")
    let ahora = new Date();
    let fechaDeNacimiento = new Date(fecha[2] + "/" + fecha[1] + "/" + fecha[0]);
    let edad = (parseInt((ahora - fechaDeNacimiento) / (1000 * 60 * 60 * 24 * 365)));
    return edad
}

function volver(){
    event.preventDefault();
    $(location).prop('href', 'muro.html');
}