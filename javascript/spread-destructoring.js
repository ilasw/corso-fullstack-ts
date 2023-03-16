console.clear();

(function () {
    // Destructoring

    const obj = {
        name: 'Luca',
        skills: ['JS', 'TS']
    };
    console.log(obj);

    const { skills, name } = obj;
    //  const skills = obj.skills;
    //  const name = obj.name;
    console.log({ skills, name })

    //  const length = skills.length;
    const { length } = skills;
    console.log({ length })

    const [first, second, third] = skills;
    //  const first = skills[0];
    //  const second = skills[1];
    //  const third = skills[2];
    console.log({ first, second, third })

    const facts = [{ id: '1', text: 'Miao' }, { id: '2', text: 'Bau' }];
    facts.forEach(({ text }, index, [firstItem, secondItem]) => {
        // const {text} = item;
        // const [firstItem] = array;
        console.log(text);

        if (text === firstItem.text) {
            console.log('sei il primo item o qualcosa che fa miao');
        }
    });

    const [firstChar] = 'Ciao';
    console.log({ firstChar })
    for (const iterator of 'ciao') {
        console.log(iterator)
    }
})();

(function () {
    console.clear();

    // Spread/Rest "..."
    const ranking = [
        { position: 1, name: 'Andrea', points: 100 },
        { position: 2, name: 'Denise', points: 90 },
        { position: 3, name: 'Dario', points: 82 },
        { position: 4, name: 'Salvatore', points: 76 },
        { position: 5, name: 'Marco', points: 36 },
    ];

    const [first, second, ...others] = ranking;
    console.log({ first, second, others });

    const { name, ...rankDatas } = first;
    console.log({ name, rankDatas });

    const logFn = function (...messages) {
        console.log({ messages })
    }
    logFn('Ciao', 'Come stai', 'Sono un miao', 'Ti dico Bao')

    const [firstChar, ...chars] = 'Ciao';
    console.log({ firstChar, chars })

    // Spread
    // ranking.concat([
    //     {position: 6, name: 'Federico', points: 12}, 
    //     {position: 7, name: 'Francesca', points: 9}
    // ]);
    const rankingTail = [
        { position: 6, name: 'Federico', points: 12 },
        { position: 7, name: 'Francesca', points: 9 },
    ];
    const newRanking = [
        ...ranking,
        ...rankingTail
    ];
    console.log({ newRanking });

    const person = { name: 'Peppino', age: 99 };
    const player = { ...person, position: 8, points: 0 };
    console.log({ person, player })
})();

(function () {

    // Fibonacci
    // [0 1] 1 2 3 5 8 13

    const reduceSum = [1,3,6,2,5].reduce((acc, number) => {
        return acc + number;
    }, 0);
    console.log({reduceSum});

    function getFibonacci(n) {
        // 1
        // const array = (Array.from({length: n})); 
        // return array.reduce((acc, item, index, array) => {
        //     if((n-1) === index){
        //         return acc[n - 1];
        //     }

        //     const sum = acc.at(-1) + acc.at(-2);
        //     return [...acc, sum];
        // }, [0, 1]);

        if(!Number.isInteger(n) || n <= 0){
            return 'Sei un folle!';
        }

        if(n < 3){
            return n-1;
        }

        let penultimo = 0;
        let ultimo = 1;

        for (let index = 2; index < n; index++) {
            ultimo = ultimo + penultimo;    // 1 + 0 = 1; // 1 + 1 = 2; // 2 + 1 = 3
            penultimo = ultimo - penultimo; // 1 - 0 = 1; // 2 - 1 = 1; // 3 - 1 = 2;
        }

        return ultimo;
    }

    console.log(getFibonacci(1)) // 0  -> statico
    console.log(getFibonacci(2)) // 1  -> statico
    console.log(getFibonacci(3)) // 1  -> dinamico
    console.log(getFibonacci(4)) // 2  -> dinamico
    console.log(getFibonacci(8)) // 13 -> dinamico
    console.log(getFibonacci(-2)) // 13 -> dinamico

})()