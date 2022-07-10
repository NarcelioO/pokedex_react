import axios from "axios"
import { useEffect, useState } from "react"
import {useParams} from 'react-router-dom'

export function PokemonPage(){
   
    const [pokemonDetails, setPokemonDetails] = useState()
    const [loading, setLoading] =useState(true)
    
    const {id} = useParams()
    const getPokemon = async (id) => {
        const details = await getPokemonData(id)
        setPokemonDetails (details.data)
        console.log(details.data)
        setLoading(false)
       
    }

    const getPokemonData = async(id) =>{
        const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`)
        return res
    }

    useEffect(()=>{
        getPokemon(id)
    },[])
    return(
        <>
                {loading ? (<p>loaging...</p>) : (
                    <>
                        <img src={pokemonDetails.sprites.front_default} alt="" />
                        <strong>#{pokemonDetails.id} {pokemonDetails.name.charAt(0).toUpperCase() + pokemonDetails.name.slice(1)}</strong>
                        {pokemonDetails.types.map(t => (
                                <div className={`${t.type.name}`}>
                                    {t.type.name.toUpperCase()}
                                </div>
                            
                        ))}    
                    </>
                )}
        </>
    )
}