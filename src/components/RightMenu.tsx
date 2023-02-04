import * as React from 'react';
import { useStore } from '../data/store';

export function RightMenu() {
  const set = useStore((store) => store.set);
  const darkMode = useStore((store) => store.settings.darkMode);
  const updateSettings = useStore((store) => store.updateSettings);

  return (
    <div className="right-menu">
      <button
        className="darkmode-button"
        onClick={() => updateSettings({ darkMode: !darkMode })}
      >
        <span className="material-symbols-outlined">dark_mode</span>{' '}
      </button>
      <button
        className="settings-button"
        onClick={() => set({ modal: 'settings' })}
      >
        <span className="material-symbols-outlined">settings</span>
      </button>
    </div>
  );
}
