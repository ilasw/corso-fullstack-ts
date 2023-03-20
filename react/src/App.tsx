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

  const names = ['Luigi', 'Giacomo', 'Gianmarco', 'Roberto'];

  return (
    <div className="App">
      {
        (name?.length > 0)
          ? <h1>Hi {name}!</h1>
          : null
      }

      <div style={{ marginTop: '40px' }}>
        <input type="text"
          value={name}
          onInput={inputHandler} />
      </div>

      <ul>
        { names.map((name) => (
          <li>{name}</li>
        )) }
      </ul>
    </div>
  )
}

export default App
