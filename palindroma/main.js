/*
Palidroma
Chiedere all’utente di inserire una parola
Creare una funzione per capire se la parola inserita è palindroma
*/



let word = prompt("inserisci una parola:")

if(word == ''){
    alert("Inserisci una parola")
}



function Palindroma(){
    //create the reverse word
    let mirrored = '';
    for(let i = word.length - 1 ; i >= 0; i--){
        mirrored += word[i]; //add letter by letter to create the new word
    }
    return mirrored; //return the reverse word
}


if(word == Palindroma()){
    //if the word is palindrome, say it and know it
    alert("La parola è palindroma");
}else{
    //if not, you're done
    alert("La parola non è palindroma");
}