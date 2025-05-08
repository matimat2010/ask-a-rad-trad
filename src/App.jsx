import { useState } from 'react';
import './index.css';

const responses = [
  "This is what happens when you abandon the Latin Mass.",
  "Vatican II opened the door to this chaos.",
  "Communism has infiltrated the Church since the 20th century.",
  "Modernism is the synthesis of all heresies. Pius X warned us.",
  "The smoke of Satan entered the Church — and nobody noticed."
];

function App() {
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = () => {
    if (question.trim()) {
      const randomAnswer = responses[Math.floor(Math.random() * responses.length)];
      setAnswer(randomAnswer);
      setSubmitted(true);
    }
  };

  const handleReset = () => {
    setQuestion('');
    setAnswer('');
    setSubmitted(false);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="w-full max-w-[220px] bg-white shadow-md rounded-lg px-4 py-6 text-center space-y-4">
      <div className="flex justify-center">
  <div className="max-w-[300px] w-full">
    <img
      src={submitted ? '/taylor-sunglasses.png' : '/taylor-normal.png'}
      alt="Taylor Marshall"
      className="w-full h-auto rounded-full mx-auto"
    />
  </div>
</div>

  
        {!submitted ? (
          <>
            <h1 className="text-base font-bold">Ask a Rad Trad</h1>
            <input
              type="text"
              className="w-full border border-gray-300 rounded p-1 text-sm"
              placeholder="Your question..."
              value={question}
              onChange={(e) => setQuestion(e.target.value)}
            />
            <button
              onClick={handleSubmit}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white text-sm py-1 rounded"
            >
              Submit
            </button>
          </>
        ) : (
          <>
            <h2 className="text-sm font-semibold">Taylor replies:</h2>
            <p className="italic text-xs text-gray-700">“{answer}”</p>
            <button
              onClick={handleReset}
              className="w-full mt-1 bg-gray-800 hover:bg-gray-900 text-white text-sm py-1 rounded"
            >
              Ask Another
            </button>
          </>
        )}
      </div>
    </div>
  );
  
  
  
  
}

export default App;
