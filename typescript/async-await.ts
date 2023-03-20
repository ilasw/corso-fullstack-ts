(async function () {
    const CAT_FACTS_ENDPOINT = `https://cat-fact.herokuapp.com/facts/random?animal_type=cat`;

    // const userNumber = Number(prompt());
    // const AUREA_CONSTANT_NUMBER = 1.6180339887; 
    // console.log(userNumber / AUREA_CONSTANT_NUMBER);

    // console.log(`prima dell'invocazione della function getCatFacts`);
    // const result = await getCatFacts(3);
    // console.log({ result });
    // console.log(`dopo l'invocazione della function getCatFacts`);

    async function getCatFacts(count: number) {
        console.log('prima della chiamata');

        // const facts = await fetch(`${CAT_FACTS_ENDPOINT}&amount=${count}`)
        //     .then(res => res.json())
        //     // .catch(console.error)
        //     // .then(res => console.log(res))
        //     .finally();
        try {
            const request = await fetch(`${CAT_FACTS_ENDPOINT}&amount=${count}`);
            const facts = await request.json();
            return facts;
        } catch (e) {
            return console.error('Mio Errore:', e);
        }
    }

})();


// Scrivere una function che metta in pausa il codice 
// per un tempo definito dall'unico suo param
const pauseFor = async function (time: number) {
    return await new Promise((resolve) => {
        setTimeout(() => {
            resolve('Ci sono!');
        }, time);
    })
}

// 9:00:00
console.log(new Date())
console.log(await pauseFor(1_000));
console.log(new Date());
// 9:00:10

export { }