console.clear();

(function () {

    const promiseHandler = function (resolve, reject) {
        try {
            for (let index = 0; index < 1_000; index++) {
                console.log('ciao');
            }
            return resolve('1000x Ciao');
        } catch (error) {
            console.error('Error', error);
            return reject(error)
        }
    }

    const promise = new Promise(promiseHandler);
    console.log(typeof promise);

    const result = promise // Promise iniziale
        .then((result) => {
            console.log(result)
            return 'pippo';
        })  // ritorno di una nuova promise con value: "pippo"
        .then(value => console.log({ value }))
        .catch((error) => console.error(error)) // ritorno di una nuova promise
        .finally(() => console.info('finito tutto')); // ritorno di una nuova promise

    // Promise, caso di uso
    const URL = `https://cat-fact.herokuapp.com/facts/random?animal_type=cat&amount=5`;
    console.log('loading...')
    fetch(URL)
        .then((response) => response.json())
        // .then(console.log)
        .then((arrayOfFacts) => {
            const html = arrayOfFacts
                .map(fact => `- ${fact.text}`)
                .join('</br>');
            document.body.innerHTML = html;
        })
        .catch(function (error) {
            console.error(`Errore durante la fetch`, error)
        })
        .finally(() => console.log('end loading'))

    // Impostare un loader nel nostro HTML;
    // Chiamare l'API sui gatti e recuperare per ogni elemento che ci viene restituito solo il testo;
    // Inserire a schermo tutti e 5 i testi che avremo a disposizione;
    // alla fine fare un console log in cui si dice cha abbiamo fatto tutto (finally)
})();