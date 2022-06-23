import {useState} from "react"
import axios from "axios"
import {useLocation} from 'react-router-dom'


const NewForm = props => {

    const [data, setData] = useState({
        name: "",
        image: "",
        pokemonType: ""
    })

    const location = useLocation()

    console.log(location);

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
        axios.post("http://localhost:8080/pokemon", data)
        .then(resp => {
            console.log(resp);
        })
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input onChange={handleChange} type="text" name="name" placeholder='name'/>
                <input onChange={handleChange} type="text" name="image" placeholder='image' />
                <input onChange={handleChange} type="text" name="pokemonType" placeholder='pokemonType'/>
                <input type="submit" value="Create Pokemon"/>
            </form>
        </div>
    )
}

export default NewForm