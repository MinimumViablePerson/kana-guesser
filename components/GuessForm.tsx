import * as React from 'react';
import { useEffect, useRef } from 'react';
import { useStore } from '../data/store';

export function GuessForm() {
  const char = useStore((store) => store.char);
  const win = useStore((store) => store.win);
  const lose = useStore((store) => store.lose);
  const status = useStore((store) => store.status);

  function handleSubmit(event) {
    event.preventDefault();

    if (status !== 'playing') return;

    const guessed = [char.symbol, char.spelling].includes(
      event.target.guess.value.toLowerCase()
    );

    if (guessed) win();
    else lose();
    event.target.reset();
  }

  useEffect(() => {
    if (status === 'playing') {
      const guessInput =
        document.querySelector<HTMLInputElement>('.guess-form__input');
      guessInput?.focus();
    }
  }, [status]);

  return (
    <form
      className="guess-form"
      style={{ transform: status !== 'playing' ? 'scale(0)' : '' }}
      onSubmit={handleSubmit}
    >
      <input
        className="guess-form__input"
        type="text"
        name="guess"
        required
        autoComplete="off"
        autoCorrect="off"
        maxLength={3}
        disabled={status !== 'playing'}
      />
      <button className="guess-form__submit-button">
        <span className="material-symbols-outlined">send</span>
      </button>
    </form>
  );
}
