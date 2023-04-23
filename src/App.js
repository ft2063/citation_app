import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [quotes, setQuotes] = useState([]);
  const [currentQuote, setCurrentQuote] = useState(null);

  useEffect(() => {
    fetch('https://type.fit/api/quotes')
      .then(response => response.json())
      .then(data => {
        setQuotes(data);
        setCurrentQuote(data[Math.floor(Math.random() * data.length)]);
      });
  }, []);

  const getRandomQuote = () => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    setCurrentQuote(quotes[randomIndex]);
  };

  const tweetQuote = () => {
    if (currentQuote) {
      const twitterUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(`"${currentQuote.text}" - ${currentQuote.author}`)}`;
      window.open(twitterUrl, '_blank');
    }
  };

  return (
    <div className="container">
      {currentQuote && (
        <div className="quote-box">
          <p className="quote-text">{currentQuote.text}</p>
          <p className="quote-author">- {currentQuote.author}</p>
          <div className="button-container">
            <button onClick={tweetQuote}>Tweet</button>
            <button onClick={getRandomQuote}>New Quote</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
