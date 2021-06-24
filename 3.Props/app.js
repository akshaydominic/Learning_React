class App extends React.Component{
    render(){
        return(
            <div>
            <Hello to="akshay"/>
            <Hello to="arul"/>
            <Hello />
            </div>
        )
    }
}

ReactDOM.render(<App/>,document.getElementById("root"));