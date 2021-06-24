class App extends React.Component{
    render(){
        return(
            <div >
                <h1>Lopping in JSX!</h1>
                <PropsExer name="akshay" programming={["java","javascript"
                ,"C++"]}/>

            </div>
        )
    }
}

ReactDOM.render(<App/>,document.getElementById("root"));