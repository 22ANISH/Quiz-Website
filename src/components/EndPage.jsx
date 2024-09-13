import React from 'react';

const EndPage = ({ score, data, reset, reattempt }) => (
  <div className="text-center">
    <h2 className="text-2xl font-semibold">You Scored {score} out of {data.length * data[0].points}</h2>
    <div className="mt-6 flex justify-center space-x-4">
      <button 
        onClick={reset} 
        className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
        Quiz Over
      </button>
      <button 
        onClick={reattempt} 
        className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600">
        Reattempt
      </button>
    </div>
  </div>
);

export default EndPage;
