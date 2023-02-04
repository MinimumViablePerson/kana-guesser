import * as React from 'react';

import { useStore } from '../data/store';
import { WelcomeScreen } from './WelcomeScreen';
import { GameScreen } from './GameScreen';

export function Screen() {
  const char = useStore((store) => store.char);
  const status = useStore((store) => store.status);

  if (status === 'welcome' || char === undefined) return <WelcomeScreen />;
  return <GameScreen />;
}
