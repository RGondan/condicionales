function toggleBorder() {
    let imagen = document.getElementById('imagen');
    if (imagen.classList.contains("borde_rojo")){
        imagen.classList.remove("borde_rojo")
    }
    else {
        imagen.classList.add("borde_rojo")
    }
}