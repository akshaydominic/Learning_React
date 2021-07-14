import React, { Component } from 'react'
import './CoinFlip.css'
import Coin from './Coin';
import Tails from './Tails.jpg'
import Heads from './heads.jpg'

class CoinFlip extends Component{
    static defaultProps={
        coin:[
            'tails','heads'
        ]
    }
    constructor(props){
        super(props);
        this.state={
            event:0,
            heads:0,
            tails:0,
            isTails:null
        }
        this.handleClick=this.handleClick.bind(this);
    }
    handleClick(){
        const number =Math.floor(Math.random()  * 2);
        if(this.props.coin[number]==='tails'){
            this.setState(currentState=>({
                tails:currentState.tails+1,
                isTails:currentState.isTails=true
            }));
        }else{

            this.setState(currentState=>({
                heads:currentState.heads+1,
                isTails:currentState.isTails=false
            }));
        }
        this.setState(currentState=>(
            {
               event:currentState.event+1,
            }
        ));
        
    }
    
    render(){
        return(
            <div className='CoinFlip'>
                <div><Coin imgName={this.state.isTails ? Tails : Heads} /></div>
                <button onClick={this.handleClick}>Flip Coin</button>
                <p>You have clicked {this.state.event} times You got Tails: {this.state.tails} Heads: {this.state.heads}</p>
            </div>
        );
    }
}


export default CoinFlip;