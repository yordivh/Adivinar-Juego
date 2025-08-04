let numeroSecreto = 0;
let intentos = 1;
let listaNumerosSorteados= [];
let numeroMaximo = 10;

function asignarTextoElemento (elemento,texto){
    
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}




function verificarIntento (){
    let numeroDeUsuario = parseInt(document.getElementById("valorUsuario").value);

    if(numeroDeUsuario == numeroSecreto){
        asignarTextoElemento("p",`¡¡Acertaste el numero en ${intentos} ${(intentos == 1 ? "vez": "veces")}!!`);
        document.getElementById("reiniciar").removeAttribute("disabled");
    //el usuario no acerto
    }else{
        if(numeroDeUsuario > numeroSecreto){
            asignarTextoElemento("p","el numero secreto es menor");
        }else{
            asignarTextoElemento("p","el numero secreto es mayor");
        }
        intentos +=1;
        limpiarCaja();
    }
    return;
}

function limpiarCaja(){

    document.querySelector("#valorUsuario").value= "";



}

    function generarNumeroSecreto(){

        let numeroGenerado=Math.floor(Math.random()*numeroMaximo)+1;
        console.log(numeroGenerado);
        console.log(listaNumerosSorteados);

    if(listaNumerosSorteados.length== numeroMaximo){
        asignarTextoElemento("p","Ya se sortearon todos los numeros");


        }else{
        // si el numero generado esta en la lista hacemos una operacion sino nada
        if(listaNumerosSorteados.includes(numeroGenerado)){

            return generarNumeroSecreto();

        }else{
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }
}



function condicionesIniciales(){
    asignarTextoElemento ("h1", "Juego del numero secreto");
    asignarTextoElemento ("p", `dame un numero del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos=1;
}


function reiniciarJuego(){

    //limpiar caja
    limpiarCaja();

    // indicar mensaje de intervalo de numeros
    // generar el numero aleatorio
    // inicializar el numero de intentos 
    condicionesIniciales();

    // deshabilitar boton de nuevo juego
    document.querySelector("#reiniciar").setAttribute("disabled","True");
      

}

condicionesIniciales();





