import React, { Component } from 'react'

class Box extends Component{
    render(){
        let style={
            width:`${this.props.width}em`,
            height:`${this.props.height}em`,
            backgroundColor:this.props.color
        }
        return(
            <div>
                <div style={style}>
                </div>
            <button>X</button>
            </div>
        )
    }
}

export default Box;