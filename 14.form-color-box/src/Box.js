import React, { Component } from 'react'

class Box extends Component{
    render(){
        let style={
            backgroundColor:this.props.backgroundColor,
            width:this.props.width,
            height:this.props.height
        }
        return(
            <div style={style}></div>
        )
    }
}

export default Box;