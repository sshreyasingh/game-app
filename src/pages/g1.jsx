import React from 'react'
import Quiz from '../quiz/quizmain';
import '../quiz/quizindex.css';

function QuizGame() {
   return (
    <>
    
      <div className='App'>
        <h1 className="heading_app">Marvel Maniac Quiz</h1>
        <Quiz/>
      </div>
    </>
  );
}

export default QuizGame