import {useState, useEffect} from "react"
import axios from "axios"
import {useParams} from 'react-router-dom'

const EditForm = props => {

    const [data, setData] = useState({
        name: "",
        image: "",
        pokemonType: ""
    })

    const getPokemonInfo = () => {
        axios.get(`http://localhost:8080/pokemon/${id}`)
        .then(resp => {
            setData(resp.data)
            console.log(resp.data);
        })
    }

    useEffect(() => {
        getPokemonInfo()
    }, [])

    const id = useParams().id

    const handleChange = (e) => {
        setData({
            // "..." is called the spread operator. Doing ...data ensures
            // the state does not get completely overwritten by maintaining
            // its previous data
            ...data, 
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        axios.put(`http://localhost:8080/pokemon/${id}`, data)
        .then(resp => {
            console.log(resp);
        })
    }

    return (
        <form onSubmit={handleSubmit}>
            <input onChange={handleChange} value={data.name} type="text" name="name" placeholder='name'/>
            <input onChange={handleChange} value={data.image} type="text" name="image" placeholder='image' />
            <input onChange={handleChange} value={data.pokemonType} type="text" name="pokemonType" placeholder='pokemonType'/>
            <input type="submit" value="Update Pokemon"/>
        </form>
    )
}

export default EditForm