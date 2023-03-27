import { CastArrayPipe } from './cast-array.pipe';

describe('CastArrayPipe', () => {
  const pipe = new CastArrayPipe();

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('should return a Array<string> starting from string', () => {
    // string with 7 random chars
    const input = (Math.random() + 1).toString(36).substring(7);
    const output = pipe.transform(input); // [] di 7 valore stringa
    const joinedOuput = output.join('');

    expect(joinedOuput).toBe(input);
  });

  it('should return a Array<number> starting from number', () => {
    // string with 7 random chars
    const input = (Math.random() + 1) * 100_000;
    const output = pipe.transform(input); // [] di 7 numeri

    const joinedOuput = Number(output.join('')); // 7 caratteri in stringa

    expect(joinedOuput).toBe(input);
  });

  it('should return a [[key,value]] passing an object input', () => {
    const input = { firstName: 'Luca', lastName: 'Pagliaro' };
    const output = pipe.transform(input); // [['firstName', 'Luca'], ...]
    const outputToObj = Object.fromEntries(output);

    // expect(JSON.stringify(outputToObj)).toBe(JSON.stringify(input));
    expect(outputToObj).toEqual(input);
  });

  /*
    1
    - se l'input è string scomponiamo le singole lettere;
    - se l'input è number scomponiamo i singoli caratteri;

    2
    - se l'input è array torniamo lo stesso array;

    3
    - se l'input è object tor niamo un array di array (matrice) con [[chiave, valore]]
    - se l'input è una Map replichiamo il caso di object;

    4
    - se l'input è (null|undefined|boolean|Symbol|...) torniamo [];

    {{ [value] | castArray }}
  */

});
