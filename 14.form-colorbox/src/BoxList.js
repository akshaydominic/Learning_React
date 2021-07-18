import React, { Component } from 'react';
import Box from './Box';
import BoxForm from './BoxForm';
import uuid from 'uuid';

class BoxList extends Component{
    constructor(props){
        super(props);
        this.state={
            boxes:[]
        }
        this.input = this.input.bind(this);
    }
    input(box){
        this.setState({
            boxes:[...this.state.boxes,box]
        });
    }
    render(){
        const boxes = this.state.boxes.map(box=>(
            <Box width={box.width} height={box.height} color={box.color}/>
        ));
        return(
            <div>
                <h1>Color Box </h1>
                <BoxForm input={this.input}/>
                {boxes}
            </div>
        );
    }
}

export default BoxList;