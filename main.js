//array email

const myarray = ['marco@gmail.it', 'matteo@gmail.it', 'sara@gmail.it'];

const mail = prompt('inserisci la tua mail');

const lunghezzaArray = myarray.length;
console.log(lunghezzaArray)

let login = false;

// ciclo for

for (let i=0; i<myarray.length; i++) {
    
    if (myarray[i] == (mail)) {
        login = true
    }
}

// condizione

if (login == true) {
    alert("email inserita è corretta : ora sfida il computer!");
} else {
    alert("email inserita non è corretta");
}

const player = Math.floor(Math.random() * 6) + 1;
alert("il tuo numero è: " + player)
const computer = Math.floor(Math.random() * 6) + 1;
alert("il numero del computer è: " + computer)

if (player > computer) {
    alert("giocatore vince !")
} else if (computer > player) {
    alert("computer vince !")
}else {
    alert("parità")
}






