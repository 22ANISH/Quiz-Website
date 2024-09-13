import React, { useState } from 'react';
import { data } from '../assets/data';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import StartPage from './StartPage';
import QuizPage from './QuizPage';
import EndPage from './EndPage';

const Quiz = () => {
  const [currentPage, setCurrentPage] = useState('start'); // 'start', 'quiz', or 'end'
  const [index, setIndex] = useState(0);
  const [question, setQuestion] = useState(data[index]);
  const [lock, setLock] = useState(false);
  const [score, setScore] = useState(0);
  const [optionStates, setOptionStates] = useState([null, null, null, null]); // Track state for each option

  const startQuiz = () => {
    setCurrentPage('quiz');
  };

  const checkAns = (ans) => {
    if (!lock) {
      const correctOption = question.correctOption;
      const newOptionStates = [...optionStates];
      const selectedAnswer = question.options[ans - 1];

      if (correctOption === selectedAnswer) {
        newOptionStates[ans - 1] = 'correct';
        setScore(prev => prev + question.points);
      } else {
        newOptionStates[ans - 1] = 'wrong';
        newOptionStates[question.options.indexOf(correctOption)] = 'correct';
      }
      setOptionStates(newOptionStates);
      setLock(true);
    }
  };

  const next = () => {
    if (!lock) {
      toast.error("Please select an answer before moving to the next question.");
      return;
    }
    if (index === data.length - 1) {
      setCurrentPage('end');
    } else {
      setIndex(prevIndex => prevIndex + 1);
      setQuestion(data[index + 1]);
      setLock(false);
      setOptionStates([null, null, null, null]); // Reset option states
    }
  };

  const reset = () => {
    setIndex(0);
    setQuestion(data[0]);
    setScore(0);
    setLock(false);
    setOptionStates([null, null, null, null]); // Reset option states
    setCurrentPage('start');
  };

  const reattempt = () => {
    reset(); // Reset quiz state and return to the start page
    startQuiz(); // Restart the quiz
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-black">
      <div className="w-full max-w-md p-8 bg-white shadow-lg rounded-lg">
        {currentPage === 'start' && <StartPage startQuiz={startQuiz} />}
        {currentPage === 'quiz' && (
          <QuizPage 
            question={question} 
            optionStates={optionStates} 
            checkAns={checkAns} 
            next={next} 
            index={index} 
            data={data} 
          />
        )}
        {currentPage === 'end' && (
          <EndPage 
            score={score} 
            data={data} 
            reset={reset} 
            reattempt={reattempt} 
          />
        )}
      </div>
      <ToastContainer />
    </div>
  );
};

export default Quiz;
