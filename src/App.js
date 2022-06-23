import './App.css';
import { useEffect, useState } from 'react'
import axios from 'axios'
import {Routes, Route, Link} from "react-router-dom"
import Pokedex from './components/Pokedex';
import ShowPokemon from './components/ShowPokemon';
import NewForm from './components/NewForm';
import EditForm from './components/EditForm';

function App() {

  const [pokemon, setPokemon] = useState([])

  const getAllPokemon = () => {
    axios.get('http://localhost:8080/pokemon/')
    .then(resp => {
      setPokemon(resp.data)
      console.log(resp.data)
    })
  }

  useEffect(() => {
    getAllPokemon()
  }, [])

  return (
    <div className="App">
      <h1>Pokemon</h1>
      <main>
        <Routes>
          <Route path="/" element={<Pokedex pokemon={pokemon}/>} />
          <Route path="/:id" element={<ShowPokemon />}/>
          <Route path="/new" element={<NewForm />}/>
          <Route path="/:id/edit" element={<EditForm />}/>
        </Routes>
      </main>
    </div>
  );
}

export default App;
