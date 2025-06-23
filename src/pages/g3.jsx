import React from 'react';
import Hangman from '../hang/hangman';
import '../hang/hangman.css';

function Hang(){
    return(
        <div className="Hang">
            <h1 className='heading_hang'>Marvel Hangman</h1>
            <Hangman/>
        </div>
    )
}

export default Hang