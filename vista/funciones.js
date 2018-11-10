function mostrar(){
  document.getElementById("botonArt").style.opacity = "1";
}
function apagar(){
  document.getElementById("botonArt").style.opacity = "0.5";


}

function atenuar(){

  var boton = document.getElementById("botonArt");

    if(botonArt.style.opacity == "0.5"){
      mostrar();
    }
    else{
      apagar();
    }
    mostrar_ocultar();
    
} 

function mostrar_ocultar() {
  document.getElementById("articulos").classList.toggle("show");
}