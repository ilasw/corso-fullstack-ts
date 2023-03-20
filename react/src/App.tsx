import { useReducer, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [name, setName] = useState('');
  const inputHandler: React.FormEventHandler<HTMLInputElement> = (event) => {
    const value = (event.target as HTMLInputElement).value
    console.log('ciao')
    setName(value);
  }

  const [names, setNames] = useState([]);

  /*
    1. Prender il nome attualmente inserito;
    2. Aggiungerlo alla lista di "names";
    3. Resettare il nome nella input;
  */ 
  const addName: React.FormEventHandler<HTMLFormElement> = function (event) {
    event.preventDefault();
    console.log({ name });
  }

  return (
    <div className="App">
      {
        (name?.length > 0)
          ? <h1>Hi {name}!</h1>
          : null
      }

      <div style={{ marginTop: '40px' }}>
        <form onSubmit={addName}>
          <input type="text"
            value={name}
            onInput={inputHandler} />
          <button>Salva nome</button>
        </form>
      </div>

      <ul>
        {names.map((name) => (
          <li>{name}</li>
        ))}
      </ul>
    </div>
  )
}

export default App
