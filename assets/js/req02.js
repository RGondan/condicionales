let cant01 = document.getElementById("cantidad01");
let cant02 = document.getElementById("cantidad02");
let cant03 = document.getElementById("cantidad03");

cant01.onchange = function(){
    cant01.value = checkValue(cant01.value);
}

cant02.onchange = function(){
    cant02.value = checkValue(cant02.value);
}

cant03.onchange = function(){
    cant03.value = checkValue(cant03.value);
}

function checkValue(cantidad){
    if (isNaN(cantidad))
    {
        return 0;
    }

    if (cantidad < 0)
    {
        return 0;
    }

    if (cantidad > 10)
    {
        return 10;
    }
    
    return cantidad;
    
}

let verificar = document.getElementById("verificar");

verificar.onclick = function(){
    let total = Number(cant01.value) + Number(cant02.value) + Number(cant03.value);
    let mensaje = document.getElementById("mensaje");
    if (total > 10){
        mensaje.innerText = "Llevas demasiados stickers.";
    }
    else {
        mensaje.innerText = "Llevas " + total + " stickers."
    }
}