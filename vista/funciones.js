function mostrar(){
  document.getElementById("botonArt").style.opacity = "1";
}
function apagar(){
  document.getElementById("botonArt").style.opacity = "0.5";
}

function mostrar_ocultar(){
  var boton = document.getElementById("botonArt");

    if(botonArt.style.opacity == "0.5"){
      mostrar();
    }
    else{
      apagar();
    }
} 