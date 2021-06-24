class App extends React.Component{
    render(){
        return(
            <div>
            <Hello to="akshay" from ="Colt"/>
            <Hello/>
            </div>
        )
    }
}

ReactDOM.render(<App/>,document.getElementById("root"));