import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Input } from './components/Input';
import './App.css';
import {GoogleGenerativeAI} from "@google/generative-ai";
import ResultDisplay from './components/ResultsDisplay';

function App() {
  const [response, setResponse] = useState('');
  const [searchParams, setSearchParams] = useState({ location: '', purpose: '' });

  const api_key = "apni api key daal";  
  const genAI = new GoogleGenerativeAI(api_key);

  async function run() {
    // Use searchParams.location and searchParams.purpose in your prompt
    const prompt = `Generate a list of top four scholarships/grants/schemes available for student  in ${searchParams.location}. Include information on eligibility criteria, application deadlines,amount ,  and any specific requirements related to ${searchParams.purpose}. Provide direct links to the official webpages of each scholarship to facilitate easy access for prospective applicants. The scholarships should encompass various fields and academic levels, ensuring a diverse array of opportunities for students.`;
    console.log(prompt)
    const model = genAI.getGenerativeModel({ model: "gemini-pro" });
    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();
    setResponse(text);
  }

  const handleSearch = (location, purpose) => {
    setSearchParams({ location, purpose });
    run();
  };

  return (
    <>
      <Navbar />
      <div className='flex'>
      <Input onSearch={handleSearch} />
      <ResultDisplay response={response} />
      </div>
      
    </>
  );
}

export default App;
