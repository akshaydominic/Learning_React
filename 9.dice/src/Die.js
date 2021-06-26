import React, { Component } from 'react'
import './die.css'

class Die extends Component{
    render(){
        return(
            <div className="die">
                <div className="die-single"><i class={this.props.id}></i></div>
            </div>
        )
    }
}

export default Die