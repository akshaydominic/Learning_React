import React, { Component } from 'react';
import './Color.css';

class Color extends Component{
    constructor(props){
        let randColor =Math.floor(Math.random()*13);
        super(props);
        this.state={
            color:this.props.colors[randColor]
        };
        this.changeColor = this.changeColor.bind(this);
    }
    static defaultProps={
        colors:[
            'AliceBlue',
            'AntiqueWhite',
            'Aqua',
            'Aquamarine',
            'Beige',
            'BlueViolet',
            'Brown',
            'CadetBlue',
            'Chartreuse',
            'Chocolate',
            'Coral',
            'CornflowerBlue',
            'Crimson',
            'DeepPink'
        ]
    }
    changeColor(){
        let randColor =Math.floor(Math.random()*13);
        this.setState(()=>({
            color:this.props.colors[randColor]
        }));
    }

    render(){
        const style={
            backgroundColor:this.state.color
        };
        return(
            <div className='Color' style={style} onClick={this.changeColor}>
                
            </div>
        )
    }
}

export default Color;