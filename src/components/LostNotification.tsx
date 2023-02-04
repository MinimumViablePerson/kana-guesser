import * as React from 'react';
import { useEffect } from 'react';
import { useStore } from '../data/store';

export function LostNotification() {
  const status = useStore((store) => store.status);
  const restart = useStore((store) => store.restart);
  const char = useStore((store) => store.char);

  useEffect(() => {
    if (status === 'lost') {
      const restartButton = document.querySelector<HTMLButtonElement>(
        '.lost-notification__restart-button'
      );
      restartButton?.focus({ preventScroll: true });
    }
  }, [status]);

  if (status !== 'lost' || char === undefined) return null;

  return (
    <div className="lost-notification">
      <p>Ooh, bad luck!</p>
      <p>The character was: {char.spelling}</p>
      <button className="lost-notification__restart-button" onClick={restart}>
        RESTART?
      </button>
    </div>
  );
}
