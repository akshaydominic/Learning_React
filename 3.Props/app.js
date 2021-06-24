class App extends React.Component{
    render(){
        return(
            <div >
                <h1>Slot Machines!</h1>
                <PropsExer one="x" two="x" three="x"/>
                <PropsExer one="y" two="y" three="y"/>
                <PropsExer one="x" two="y" three="z"/>
                <PropsExer one="😎" two="😎" three="😎"/>

            </div>
        )
    }
}

ReactDOM.render(<App/>,document.getElementById("root"));