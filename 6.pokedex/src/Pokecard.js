import React,{Component} from 'react';
import './pokecard.css';

const imgurl="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/";
//{id: 4, name: 'Charmander', type: 'fire', base_experience: 62},
class Pokecard extends Component{
    render(){
        let realImg = `${imgurl}${this.props.id}.png`;
        return(
            <div className="Pokecard">
                <h3>{this.props.name}</h3>
                
                <img src={realImg}/>
                <p>{this.props.type}</p>
                <p>{this.props.BaseExperience}</p>

            </div>
        )
    }
}

export default Pokecard;
