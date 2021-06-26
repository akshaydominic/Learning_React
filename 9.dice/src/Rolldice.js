import React, { Component } from 'react';
import Die from './Die';

class Rolldice extends Component{
    constructor(props){
        super(props);
        this.rolling = this.rolling.bind(this);
        this.state ={
            dice1:"one",
            dice2:"two"
        };

    }
    static defaultProps = {
        dice :["one","two","three","four","five","six"]
    };
    rolling(){
        let rand1 = Math.floor(Math.random()*5);
        let rand2 = Math.floor(Math.random()*5);
        this.setState({dice1:this.props.dice[rand1]});
        this.setState({dice2:this.props.dice[rand2]});


    }

    render(){
        return(
            <div>
                <Die id={this.state.dice1}/>
                <Die id={this.state.dice2}/>
                <button onClick={this.rolling}> Roll Dice</button>
                
            </div>
        )
    }
}

export default Rolldice