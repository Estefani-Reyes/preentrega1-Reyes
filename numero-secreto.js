alert('Bienvenido al juego del número secreto');
let intento = prompt('Elige un número entre 1 y 10');

while(isNaN(intento)){
    intento = prompt('Elige un número entre 1 y 10');
}
let numeroSecreto = 4;
for(i = intento; 1 <= 10; i++){

    console.log(intento  == numeroSecreto);
    if(i <= 10 & i > 1){
        if (intento  == numeroSecreto) {
            alert('Felicidades Acertaste!');
        } else {
            alert('El número secreto era ' + numeroSecreto);
        }
    }else{
        alert('ESTAS COLOCANDO UN NUMERO QUE NO ESTA EN EL RANGO SOLICITADO'); 
    }

}
