import * as React from 'react';

import { useStore } from '../data/store';

export function WelcomeScreen() {
  const restart = useStore((store) => store.restart);
  const kana = useStore((store) => store.settings.kana);

  return (
    <span className="no-kana-selected">
      {kana.length > 0 ? (
        <button className="play-button" onClick={restart}>
          PLAY
        </button>
      ) : (
        <span>Please select at least one kana to practice.</span>
      )}
    </span>
  );
}
