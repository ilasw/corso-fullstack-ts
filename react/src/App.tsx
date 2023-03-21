import { useEffect, useId, useState } from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import { Footer } from './components/footer/footer';
import { Header } from './components/header/header';
import './App.css'

const App = function () {
  const menuItems = ['Home', 'Blog'];

  const [facts, setFacts] = useState<any[] | any>([]);
  const uniqueId = useId() // torna un id randomico per il componente

  const [count, setCount] = useState(0);
  const sumCountWith = function (numberToAdd: number) {
    return () => setCount((count) => count + numberToAdd);
  }

  // useEffect serve ad eseguire operazioni al cambiare di determinate dipendenze;
  useEffect(() => {
    const URL = `https://cat-fact.herokuapp.com/facts/random?animal_type=cat&amount=`;
    fetch(URL + count)
      .then((res) => res.json())
      .then((value) => {
        console.log(value);
        return value;
      })
      .then((facts) => setFacts(facts))

    // async function fetchFacts() {
    //   const facts = await fetch(URL + count).then((res) => res.json());
    //   setFacts(facts);
    // }

    // fetchFacts();
    return () => console.log('reset dello useEffect', { count });
  }, [count]); // hooks 

  return <div className='App'>
    <Header items={menuItems}>Header children</Header>

    <main>
      <button
        className='btn btn-secondary'
        onClick={sumCountWith(-1)}
      >-</button>

      <span
        className='d-inline-block mx-4'
      >{count}</span>

      <button
        className="btn btn-secondary"
        onClick={sumCountWith(1)}
      >+</button>

      <div className='my-4'>
        <button
          className='btn btn-danger'
          onClick={() => setCount(0)}
        >Reset</button>
      </div>

      <div>{
        Array.isArray(facts)
          ? facts.map((fact, index) => (
            <div key={fact._id}>{index + 1} - {fact.text}</div>
          ))
          : (facts?.text ?? null)
      }</div>
    </main>

    <Footer />
  </div>
}

export default App
