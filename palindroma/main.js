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

    let mirrored = '';
    for(let i = word.length - 1 ; i >= 0; i--){
        mirrored += word[i];
    }
    return mirrored;
}


if(word == Palindroma()){
    alert("La parola è palindroma");
}else{
    alert("La parola non è palindroma");
}