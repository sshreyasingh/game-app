import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import{BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import Home from './pages/home';
import QuizGame from './pages/g1';
import WordScramble from './pages/g2';
import Hang from './pages/g3';

export default function App() {

  return (
    <>
     <Router>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/g1" element={<QuizGame/>} />
        <Route path="/g2" element={<WordScramble/>} />
        <Route path="/g3" element={<Hang/>}/>
      </Routes>
     </Router>
    </>
  );
}


