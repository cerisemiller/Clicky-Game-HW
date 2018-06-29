import React from 'react';
import './Header.css'

const Header = props => (
        <div className="header">
            <div className="row App-header">
                <h2 className="col-md-4 text-center header-name">Around the World Clicky Game!</h2>
                <h5 className="col-md-8 text-center header-text">Click on an image to earn points, just don't click on the same one twice!</h5>
            </div>
            <div className="row game-score">
                <h3 className="col-md">Score: {props.score}</h3>
                <h3 className="col-md">Top Score: {props.topScore}</h3>
            </div>
        </div>
);
export default Header;