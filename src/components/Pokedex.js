import react from 'react'
import {Link} from 'react-router-dom'

const Pokedex = props => {
    const allPokemon = props.pokemon.map(poke => {
        return (
            <div>
                <Link to={`/${poke._id}`}>
                    <img src={poke.image} alt={poke.name}/>
                    <h2>{poke.name}</h2>
                    <h3>{poke.pokemonType}</h3>
                </Link>
            </div>
        )
    })

    return (
        <div>
            <Link to="/new">Create a new Pokemon</Link>
            {allPokemon}
        </div>
    )
}

export default Pokedex