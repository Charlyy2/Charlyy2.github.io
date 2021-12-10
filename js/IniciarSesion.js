function iniciar_sesion() {
    event.preventDefault();

    //busca el email y comprueba si existe, si existe, comprueba su contraseña.
    let contraseña = $("#contraseña")[0].value;
    let email = $("#nickname")[0].value;
    let user = findUserByEmail(email.toLowerCase());
    if (user) {
        if(user.contraseña == hashcode(contraseña)){
            setUsuarioLogeado(user);
            $(location).prop('href', 'muro.html');
        }
        else{
            alert("contraseña incorrecta");
        }
    }
    else{
        alert("usuario incorrecto");
    }    
}