import Markdown from 'react-markdown';
import React from 'react';

function ResultDisplay({ response }) {
  return (
    <div className="result-container bg-gray-100 p-4 border border-gray-200 text-black w-full rounded-lg shadow md:p-8 dark:bg-white-400 dark:border-gray-700">
      
      <Markdown>{response}</Markdown>
    </div>
  );
}

export default ResultDisplay;
