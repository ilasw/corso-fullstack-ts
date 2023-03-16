// Callback

// (1) una funzione che viene richiamata da un'altra (2) funzione 
// che non conosce l'esatta implementazione della (1).

(function () {

    const isObject = (value) => {
        return (typeof value === 'object' && Boolean(value))
    }

    // "Via monserrato 231" == "Pizza Inn"
    const logFn = (function () {
        console.log('Sono un console.log');
    });

    console.log('Inizio esperimento alle ', new Date().getTime());

    setTimeout(function () {
        console.log('Sono un console.log');
        console.log('Fine esperimento alle ', new Date().getTime())
    }, 1_000)

    // proviamo a creare un fn che richiama un callback;
    function createCounterWithCallback(initialNumber, callbackFn){
        let number = initialNumber;
        return function(){
            number++;

            if(typeof callbackFn === 'function'){
                console.log('la callback è una function', callbackFn);
                callbackFn(number);
            }

            return number;
        }
    }

    const callbackFn = (number) => console.log(number)
    const count = createCounterWithCallback(0, console.log); 
    count() // console.log(1)
    count() // console.log(2)
    count() // console.log(3)

    const countAlert = createCounterWithCallback(10, (number) => alert(number)); 
    // countAlert() // alert(11)

    const countDOM = createCounterWithCallback(20); 
    countDOM()
})();

// Scrivere una function che prenda in input dall'utente un testo e in base
// alla callback passata compia un'azione (console.log, alert, testo in uppercase, ...);

function elaborateInputWith(callbackFn){
    const message = prompt('Inserire testo');
    
    if(typeof message === 'string' && typeof callbackFn === 'function'){
        callbackFn(message);
    }
}

elaborateInputWith(alert) // fa un alert dell'input dell'utente
elaborateInputWith(console.log) // fa il console.log dell'input

const textToUpperCase = (text) => {
    console.log(text.toUpperCase())
}
elaborateInputWith(textToUpperCase) // trasforma il testo in uppercase e lo logga


// Promise
// Destructoring, rest, spread
// API calls


/*


    ~/ npm init
    ~/ npm install -D vite
    # configurare gli script su package.json
    ~/ npm run dev


*/