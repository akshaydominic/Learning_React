import React, { Component } from 'react'


class BoxForm extends Component{
    constructor(props){
        super(props);
        this.state={
            width:'',
            height:'',
            color:''
        }
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
        const newBoxlist = {...this.state};
        this.props.input(newBoxlist);
        this.setState({
            width:'',height:'',color:''
        });
    }
    render(){
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="width">Width</label>
                    <input type="text" id="width" name="width" onChange={this.handleChange}
                    value={this.state.width}/>
                    <label htmlFor="height">Height</label>
                    <input type="text" id="height" name="height" onChange={this.handleChange}
                    value={this.state.height} />
                    <label htmlFor="color">Background Color</label>
                    <input type="text" id="color" name="color" onChange={this.handleChange}
                    value={this.state.color} />
                    <button>Submit</button>
                </form>
            </div>
        )
    }
}

export default BoxForm;