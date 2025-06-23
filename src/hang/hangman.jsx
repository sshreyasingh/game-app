import React, {useEffect,useState} from 'react';
import './hangman.css';

const marvel=["ironman","spiderman","scarlettwitch","vision","shuri","gamora","nebula","falcon","blackwidow","captainamerica","thor","quicksilver"];
//const marvel=["sanjay","rohan","shreya","harshita","siya","ginni","rudra","bitto","simpi","bintu","bobby"];
export default function Hangman(){
    const [word,setWord]=useState("");
    const [correct,setCorrect]=useState([]);
    const [wrong,setWrong]=useState([]);
    const [input,setInput]=useState("");
    const [over,setOver]=useState(false);

    useEffect(()=>{
        const random=marvel[Math.floor(Math.random()*marvel.length)];
        setWord(random.toLowerCase());
        setCorrect([]);
        setWrong([]);
        setOver(false);
    },[]);

    const handle=()=>{

        if(!input || over) return;

        const letter=input.toLowerCase();
        if(word.includes(letter)){
            if(!correct.includes(letter)){
                setCorrect([...correct,letter]);
            }
        } else{
            if(!wrong.includes(letter)){
                const newWrong=[...wrong,letter];
                setWrong(newWrong);
                if(newWrong.length>=6){
                    setOver(true);
                }
            }
        }
        setInput("");
    }
    const displayed=()=>
        word.split("").map((l)=>(correct.includes(l) ? l:"_")).join(" ");
    const won=word.split("").every((l)=>correct.includes(l));
    return (
        <div className='hang-cont'>
            <h1 className='ma'>Guess the character:</h1>
            <h2>{displayed()}</h2>
            {!over && !won &&(
                <>
                <input className='blank'
                maxLangth='1'
                value={input}
                onChange={(e)=>setInput(e.target.value)}
                placeholder='Enter a letter'
                />
                <button onClick={handle}>GUESS</button>
                </>
            )}
            <p className='wr'>Wrong guesses: {wrong.join(", ")}</p>
            <p className='wr'>Attempts left: {6-wrong.length}</p>
            {over && <h3 className='wrong'>Game over! The word was: {word}</h3>}
            {won && <h3 className='res'>You guessed it right</h3>}
            <button onClick={()=>window.location.reload()}>RESTART</button>
        </div>
    );
    }
