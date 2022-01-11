/*L’utente inserisce due parole in successione, con due prompt. Il software stampa prima la parola più corta, poi la parola più lunga.*/

const  word= prompt('Inserisci una parola', 'america').trim()
const  wordTwo= prompt('Inserisci una seconda parola', 'fiume').trim()

const text = document.getElementById('display')
const texTwo = document.getElementById('display-two')

let message= 'La parola più corta è:';
let messageTwo= 'La parola più lunga è:';

if (isNaN(text) || isNaN(texTwo)){
    message= 'Non hai inserito una parola valida';
    messageTwo= ''
}else{

    if(word.length > wordTwo.length){
        message += wordTwo
        messageTwo += word
    }else if(word.length < wordTwo.length){
        message += word
        messageTwo += wordTwo
    }else{
        message= 'Le parole sono uguali'
        messageTwo= ''
    }
}

console.log(message)
console.log(messageTwo)

text.innerHTML=message
texTwo.innerHTML=messageTwo