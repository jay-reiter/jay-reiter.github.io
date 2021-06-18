import React from "react";
import { Link } from "react-router-dom";
import './NavigationBar.css';


function NavigationBar() {

    return (
        <div className="NavigationBar">
            <div className="NavButton">
                <Link to="/index" className="NavLink">Home</Link>
            </div>
            <div className="NavButton">
                <Link to="/TicTacToe" className="NavLink">Play Tic-Tac-Toe</Link>
            </div>
            <div className="NavButton">
                <Link to="/Chess" className="NavLink">Play Chess</Link>
            </div>
        </div>
    );
}

export default NavigationBar;