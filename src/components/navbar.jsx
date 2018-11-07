import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';
import './navbar.css';

class Navbar extends Component{
    render(){
        return(
            <div>
                <header>
                    <nav className="navbar navbar-expand-lg navbar-light nav-bg-custom fixed-top">
                        <div className="container">
                            <NavLink className="navbar-brand" to="/">FABRICIO CALVET-RECKTENWALL</NavLink>

                            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                                aria-controls="#navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>

                            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                <ul className="navbar-nav mr-auto">
                                    <li className="nav-item">
                                        <NavLink className="nav-link" to="../projects">Projects</NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink className="nav-link" to="../about">About</NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink className="nav-link" to="../book">Book A Session</NavLink>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </nav>
            </header>
        </div>
        );     
    }
}
export default Navbar;