//array email

const myarray = ['marco@gmail.it', 'matteo@gmail.it', 'sara@gmail.it'];

const mail = prompt('inserisci la tua mail');

 
const lunghezzaArray = myarray.length;
console.log(lunghezzaArray)

for (let i=0; i<myarray.length; i++) {

    if (myarray[i] == (mail)) {
         var login = true
    }
}

if (login == true) {
    alert("email inserita è corretta");
}else {
    alert("email inserita non è corretta");
}




