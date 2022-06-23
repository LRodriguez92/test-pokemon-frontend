import react from 'react'
import {useParams, Link} from 'react-router-dom'
import {useState, useEffect} from 'react'
import axios from 'axios'

const ShowPokemon = props => {

    const [pokemon, setPokemon] = useState([])

    const id = useParams().id

    const getPokemon = () => {
        axios.get(`http://localhost:8080/pokemon/${id}`)
        .then(resp => {
            setPokemon(resp.data)
            console.log(resp.data);
        })
    }

    const deletePokemon = () => {
        axios.delete(`http://localhost:8080/pokemon/${id}`)
        .then(resp => {
            console.log(resp);
        })
      }

    useEffect(() => {
        getPokemon()
    }, [])

    return (
        <div>
            <img src={pokemon.image} alt={pokemon.name}/>
            <h2>{pokemon.name}</h2>
            <h3>{pokemon.pokemonType}</h3>
            <button onClick={deletePokemon}>Delete</button>
            <Link to={`/${id}/edit`}>Edit Pokemon</Link>
        </div>
    )
}

export default ShowPokemon