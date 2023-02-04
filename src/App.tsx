import * as React from 'react';
import { useEffect } from 'react';

import { HighestScore } from './components/HighestScore';
import { RightMenu } from './components/RightMenu';
import { Screen } from './components/Screen';
import { Modal } from './components/Modal';

import { useStore } from './data/store';
import { save } from './utils';
import './style.css';

export default function App() {
  const settings = useStore((store) => store.settings);
  const secondsLeft = useStore((store) => store.secondsLeft);
  const set = useStore((store) => store.set);
  const lose = useStore((store) => store.lose);
  const status = useStore((store) => store.status);
  const darkMode = useStore((store) => store.settings.darkMode);

  useEffect(() => {
    if (status !== 'playing') return;

    let timeoutId = setTimeout(
      () => set({ secondsLeft: secondsLeft - 1 }),
      1000
    );
    if (secondsLeft < 1) lose();

    return () => clearTimeout(timeoutId);
  }, [secondsLeft, status]);

  useEffect(() => {
    save('settings', settings);
  }, [settings]);

  return (
    <div className={`app${darkMode ? ' dark' : ''}`}>
      <div className="background"></div>
      <HighestScore />
      <RightMenu />
      <Screen />
      <Modal />
    </div>
  );
}

/*
Ideas:
- Improve character choosing algorithm
- Improve mobile phone experience (missing keyboard resizing problem)
- Presets (users can save their custom selections)
- Leaderboard
- Difficulty modes
*/
