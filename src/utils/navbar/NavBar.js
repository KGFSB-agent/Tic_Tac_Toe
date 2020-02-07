import React from 'react';
import './style.scss';
import {NavLink} from "react-router-dom";


export class NavBar extends React.Component {

    render() {
        return (
            <div className="navbar">
                <NavLink to="/" className="main">Главная</NavLink>
                <NavLink to="/game/" className="game">Игра</NavLink>
            </div>
        );
    }
}
