import React, { Component } from "react";

class Navbar extends Component {
    render(){
        return (
            <div className="Navbar">
                <ul className="Container">
                    <li className="ListContainer">
                        <img src="https://s3.eu-central-1.amazonaws.com/napptilus/level-test/imgs/logo-umpa-loompa.png" className="Logo" alt="logo" /> 
                    </li>
                    <li className="ListContainer">
                        <h3 className="NavbarTitle">
                            Oompa Loompa's Crew
                        </h3>
                    </li>
                </ul>
            </div>
        );
    }
}

export default Navbar;