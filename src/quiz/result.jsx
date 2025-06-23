import React from 'react';

function Result({score,total}){
    return(
        <div className='result'>
            <h2 id="rh">Quiz completed!</h2>
            <p id="rp">Your quiz score: {score}/{total}</p>
            <button id="bf" onClick={()=> window.location.reload()}>
                RESTART QUIZ
            </button>
        </div>
    )
}

export default Result;