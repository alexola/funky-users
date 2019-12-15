import React, { Component } from "react";

class Navbar extends Component {
    render(){
        return (
            <div className="navbar">
                <ul className="container">
                    <li className="listContainer">
                        <img src="https://s3.eu-central-1.amazonaws.com/napptilus/level-test/imgs/logo-umpa-loompa.png" className="Logo" alt="logo" /> 
                    </li>
                    <li className="listContainer">
                        <h3 className="navbarTitle">
                            Oompa Loompa's Crew
                        </h3>
                    </li>
                </ul>
            </div>
        );
    }
}

export default Navbar;