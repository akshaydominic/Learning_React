import React,{Component} from 'react';
import './pokecard.css';

const imgurl="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/";
//{id: 4, name: 'Charmander', type: 'fire', base_experience: 62},
class Pokecard extends Component{
    render(){
        let realImg = `${imgurl}${this.props.id}.png`;
        return(
            <div className="Pokecard">
                <h1 className="Pokecard-title">{this.props.name}</h1>
                
                <img src={realImg} alt={this.props.name}/>
                <div className="Pokecard-data"> Type: {this.props.type}</div>
                <div className="Pokecard-data">Exp: {this.props.BaseExperience}</div>

            </div>
        );
    }
}

export default Pokecard;
