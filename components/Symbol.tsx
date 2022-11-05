import * as React from 'react';
import { useStore } from '../data/store';

export function Symbol() {
  const char = useStore((store) => store.char);
  const restart = useStore((store) => store.restart);

  return <span className="symbol">{char.symbol}</span>;
}
