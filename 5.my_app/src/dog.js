import React,{Component} from 'react'
import './Dog.css'
import img from './dog1.png'
 
class Dog extends Component{
    render(){
        return(
            <div className="Dog">
                <h2>Dog!</h2>
                <div>
                    <img className="dog1" src={img} />
                </div>
            </div>
        )
    }
}

export default Dog;