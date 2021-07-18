import React, { Component } from 'react'
import './Boxform.css'

class Boxform extends Component{
    constructor(props){
        super(props);
        this.state={
            width:'',
            height:'',
            backgroundColor:''
        };
        this.handleChange=this.handleChange.bind(this);
        this.handleSubmit=this.handleSubmit.bind(this);
    }
    handleChange(evt){
        this.setState({
            [evt.target.name]:evt.target.value
        });
    }
    handleSubmit(evt){
        evt.preventDefault();
        this.props.data(this.state);


    }
    render(){
        return(
            <div className="Boxform">
                <form className="Boxform-form" onSubmit={this.handleSubmit}>
                    <label htmlFor="width"> Width</label>
                    <input type="number" id="width" name="width" value={this.state.width} 
                    onChange={this.handleChange}></input>
                    <br />  
                    <br />
                    <label htmlFor="height"> Height</label>
                    <input type="number" id="height" name="height" value={this.state.height} 
                    onChange={this.handleChange}></input>
                    <br />
                    <br />
                    <label htmlFor="backgroundColor"> BackgroundColor</label>
                    <input type="text" id="backgroundColor" name="backgroundColor" 
                    value={this.state.backgroundColor} 
                    onChange={this.handleChange}></input>
                    <br />
                    <br />

                    <button>Submit</button>

                </form>

            </div>
        )
    }
}

export default Boxform;