class PropsExer extends React.Component{
    render(){
        const {name,programming} = this.props;
        return(
            <div style={{fontSize:"30px"}}>
                <h2 className ="name">{name}</h2>
                <ul>
                    {programming.map(m=><li><h3>{m}</h3></li>)}
                
                </ul>
            </div>
        )
    }
}