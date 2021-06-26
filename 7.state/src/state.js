import React, { Component } from 'react';

class State extends Component{
    constructor(props){
        super(props);
        this.somefunction = this.somefunction.bind(this);
        this.state = {
            num:0
        };

    }
    somefunction(e){
        this.setState({num:10});
    }
    render(){
        return(
            <div>
                <h1>State</h1>
                <h2>{this.state.num}</h2>
                <button onClick={this.somefunction}></button>
            </div>
        )
    }
}

export default State