import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [quotes, setQuotes] = useState([]);
  const [randomQuote, setRandomQuote] = useState({});

  useEffect(() => {
    fetch('https://type.fit/api/quotes')
      .then(response => response.json())
      .then(data => setQuotes(data));
  }, []);

  useEffect(() => {
    if (quotes.length > 0) {
      const randomIndex = Math.floor(Math.random() * quotes.length);
      setRandomQuote(quotes[randomIndex]);
    }
  }, [quotes]);

  function handleNewQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    setRandomQuote(quotes[randomIndex]);
  }

  return (
    <div className="container">
      <div className="quote-box">
        <div className="quote-text">
          <p>"{randomQuote.text}"</p>
        </div>
        <div className="quote-author">
          <p>- {randomQuote.author || 'Unknown'}</p>
        </div>
        <button onClick={handleNewQuote}>New Quote</button>
      </div>
    </div>
  );
}

export default App;
