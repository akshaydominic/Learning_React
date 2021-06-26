import React, { Component } from 'react';
import Die from './Die';

class Rolldice extends Component{
    constructor(props){
        super(props);
        this.rolling = this.rolling.bind(this);
        this.state ={
            dice1:"fas fa-dice-one",
            dice2:"fas fa-dice-three"
        };

    }
    static defaultProps = {
        dice :[
            "fas fa-dice-one",
            "fas fa-dice-two",
            "fas fa-dice-three",
            "fas fa-dice-four",
            "fas fa-dice-five",
            "fas fa-dice-six"     
        ]
    };
    rolling(){
        let rand1 = Math.floor(Math.random()*5)+1;
        let rand2 = Math.floor(Math.random()*5)+1;
        this.setState({dice1:this.props.dice[rand1]});
        this.setState({dice2:this.props.dice[rand2]});

    }

    render(){
        return(
            <div>
                <Die id={this.dice1}/>
                <Die id={this.dice2}/>
                <button onClick={this.rolling}> Roll Dice</button>
                
            </div>
        )
    }
}

export default Rolldice