import React from 'react';
import { mount } from 'enzyme';

import App from './App';
import allUTL from './utils/allUTL';

const { findByTestAttribute } = allUTL.testingUTL;

const setup = (state = {}) => {
  // TODO: apply state

  const wrapper = mount(<App />);

  // add value to input box
  const inputBox = findByTestAttribute(wrapper, 'input-box');
  inputBox.simulate('change', { target: { value: 'train' } });

  // Simulate click on submit button
  const submitButton = findByTestAttribute(wrapper, 'submit-button');
  submitButton.simulate('click', { preventDefault() {} });

  return wrapper;
};

describe('No words guessed', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = setup({
      secretWord: 'Party',
      success: false,
      guessedWords: [],
    });
  });

  it('Creates GuessWords table with one row', () => {
    const GuessedWordsRows = findByTestAttribute(wrapper, 'guessed-word');
    expect(GuessedWordsRows).toHaveLength(1);
  });
});

describe('Some words guessed', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = setup({
      secretWord: 'Party',
      success: false,
      guessedWords: [{ guessedWord: 'agile', letterCount: 1 }],
    });
  });

  it('Adds row to guessedWords table', () => {
    const guessedWordNodes = findByTestAttribute(wrapper, 'guessed-word');
    expect(guessedWordNodes).toHaveLength(1);
  });
});

describe('Invalid word guessed', () => {
  it.todo('guessWords table does not get another row');
});

describe.skip('Guess secret word', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = setup({
      secretWord: 'party',
      success: false,
      guessedWords: [{ guessedWord: 'agile', letterMatchCount: 1 }],
    });

    // add value to input box
    const inputBox = findByTestAttribute(wrapper, 'input-box');
    const mockEvent = { target: { value: 'party' } };
    inputBox.simulate('change', mockEvent);

    // simulate click on submit button
    const submitButton = findByTestAttribute(wrapper, 'submit-button');
    submitButton.simulate('click', { preventDefault() {} });
  });
  it('adds row to guessedWords table', () => {
    const guessedWordNodes = findByTestAttribute(wrapper, 'guessed-word');
    expect(guessedWordNodes).toHaveLength(3);
  });
  it('displays congrats component', () => {
    const congrats = findByTestAttribute(wrapper, 'component-congrats');
    expect(congrats.text().length).toBeGreaterThan(0);
  });
  it('does not display input component contents', () => {
    const inputBox = findByTestAttribute(wrapper, 'input-box');
    expect(inputBox.exists()).toBe(false);

    const submitButton = findByTestAttribute(wrapper, 'submit-button');
    expect(submitButton.exists()).toBe(false);
  });
});
