import React,{Component} from 'react';
import './pokecard.css';

// const imgurl="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/";
const imgurl="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/";
let padToThree = (number)=>{
    return (number<=999) ? `00${number}`.slice(-3) : number;
}

class Pokecard extends Component{
    render(){
        let realImg = `${imgurl}${padToThree(this.props.id)}.png`;
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
