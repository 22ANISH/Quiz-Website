import React from 'react';

const StartPage = ({ startQuiz }) => {
  return (
    <div className="text-center">
      <h1 className="text-3xl font-bold mb-6">Welcome to the Quiz</h1>
      <p className="text-lg mb-6">Test your knowledge with our fun quiz. Click below to start!</p>
      <button 
        onClick={startQuiz} 
        className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition">
        Start Quiz
      </button>
    </div>
  );
};

export default StartPage;
