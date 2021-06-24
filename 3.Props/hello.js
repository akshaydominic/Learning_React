class Hello extends React.Component{
    render(){
        const name= this.props.to;
        return <h1>Hello World! {name}</h1>;
    }
}

