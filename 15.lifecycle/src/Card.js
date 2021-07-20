import React, { Component } from 'react';
import axios from 'axios'
class Card extends Component{
    constructor(props){
        super(props);
        this.state={
            deckId:'',
            remaining:'',
            img:'',
            isGameOver:false
        };
        this.handleClick = this.handleClick.bind(this);
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
    handleClick(){
        if(this.state.remaining > 0){
            let calldeck = async ()=>{
                const response = await axios.get(`https://deckofcardsapi.com/api/deck/${this.state.deckId}/draw/`);
                this.setState(currentState=>({
                    remaining:currentState.remaining-1
                }));
                this.setState({
                    img:response.data.cards[0].image
                })
            }
            calldeck();
        }else{
            this.setState({isGameOver:true});
        }
    }
    render(){
        return(
            <div>
                <h1>{`DeckId: ${this.state.deckId} Remaining: ${this.state.remaining}`}</h1>
                <h2>{this.state.img}</h2>
                {!this.state.isGameOver && <button onClick={this.handleClick}>Get a Card</button>}
                <img src={this.state.img}/>

            </div>
        )
    }
}

export default Card;