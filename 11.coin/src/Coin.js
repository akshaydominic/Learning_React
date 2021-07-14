import React, { Component } from 'react'
import './Coin.css'
class Coin extends Component{
    render(){
        return(
            <div className='Coin'>
                <h1>Let's Flip a Coin</h1>
                <img src={this.props.imgName}></img>
            </div>
        );
    }
}

export default Coin