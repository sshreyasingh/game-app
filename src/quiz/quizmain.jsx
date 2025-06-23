import React,{useState} from 'react';
import ques from './data';
import Result from './result';

function Quiz(){
    const[current,setCurrent]=useState(0);
    const[score,setScore]=useState(0);
    const[res,setRes]=useState(false);

    const handle=(option)=>{
        if(option===ques[current].ans){
            setScore(score+1);
        }
        const next=current+1;
        if(next<ques.length){
            setCurrent(next);
        }else{
            setRes(true);
        }
    };
    return (
        
        <div className="quiz-container">
            {res?(
            <Result score={score} total={ques.length}/>
            ):(
                <>
                <h2 id="qf">Question {current+1} of {ques.length}</h2>
                <p id="cf">{ques[current].question}</p>
                {ques[current].options.map((opt,idx)=>(
                    <button key={idx} onClick={()=> handle(opt)}>{opt}</button>
                ))}
                </>
            
            )}

        
        </div>
    );
}

export default Quiz;