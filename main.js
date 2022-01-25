//array email

const myarray = ['marco@gmail.it', 'matteo@gmail.it', 'sara@gmail.it'];

const mail = prompt('inserisci la tua mail');

const lunghezzaArray = myarray.length;
console.log(lunghezzaArray)

if (mail == myarray) {
    alert('L mail inserita è corretta');
} else {
    alert("L mail inserita non è corretta");
}