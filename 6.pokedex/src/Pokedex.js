import React, { Component } from 'react';
import './Pokedex.css';
import Pokecard from './Pokecard';

class Pokedex extends Component{

    render(){
        
        return(
            <div className="Pokedex">
                <h1>Pokedex!!</h1>
                <p>Total exp : {this.props.exp}</p>
                <p>{this.props.isWinner ? 'Winner' : 'Loser'}</p>
                <div className="Pokedex-cards">
                    {this.props.pokemon.map((p)=>(
                        <Pokecard id={p.id} name={p.name} type={p.type} BaseExperience={p.base_experience} />
                    ))}
                </div>
            </div>
        )
    }
}

export default Pokedex;