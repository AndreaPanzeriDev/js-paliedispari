/*
L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
Sommiamo i due numeri
Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
Dichiariamo chi ha vinto.
*/

//let the user choise one of the two option
let choise = prompt("Scegli pari o dispari");
//convert what the user choose to lowercase
choise = choise.toLowerCase();


//recall the function in order to check if the user type something
Check(choise);


//let the user put is number
let number = prompt("Inserisci un numero");

//recall the function in order to check if the user type something
Check(number);

//after checked that everything is fine convert the string into a integer
number = parseInt(number);

//check if the number is between 1 and 5
Hand(number);


//if everythings is ok start the game
Game(choise, number);



//check if the user type something otherwise reload the page
function Check(x){
    if(x == ''){
        alert("Devi inserire qualcosa");
        location.reload();
    }else{
        console.log("ok, checked")
    }
}


//check if the user select a number between 1 and 5 otherwise reload the page
function Hand(x){
    if(x <= 5 && x>0){
        console.log("you're good");
    }else{
        alert("devi inserire un numero compreso tra 1 e 5");
        location.reload();
    }
}


//let's go into the game
function Game(x,y){

    //generate a randome number to simulae the CPU 
    let randomnumber = Math.round(Math.random() * 5);

    //sum the CPU's number with the user number
    if((y+randomnumber) % 2 == 0){
        // if is even check if the user choose even
        console.log("it's even");
        if(x == 'pari'){
            console.log("Hai vinto");
        }else{
            console.log("Hai perso");
        }
    }else{
        //if is odd check if the user choose odd
        console.log("it's odd");
        if(x == 'dispari'){
            console.log("Hai vinto");
        }else{
            console.log("Hai perso");
        }
    }
}