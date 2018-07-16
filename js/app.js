var Eventos = {
  init: function(){
    this.asignarEventosBotones('tecla');
  },
  asignarEventosBotones: function(selector){
    var botonesPagina = document.getElementsByClassName(selector);
    for (var i = 0; i < botonesPagina.length; i++) {
      botonesPagina[i].onmousedown = this.eventoReducirTamano;
      botonesPagina[i].onmouseup = this.eventoAumentarTamano;
    }
  },
  eventoReducirTamano: function(event){
    reducirTamano(event.target);
  },
  eventoAumentarTamano: function(event){
    aumentarTamano(event.target);
  }
}

Eventos.init();
var operando1 = 0;
var operacion = "";
var resultado = 0;

function reducirTamano(elemento){
  if (elemento.id == "1" || elemento.id == "2" || elemento.id == "3" || elemento.id == "0" || elemento.id == "punto" || elemento.id == "igual"){
    elemento.style.width = "27%";
  }else if (elemento.id == "mas"){
    elemento.style.width = "85%";
  }else{
    elemento.style.width = "20%";
  }
}

function aumentarTamano(elemento){
  if (elemento.id == "1" || elemento.id == "2" || elemento.id == "3" || elemento.id == "0" || elemento.id == "punto" || elemento.id == "igual"){
    elemento.style.width = "29%";
  }else if (elemento.id == "mas"){
    elemento.style.width = "90%";
  }else{
    elemento.style.width = "22%";
  }
  Calculadora(elemento.id)
}

function Calculadora(teclapresionada){
  var borrarResultado = false;
  if (teclapresionada == "on"){
    resultado = 0;
    operando1 = 0;
    operacion = "";
  }else if (teclapresionada == "sign"){
    resultado = resultado * -1;
  }else if (teclapresionada == "raiz"){
  //No hacer nada
  }else if (teclapresionada == "dividido" || teclapresionada == "por" || teclapresionada == "menos" || teclapresionada == "mas" || teclapresionada == "igual"){
    ejecutarOperacion();
    borrarResultado = true;
    operacion = teclapresionada;
  }else if (teclapresionada == "punto"){
    if (resultado.indexOf('.') == -1){
      resultado = resultado + '.';
    }
  }else{ //Aqui quedan todos los números
    if (resultado != 0){
      if (resultado.length<8){
        resultado = resultado + teclapresionada.toString();
      }
    }else{
      resultado = teclapresionada.toString();
    }
  }
  mostrarResultado();
  if (borrarResultado == true){
    operando1 = resultado;
    resultado = 0;
  }
}

function ejecutarOperacion(){
  if (operacion == "dividido"){
    resultado = Number(operando1) / Number(resultado);
  }else if (operacion == "por"){
    resultado = Number(operando1) * Number(resultado);
  }else if (operacion == "menos"){
    resultado = Number(operando1) - Number(resultado);
  }else if (operacion == "mas"){
    resultado = Number(operando1) + Number(resultado);
  }
}

function mostrarResultado(){
  //Mostrar resultado
  var objPantalla = document.getElementsByClassName("pantalla");
  objPantalla[0].innerHTML = resultado;
}
