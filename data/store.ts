import create from 'zustand';
import { SetState } from 'zustand/vanilla';
import { getRandom, load, save } from '../utils';
import { hiragana, katakana } from './kana';

const KANA = [...hiragana, ...katakana];
const SECONDS_TO_GUESS = 5;

const SETTINGS = load('settings', {
  secondsToGuess: SECONDS_TO_GUESS,
  kana: KANA,
  darkMode: false,
});

type Settings = {
  secondsToGuess: number;
  kana: Char[];
  darkMode: boolean;
};

type Char = {
  symbol: string;
  spelling: string;
};

type Status = 'lost' | 'playing' | 'paused' | 'welcome';

type Store = {
  settings: Settings;
  char: Char;
  points: number;
  secondsLeft: number;
  highestScore: number;
  modal: string;
  status: Status;
  set: SetState<Store>;
  win: () => void;
  lose: () => void;
  restart: () => void;
  updateSettings: (newSettings: Partial<Settings>) => void;
};

export const useStore = create<Store>((set, get) => ({
  settings: SETTINGS,
  char: getRandom(SETTINGS.kana),
  points: 0,
  secondsLeft: SETTINGS.secondsToGuess,
  highestScore: load('highestScore', 0),
  modal: '',
  status: 'welcome',
  set,
  restart() {
    const { settings } = get();
    set({
      secondsLeft: settings.secondsToGuess,
      char: getRandom(settings.kana),
      status: 'playing',
      modal: '',
    });
  },
  lose() {
    const { points, highestScore, settings } = get();
    if (points > highestScore) {
      save('highestScore', points);
      set({ highestScore: points });
    }
    set({
      points: 0,
      secondsLeft: settings.secondsToGuess,
      status: 'lost',
    });
  },
  win() {
    const { settings, points } = get();
    set({
      secondsLeft: settings.secondsToGuess,
      points: points + 1,
      char: getRandom(settings.kana),
    });
  },
  updateSettings(newSettings) {
    set({ settings: { ...get().settings, ...newSettings } });
  },
}));
