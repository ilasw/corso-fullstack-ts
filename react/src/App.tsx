import { useReducer, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function NameList (props: {names: string[]}){
  console.log(props);
  // return <ul>{ props.names.map((name) => (NameItem({name}))) }</ul>
  return <ul>{ props.names.map((name) => (<NameItem name={name} />)) }</ul>
}

function NameItem (props: {name: string}){
  console.log(props);
  return <li>{props.name}</li>
}

function Greetings ({name}: {name:string}){
  if(name) {
    return <h1>Hi {name}!</h1>;
  }else{
    return null;
  }
}

const appLogic = () => {
  const [name, setName] = useState('');
  const [names, setNames] = useState<string[]>([]);

  const inputHandler: React.FormEventHandler<HTMLInputElement> = (event) => {
    const value = (event.target as HTMLInputElement).value
    console.log('ciao')
    setName(value);
  }

  const addName: React.FormEventHandler<HTMLFormElement> = function (event) {
    const trimmedName = name.trim();
    event.preventDefault();

    if(!trimmedName) return;
    setNames([...names, trimmedName]);    
  }

  return {name, names, addName, inputHandler};
}

type FormProps = {
  name: string, 
  addName: React.FormEventHandler<HTMLFormElement>, 
  inputHandler: React.FormEventHandler<HTMLInputElement>
};
function Form (props: FormProps){
  const {name, addName, inputHandler} = props;

  return <form onSubmit={addName}>
  <input
    autoFocus
    onInput={inputHandler}
    type="text"
    value={name}
  />
  <button>Salva nome</button>
</form>
}

function App() {  
  // key nel for
  // child components
  // tailwindcss

  const {name, names, addName, inputHandler} = appLogic();

  return (
    <div className="App">
      <Greetings name={name} />

      <div style={{ marginTop: '40px' }}>
        <Form name={name} addName={addName} inputHandler={inputHandler} />
      </div>

     <NameList names={names} />
    </div>
  )
}

export default App
