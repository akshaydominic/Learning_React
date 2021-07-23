import React, { Component } from 'react';
import './Sidebar.css'
class Sidebar extends Component{
    render(){
        return(
            <div className ="Sidebar">

                <i class="fas fa-cogs" id="element"></i>
                <button><i class="fab fa-elementor" id="first"><div className="Sidebar-inner">Events</div></i></button>
                <button><i class="fas fa-users" ><div className="Sidebar-inner">Teams</div></i></button>
                <button><i class="fas fa-chart-line" id="last"><div className="Sidebar-inner">Analytics</div></i></button>
                <button><i class="far fa-envelope-open" id="last"><div className="Sidebar-inner">Results</div></i></button>
                

                
            </div>
        )
    }
}

export default Sidebar;