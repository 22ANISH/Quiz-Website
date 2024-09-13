import React from 'react';

const QuizPage = ({ question, optionStates, checkAns, next, index, data }) => (
  <>
    <h1 className="text-3xl font-bold mb-6 text-center">Quiz App</h1>
    <hr className="mb-6" />
    <h2 className="text-xl font-semibold mb-4">{index + 1}. {question.question}</h2>
    <ul className="space-y-2 mb-6">
      {question.options.map((option, i) => (
        <li 
          key={i}
          onClick={() => checkAns(i + 1)} 
          className={`p-4 cursor-pointer rounded-md ${getOptionClass(optionStates[i])} ${optionStates[i] === null && 'hover:bg-gray-300'}`}>
          {option}
        </li>
      ))}
    </ul>
    <button 
      onClick={next} 
      className="w-full px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600">
      Next
    </button>
    <div className="mt-4 text-gray-500 text-center">{index + 1} of {data.length} questions</div>
  </>
);

const getOptionClass = (state) => {
  if (state === 'correct') return 'bg-green-500'; // Correct answer
  if (state === 'wrong') return 'bg-red-500'; // Wrong answer
  return 'bg-gray-200'; // Default color
};

export default QuizPage;
