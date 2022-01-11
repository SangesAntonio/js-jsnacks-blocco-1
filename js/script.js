console.log( 'js ok');
/*L’utente inserisce due numeri in successione, con due prompt. Il software stampa il maggiore.*/


const  number= parseInt(prompt('Inserisci un numero'));
const  numberTwo= parseInt(prompt('Inserisci un numero'));

const text = document.getElementById('display');

let message='Il numero maggiore è: ';
if(isNaN(number) || isNaN(numberTwo)){
    message='Non hai inserito un numero ';
    text.innerText= message;

}else{
    if(number > numberTwo){
        message += number;
        
    }else if ( number < numberTwo){
        message += numberTwo;
        
    }else{
        message = 'I numeri sono uguali';
    }
}

console.log(message);
text.innerHTML=message;


