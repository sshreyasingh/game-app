import React from 'react';
import {Link} from 'react-router-dom';
import './home.css';

export default function Home(){
    return(
        
        <div className="home-container">
            <h1 className="home-title">GAMING UNIVERSE</h1>
            <p className="home-subtitle">Choose a game to play :</p>
            <div className="button-group">
                <Link to="/g1">
                <button className="game-button">
                    Marvel Quiz</button></Link>

                 <Link to="/g2">
                <button className="game-button">
                   Word Scramble</button></Link>
                
                <Link to="/g3">
                <button className="game-button">
                   Hangman Game</button></Link>
            </div>
        </div>
    )
}

