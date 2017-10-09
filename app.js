function isValidaCard(){
var mensaje='';
var num = prompt("Ingrese valor de tarjeta")
while(num===""){
   num;

}

else {
var suma =0;

var  arrayCard=num.split('');
var arrayReverse = arrayCard.reverse();

for(i=0;i<arrayReverse.length; i++){
    if(i%2!==0){
        var elementSelection= parseInt(arrayReverse[i])*2;
        if(elementSelection>=10){
            var digitInitial = parseInt(elementSelection/10);
            var digitFinal = elementSelection%10
            var elementFinal = digitInitial + digitFinal;
            arrayReverse[i] = elementFinal;

        }
        else{
            var otherElement = parseInt(arrayReverse[i])*2
             arrayReverse[i] = otherElement;
        }
    }
}
for(j=0;j<arrayReverse.length;j++){

    suma+=parseInt(arrayReverse[j]);
}

suma%10==0 ? mensaje = "tarjeta válida" : mensaje = "tarjeta inválida"

}
return document.write(mensaje);
}


isValidaCard();
