class App extends React.Component{
    render(){
        return(
            <div>
            <Hello/>
            <p>from the app Component </p>
            </div>
        )
    }
}

ReactDOM.render(<App/>,document.getElementById("root"));