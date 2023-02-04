import * as React from 'react';
import { GuessForm } from './GuessForm';
import { LostNotification } from './LostNotification';
import { Symbol } from './Symbol';
import { Score } from './Score';
import { TimeLeft } from './TimeLeft';

export function GameScreen() {
  return (
    <React.Fragment>
      <TimeLeft />
      <Score />
      <Symbol />
      <GuessForm />
      <LostNotification />
    </React.Fragment>
  );
}
