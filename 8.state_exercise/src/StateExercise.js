import React, { Component } from 'react';

class StateExercise extends Component {
    constructor(props){
        super(props);
        this.generateRandom = this.generateRandom.bind(this);
        this.state = {
            num:1
        };
    }
    generateRandom(){
        let rand = Math.floor(Math.random()*10)+1;
        this.setState({num:rand});
    }
    render(){
        return(
            <div>
                <h1>Number is {this.state.num}</h1>
                {(this.state.num===7) ? <h2>You Win!</h2>
                    :<button onClick={this.generateRandom}>Random Number</button>
                }

            </div>
        )
    }
}

export default StateExercise