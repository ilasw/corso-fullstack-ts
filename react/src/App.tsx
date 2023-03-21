import { useState } from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import { Footer } from './components/footer/footer';
import { Header } from './components/header/header';
import './App.css'

const App = function () {

  const menuItems = ['Home', 'Blog'];

  return <div className='App'>
    {/* Creare un layout con Header, Footer & Main */}

    {/* In Header mostrare un menu con gli elementi passati da App */}
    <Header items={menuItems}>Header children</Header>

    <main>Sono il main</main>
    <Footer />
  </div>
}

export default App
