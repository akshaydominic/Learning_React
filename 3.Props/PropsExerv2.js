class PropsExerv2 extends React.Component{
    render(){
        const {one,two,three} = this.props;
        let winner = (one===two) && (one ===three);
        return(
            <div>
                <h2> {one}{two}{three}</h2>
                <h3>{(winner) ? "WON":"LOST"}</h3>
            </div>
        )
    }
}