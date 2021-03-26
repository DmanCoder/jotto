import React from 'react';

/*
 * Functional react component for congratulatory message
 * @function
 * @param {object} props - React props.
 * @returns {JSX.Element} - REndered component (or null if `success` prop is false)
 */
const Congrats = ({ success }) => {
  if (success) {
    return (
      <div data-test="congrats-component">
        <span data-test="congrats-message">
          Congratulations! You guessed the word!
        </span>
      </div>
    );
  } else {
    return <div data-test="congrats-component"></div>;
  }
};

export default Congrats;
