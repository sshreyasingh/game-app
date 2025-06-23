import React from 'react'
import Scramble from '../scramble/word';
import '../scramble/word.css';

function WordScramble() {
  return (
    <>
    <div className="Main-thing">
        <div className="head">Word Scramble Game</div>
        <Scramble/>
    </div>
    </>
  );
}

export default WordScramble