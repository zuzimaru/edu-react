import React, { useState } from 'react';

function JokeFetcher() {
  const [joke, setJoke] = useState('');

  function fetchJoke() {
    fetch('https://api.chucknorris.io/jokes/random')
      .then(response => {
        if (!response.ok) {
          throw new Error(response.status);
        }
        return response.json();
      })
      .then(data => setJoke(data.value))
      .catch(error => console.log(error));
  }

  return (
    <div>
      <button className="btn" onClick={fetchJoke}>Fetch jokes</button>
      <p className="joke-value">{joke}</p>
    </div>
  );
}

export default JokeFetcher;
