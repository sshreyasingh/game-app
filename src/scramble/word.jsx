import React from 'react'
import {useState,useEffect} from 'react';
import './word.css';

const words=["vision","hawkeye","quicksilver","ironman","spiderman","falcon","antman","thor","hulk","starlord","mantis","gamora"];

function Scrambling(word) {
    return word
    .split('')
    .sort(()=> Math.random()-0.5)
    .join('');

}

export default function WordScramble() {
    const[org,setOrg]=useState('');
    const[scr,setScr]=useState('');
    const[guess,setGuess]=useState('');
    const[msg,setMsg]=useState('');

    useEffect(()=>{
        generateWord();
    },[]);

    const generateWord=()=>{
        const randomw=words[Math.floor(Math.random()*words.length)];
        setOrg(randomw);
        setScr(Scrambling(randomw));
        setGuess('');
        setMsg('');
    };

    const handle=()=>{
        if(guess.toLowerCase()===org){
            setMsg('CORRECT!');
        }else{
            setMsg('WRONG!');
        }
    };

    return(
        <div className='game-container'>
            <h1 className='scr-head'>Guess the MCU character</h1>
            <p className='scr-word'><strong>Scrambled Word: </strong><br></br>{scr}</p>
            <input type="text"
            placeholder='Your guess...'
            value={guess}
            onChange={(e)=> setGuess(e.target.value)}
            className="game-input" />
            <button onClick={handle} className="check-button">CHECK</button>
            <p className="little">{msg}</p>
            <button onClick={generateWord} className="play">PLAY AGAIN</button>
        </div>
    );

}