import React from "react";
import { Link } from 'react-router-dom';
import { BrowserRouter as Router, Switch,Route } from "react-router-dom";

import './navigation.css';
import accountIcon from '../../assets/img/account.svg'
import Dashboard from "../Dashboard";
import Home from '../Home';

class Navigation extends React.Component {
    constructor() {
        super();
        this.state = {
            href: "#"
        };
    }
    
    render() {
        return (
            <nav>
                <div className="nav__container">
                    <button className="logo nav__logo"><b>News</b>Room</button>
                    <ul id="nav__menu">
                        <li className="nav__active-item"> <Link  to="/">Home</Link></li>
                        <li><Link  to="/dashboard">Dashboard</Link></li>
                    </ul>
                    <a id="nav__account-btn" href="./editor-dashboard.html">
                        <img src={accountIcon} alt="account button" />
                    </a>

                </div>
            </nav>
            
           
        );
    }
}

export default Navigation;
