/*
L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
Sommiamo i due numeri
Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
Dichiariamo chi ha vinto.
*/


let choise = prompt("Scegli pari o dispari");
choise = choise.toLowerCase();

Check(choise);

let number = prompt("Inserisci un numero");
Check(number);

number = parseInt(number);
Hand(number);

Game(choise, number);




function Check(x){
    if(x == ''){
        alert("Devi inserire qualcosa");
        location.reload();
    }else{
        console.log("ok, checked")
    }
}



function Hand(x){
    if(x <= 5 && x>0){
        console.log("you're good");
    }else{
        alert("devi inserire un numero compreso tra 1 e 5");
        location.reload();
    }
}


function Game(x,y){
    let randomnumber = Math.round(Math.random() * 5);
    if((y+randomnumber) % 2 == 0){
        console.log("it's even");
        if(x == 'pari'){
            console.log("Hai vinto");
        }else{
            console.log("Hai perso");
        }
    }else{
        console.log("it's odd");
        if(x == 'dispari'){
            console.log("Hai vinto");
        }else{
            console.log("Hai perso");
        }
    }
}