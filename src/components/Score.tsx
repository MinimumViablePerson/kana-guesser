import * as React from 'react';
import { useStore } from '../data/store';

export function Score() {
  const points = useStore((store) => store.points);
  return <span>Score: {points}</span>;
}
