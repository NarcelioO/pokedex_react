import { useEffect, useState } from "react"
import axios from "axios"
import { Pokemon } from "../../components/pokemon"
import './style.css'
export default function Home(){
    const [pokemon, setPokemon] = useState([])
    const getPokemonList = async () => {
         let pokemonArray = []
         for (let i= 1; i <=151;i++){
            pokemonArray.push(await getPokemonData(i))
         }
         console.log(pokemonArray)
         setPokemon(pokemonArray)
    }
    const getPokemonData = async (id) =>{
        const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`)
        return res
    }
    useEffect(()=>{
        getPokemonList()
    },[])
    return(
       <>
       <div className="container">
       {pokemon.map(p =>(
            <Pokemon pokemon={p.data}/>
       ))}
        </div>
       </>
    )
}