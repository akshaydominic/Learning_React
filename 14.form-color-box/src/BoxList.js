import React, { Component } from 'react'
import Boxform from './Boxform';
import Box from './Box';
 
class BoxList extends Component{
    constructor(props){
        super(props);
        this.state={
            width:'',
            height:'',
            backgroundColor:''
        }
        this.handleData =this.handleData.bind(this);


    }
    handleData(obj){
        this.setState={
            width:obj.width,
            height:obj.height,
            backgroundColor:obj.backgroundColor
        };
    }
    render(){
        return(
            <div>
                <Boxform data={this.handleData} />
                <Box width={this.state.width} height={this.state.height} 
                backgroundColor={this.state.backgroundColor}/>

            </div>
        )
    }
}

export default BoxList;