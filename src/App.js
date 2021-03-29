import React from 'react';

// Components
import Congrats from './components/congrats/congrats';
import GuessedWords from './components/guessWords/guessedWords';
import Input from './components/input/input';

const App = () => {
  const success = false;
  const secretWord = 'party';
  const guessedWords = [];

  return (
    <div data-test="app-component" className="container">
      <h1>Jotto</h1>
      <Congrats success={success} />
      <Input success={success} secreteWord={secretWord} />
      <GuessedWords
        guessedWords={[
          {
            guessedWord: 'Train',
            letterMatchCount: 3,
          },
        ]}
      />
    </div>
  );
};

export default App;
