document.write('Adivina el número secreto')
let intento = prompt('Elige un número entre 1 y 10');
validacion (intento)
function validacion (intento){
    while(isNaN(intento)){
        intento = prompt('Elige un número entre 1 y 10');
    }
return intento;
}

let numeroSecreto = 4;
for(i =  validacion (intento); 1 <= 10; i++){

    if(i <= 10 & i > 1){
        if (intento  == numeroSecreto) {
            alert('Felicidades Acertaste!');
            break;
        } else {
            alert('El número secreto era ' + numeroSecreto);
            break;
        }
    }else{
        alert('ESTAS COLOCANDO UN NUMERO QUE NO ESTA EN EL RANGO SOLICITADO'); 
        break;
    }

}
