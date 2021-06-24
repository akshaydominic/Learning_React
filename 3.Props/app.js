class App extends React.Component{
    render(){
        return(
            <div >
                <h1>Slot Machines!</h1>
                <PropsExerv2 one="y" two="y" three="y"/>
                <PropsExerv2 one="x" two="y" three="z"/>
                <PropsExerv2 one="x" two="x" three="x"/>
                <PropsExerv2 one="😎" two="😎" three="😎"/>

            </div>
        )
    }
}

ReactDOM.render(<App/>,document.getElementById("root"));