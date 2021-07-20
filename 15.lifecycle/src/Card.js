import React, { Component } from 'react';
import axios from 'axios'
class Card extends Component{
    constructor(props){
        super(props);
        this.state={
            deckId:'',
            remaining:''
        };
    }
    //data.cards.image
    //...suit,value
    componentDidMount(){
        let callDeck = async ()=>{
            const response = await axios.get("https://deckofcardsapi.com/api/deck/new/shuffle");
            this.setState({
                deckId:response.data.deck_id,
                remaining:response.data.remaining
            });
        }
        callDeck();
    }
    componentDidUpdate(){
        let calldeck = async ()=>{
            const response = await axios.get(`https://deckofcardsapi.com/api/deck/${this.state.deckId}/draw/`);
            this.setState(currentState=>({
                remaining:currentState.remaining-1
            }));
            console.log(response);
        }
        calldeck();
    }
    render(){
        return(
            <div>
                <h1>{`DeckId: ${this.state.deckId} Remaining: ${this.state.remaining}`}</h1>

            </div>
        )
    }
}

export default Card;