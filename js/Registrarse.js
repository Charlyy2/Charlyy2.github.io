$(document).ready(function () {
    $("#completarDatos").show();
});

function guardar_usuario_localStorage(mi_perfil) {
    localStorage.setItem("Usuario", JSON.stringify(mi_perfil));
}

function guardar_email_localStorage(email) {
    localStorage.setItem("Email", email);
}

function guardar_contraseña_localStorage(contraseña) {
    localStorage.setItem("Contraseña", contraseña);
}

function obtener_email_localStorage() {
    let emailIngresado = localStorage.getItem("Email");
}

function generarPerfil(nombreUsuario, email, edad, sexoElegido, numeroDeTelefono) {
    $("#btn_seguir").click(function () {
        $("#btn_seguir i").removeClass("fa-user-plus");
        $("#btn_seguir i").addClass("fa-user-check");
    });
    let datosDePerfil = "<div class='col-md-3 mt-4 mb-2 offset-md-1'><h1><i class='fas fa-user-circle'></i>  " + nombreUsuario + "</h1><br><p>@" + emailIngresado + "</p></div>"
    $("#perfil").append(datosDePerfil);
    $("#perfil").show();
    buscarUsuarios();
}


function guardar_perfil() {
    debugger
    event.preventDefault();
    let emailIngresado = $("#ingresarEmail")[0].value;
    let contraseñaIngresada = $("#ingresarContraseña")[0].value;
    let contraseñaReingresada = $("#reingresarContraseña")[0].value;
    let nombreUsuario = $("#nickname")[0].value;
    let fechaDeNacimiento = $("#fechaDeNacimiento")[0].value;
    let sexoElegido = $("#sexoElegido")[0].value;
    let contraseña = $("#ingresarContraseña")[0].value;
    let edad = calcularEdad(fechaDeNacimiento);
    if (emailIngresado !== "" && contraseñaIngresada !== "" && contraseñaReingresada !== "") {
        if (contraseñaIngresada.length > 6) {
            if (contraseñaIngresada == contraseñaReingresada) {
                if (edad >= 18) {
                    let respuesta = registrarUsuario(nombreUsuario, emailIngresado, contraseña, fechaDeNacimiento, sexoElegido);
                    if (respuesta.loggedUser) {
                        alert("usuario registrado con exito");
                        $(location).prop('href', 'muro.html');
                    }
                    else {
                        alert("Este usuario ya se encuentra registrado");
                    }
                }
                else{
                    alert("Debes ser mayor de edad para registrarte")
                }
            }
            else {
                alert("Las contraseñas no coinciden");
            }
        }
        else {
            alert("su contraseña debe tener mas de 6 caracteres");
        }
    }
    else {
        alert("Datos ingresados incorrectamente");
    }


    /*let edad = calcularEdad(fechaDeNacimiento);
    Object.defineProperty(perfilUsuario, "edad", { value: edad, writable: false });
    if (nombreUsuario !== "" && isNaN(edad) == false && isNaN(parseInt(numeroDeTelefono)) == false) {
        if (edad >= 18) {
            mi_usuario = new usuarios(nombreUsuario, emailIngresado, contraseña, fechaDeNacimiento, "0", "...", sexoElegido, "15");
            guardar_usuario_localStorage(mi_usuario)
            $(location).prop('href', 'perfil.html')
        }
        else {
            alert("No cumple con la mayoria de edad")
        }
    }
    else {
        alert("Datos ingresados incorrectamente");

    }*/
}