import * as React from 'react';
import { useStore } from '../data/store';

export function HighestScore() {
  const highestScore = useStore((store) => store.highestScore);
  return <span className="highest-score">Highest score: {highestScore}</span>;
}
