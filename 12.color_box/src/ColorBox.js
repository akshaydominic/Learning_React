import React, { Component } from 'react'
import Color from './Color'
import './ColorBox.css'
class ColorBox extends Component{
    render(){
        return(
            <div className="ColorBox">
                <Color />
                <Color />

            </div>
        )
    }
}

export default ColorBox