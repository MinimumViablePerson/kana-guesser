import * as React from 'react';
import { useStore } from '../data/store';

export function TimeLeft() {
  const secondsLeft = useStore((store) => store.secondsLeft);
  return <span>Time left: {secondsLeft}</span>;
}
