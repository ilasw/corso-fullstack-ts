import { useReducer, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function NameList (props: {names: string[]}){
  console.log(props);
  return <ul>{ props.names.map((name) => (<NameItem name={name} />)) }</ul>
}

function NameItem (props: {name: string}){
  console.log(props);
  return <li>{props.name}</li>
}

function App() {
  const [name, setName] = useState('');
  const inputHandler: React.FormEventHandler<HTMLInputElement> = (event) => {
    const value = (event.target as HTMLInputElement).value
    console.log('ciao')
    setName(value);
  }

  const [names, setNames] = useState<string[]>([]);

  /*
    1. Prender il nome attualmente inserito;
    2. Aggiungerlo alla lista di "names";
    3. Resettare il nome nella input;
  */
  const addName: React.FormEventHandler<HTMLFormElement> = function (event) {
    event.preventDefault();
    console.log({ name });

    // const newList = [...names, name];
    // setNames(newList);

    // const list = names;
    // list.push(name)
    // setNames(list);

    const trimmedName = name.trim();

    if(!trimmedName) return;

    console.log(names); // []
    setNames([...names, trimmedName]);
    
    console.log(names); // []
    setNames([...names, trimmedName]);
    // setName('');

    // setNames( (oldNames) => [...oldNames, name] ); // [] -> ['Luca']
    // setNames( (oldNames) => [...oldNames, name] ); // ['Luca'] -> ['Luca', 'Luca']

    // il setNames è asyncrono e qui riesco a leggere solo il vecchio valore :-(
    console.log(names);
  }

  // key nel for
  // child components
  // tailwindcss

  return (
    <div className="App">
      {
        (name?.length > 0)
          ? <h1>Hi {name}!</h1>
          : null
      }

      <div style={{ marginTop: '40px' }}>
        <form onSubmit={addName}>
          <input
            autoFocus
            onInput={inputHandler}
            type="text"
            value={name}
          />
          <button>Salva nome</button>
        </form>
      </div>

     <NameList names={names} />
    </div>
  )
}

export default App
