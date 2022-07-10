import './style.css'
import {Link} from 'react-router-dom'

export  function Pokemon({pokemon}){
    
    return(
            
            <div className="card">
                    <div className='card_img'> 
                        <Link to={`/pokemon/${pokemon.id}`}>
                            <img src={pokemon.sprites.front_default} style={{width:110, height:110}} alt="" />  
                        </Link>
                    </div>
                <div className='text_pokemon'>
                   
                        
                            <div className="id">N°{pokemon.id}</div>
                            <Link to={`/pokemon/${pokemon.name}`}  style={{ textDecoration: 'none'}}>
                                <div className='name'>{pokemon.name}</div>
                            </Link>
                            <div className='type'>
                                {pokemon.types.map(t =>(
                                    <div className={`${t.type.name} card_type`}>
                                        {t.type.name.toUpperCase()}
                                    </div>
                                ))}
                                
                                
                            </div>
                            
                            
                        
                </div>
            </div>
       
    )
}