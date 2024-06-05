let num01 = document.getElementById("num01");
let num02 = document.getElementById("num02");
let num03 = document.getElementById("num03");
let boton = document.getElementById("ingresar");

document.querySelector("body").onload = loadOptions();
boton.onclick = validate;

function loadOptions(){
    let options = "";
    for(let i = 1; i < 10; i++){
        options += "<option value='" + i + "'>" + i + "</option>";
    }

    if (num01 != null){
        num01.innerHTML = options;
    }
    if (num02 != null){
        num02.innerHTML = options;
    }
    if (num03 != null){
        num03.innerHTML = options;
    }
}

function validate(){
    let code = num01.value + num02.value + num03.value;

    let mensaje = document.getElementById("mensaje");

    if (mensaje != null){
        if (code == "911"){
            //La forma en la que se pide que se escriba este mensaje es terrible
            //un mejor mensaje seria:
            //"La contraseña numero 1 es correcta".
            //pero se conserva de esta manera ya que es pedido asi en el "desafio"
            mensaje.innerText = "Password 1 correcto.";
            return true;
        }

        else if (code == "714"){
            mensaje.innerText = "Password 2 correcto.";
            return true;
        }

        else {
            mensaje.innerText = "Password incorrecto."
        }
    }

}