class PropsExer extends React.Component{
    render(){
        const one = this.props.one;
        const two = this.props.two;
        const three = this.props.three;
        let result = (one,two,three)=>{
            if(one ===two && one ===three)
                return "Won !";
            else
                return "Lost !";
        }

        return(
            <div>
                <h2> {one}{two}{three}</h2>
                <h3>{result(one,two,three)}</h3>
            </div>
        )
    }
}