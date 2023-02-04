import * as React from 'react'
import { useStore } from '../data/store'

import { hiragana, katakana } from '../data/kana'
const KANA = [...hiragana, ...katakana]

export function Modal () {
  const modal = useStore(store => store.modal)
  const set = useStore(store => store.set)
  const settings = useStore(store => store.settings)
  const updateSettings = useStore(store => store.updateSettings)

  function updateKana () {
    const selectedKana = Array.from(
      document.querySelectorAll<HTMLInputElement>('.settings__char-input')
    )
      .filter(input => input.checked)
      .map(input => KANA.find(char => input.dataset.symbol === char.symbol)!)
    updateSettings({ kana: selectedKana })
  }

  const toggleKanaGroup: React.MouseEventHandler<HTMLButtonElement> = e => {
    const target = e.target as EventTarget & { parentElement: HTMLLIElement }
    const parentEl: HTMLLIElement = target.parentElement
    const inputEls = Array.from(parentEl.querySelectorAll('input'))
    if (inputEls.every(input => input.checked)) {
      inputEls.forEach(input => (input.checked = false))
    } else {
      inputEls.forEach(input => (input.checked = true))
    }
    updateKana()
  }

  let allHiraganaSelected = Array.from(
    document.querySelectorAll<HTMLInputElement>(
      '.settings__hiragana-char input'
    )
  ).every(input => input.checked)

  let allKatakanaSelected = Array.from(
    document.querySelectorAll<HTMLInputElement>(
      '.settings__katakana-char input'
    )
  ).every(input => input.checked)

  if (modal === 'settings')
    return (
      <div className='modal-wrapper'>
        <div className='modal settings'>
          <header className='modal__header'>
            <h2>Settings</h2>
            <button
              className='settings__close-button'
              onClick={() => set({ modal: '' })}
            >
              <span className='material-symbols-outlined'>close</span>
            </button>
          </header>
          <label>
            <p>Time per round: {settings.secondsToGuess}</p>
            <input
              className='settings__time-per-round-range'
              type='range'
              min='3'
              max='10'
              step='1'
              list='seconds-per-round'
              value={settings.secondsToGuess}
              onChange={e =>
                updateSettings({
                  secondsToGuess: e.target.valueAsNumber
                })
              }
            />
          </label>
          <section className='settings__kana-section'>
            <h2>
              Hiragana
              {allHiraganaSelected ? (
                <button
                  className='settings__kana-section__select-all-button'
                  onClick={() => {
                    const hiraganaInputs = Array.from(
                      document.querySelectorAll<HTMLInputElement>(
                        '.settings__hiragana-char input'
                      )
                    )
                    hiraganaInputs.forEach(input => (input.checked = false))
                    updateKana()
                  }}
                >
                  DESELECT ALL
                </button>
              ) : (
                <button
                  className='settings__kana-section__select-all-button'
                  onClick={() => {
                    const hiraganaInputs = Array.from(
                      document.querySelectorAll<HTMLInputElement>(
                        '.settings__hiragana-char input'
                      )
                    )
                    hiraganaInputs.forEach(input => (input.checked = true))
                    updateKana()
                  }}
                >
                  SELECT ALL
                </button>
              )}
            </h2>
            <ul className='settings__hiragana-list'>
              <li className='settings__hiragana-list__row'>
                <button
                  className='settings__group-button'
                  onClick={toggleKanaGroup}
                >
                  A
                </button>
                <span className='settings__hiragana-char'>
                  <input
                    type='checkbox'
                    className='settings__char-input'
                    data-symbol={hiragana[0].symbol}
                    defaultChecked={settings.kana.some(
                      char => char.symbol === hiragana[0].symbol
                    )}
                    onChange={updateKana}
                  />
                </span>
                <span className='settings__hiragana-char'>
                  <input
                    type='checkbox'
                    className='settings__char-input'
                    data-symbol={hiragana[1].symbol}
                    defaultChecked={settings.kana.some(
                      char => char.symbol === hiragana[1].symbol
                    )}
                    onChange={updateKana}
                  />
                </span>
                <span className='settings__hiragana-char'>
                  <input
                    type='checkbox'
                    className='settings__char-input'
                    data-symbol={hiragana[2].symbol}
                    defaultChecked={settings.kana.some(
                      char => char.symbol === hiragana[2].symbol
                    )}
                    onChange={updateKana}
                  />
                </span>
                <span className='settings__hiragana-char'>
                  <input
                    type='checkbox'
                    className='settings__char-input'
                    data-symbol={hiragana[3].symbol}
                    defaultChecked={settings.kana.some(
                      char => char.symbol === hiragana[3].symbol
                    )}
                    onChange={updateKana}
                  />
                </span>
                <span className='settings__hiragana-char'>
                  <input
                    type='checkbox'
                    className='settings__char-input'
                    data-symbol={hiragana[4].symbol}
                    defaultChecked={settings.kana.some(
                      char => char.symbol === hiragana[4].symbol
                    )}
                    onChange={updateKana}
                  />
                </span>
              </li>
              <li className='settings__hiragana-list__row'>
                <button
                  className='settings__group-button'
                  onClick={toggleKanaGroup}
                >
                  Ka
                </button>
                <span className='settings__hiragana-char'>
                  <input
                    type='checkbox'
                    className='settings__char-input'
                    data-symbol={hiragana[5].symbol}
                    defaultChecked={settings.kana.some(
                      char => char.symbol === hiragana[5].symbol
                    )}
                    onChange={updateKana}
                  />
                </span>
                <span className='settings__hiragana-char'>
                  <input
                    type='checkbox'
                    className='settings__char-input'
                    data-symbol={hiragana[6].symbol}
                    defaultChecked={settings.kana.some(
                      char => char.symbol === hiragana[6].symbol
                    )}
                    onChange={updateKana}
                  />
                </span>
                <span className='settings__hiragana-char'>
                  <input
                    type='checkbox'
                    className='settings__char-input'
                    data-symbol={hiragana[7].symbol}
                    defaultChecked={settings.kana.some(
                      char => char.symbol === hiragana[7].symbol
                    )}
                    onChange={updateKana}
                  />
                </span>
                <span className='settings__hiragana-char'>
                  <input
                    type='checkbox'
                    className='settings__char-input'
                    data-symbol={hiragana[8].symbol}
                    defaultChecked={settings.kana.some(
                      char => char.symbol === hiragana[8].symbol
                    )}
                    onChange={updateKana}
                  />
                </span>
                <span className='settings__hiragana-char'>
                  <input
                    type='checkbox'
                    className='settings__char-input'
                    data-symbol={hiragana[9].symbol}
                    defaultChecked={settings.kana.some(
                      char => char.symbol === hiragana[9].symbol
                    )}
                    onChange={updateKana}
                  />
                </span>
              </li>
              <li className='settings__hiragana-list__row'>
                <button
                  className='settings__group-button'
                  onClick={toggleKanaGroup}
                >
                  Ga
                </button>
                <span className='settings__hiragana-char'>
                  <input
                    type='checkbox'
                    className='settings__char-input'
                    data-symbol={hiragana[46].symbol}
                    defaultChecked={settings.kana.some(
                      char => char.symbol === hiragana[46].symbol
                    )}
                    onChange={updateKana}
                  />
                </span>
                <span className='settings__hiragana-char'>
                  <input
                    type='checkbox'
                    className='settings__char-input'
                    data-symbol={hiragana[47].symbol}
                    defaultChecked={settings.kana.some(
                      char => char.symbol === hiragana[47].symbol
                    )}
                    onChange={updateKana}
                  />
                </span>
                <span className='settings__hiragana-char'>
                  <input
                    type='checkbox'
                    className='settings__char-input'
                    data-symbol={hiragana[48].symbol}
                    defaultChecked={settings.kana.some(
                      char => char.symbol === hiragana[48].symbol
                    )}
                    onChange={updateKana}
                  />
                </span>
                <span className='settings__hiragana-char'>
                  <input
                    type='checkbox'
                    className='settings__char-input'
                    data-symbol={hiragana[49].symbol}
                    defaultChecked={settings.kana.some(
                      char => char.symbol === hiragana[49].symbol
                    )}
                    onChange={updateKana}
                  />
                </span>
                <span className='settings__hiragana-char'>
                  <input
                    type='checkbox'
                    className='settings__char-input'
                    data-symbol={hiragana[50].symbol}
                    defaultChecked={settings.kana.some(
                      char => char.symbol === hiragana[50].symbol
                    )}
                    onChange={updateKana}
                  />
                </span>
              </li>
              <li className='settings__hiragana-list__row'>
                <button
                  className='settings__group-button'
                  onClick={toggleKanaGroup}
                >
                  Sa
                </button>
                <span className='settings__hiragana-char'>
                  <input
                    type='checkbox'
                    className='settings__char-input'
                    data-symbol={hiragana[10].symbol}
                    defaultChecked={settings.kana.some(
                      char => char.symbol === hiragana[10].symbol
                    )}
                    onChange={updateKana}
                  />
                </span>
                <span className='settings__hiragana-char'>
                  <input
                    type='checkbox'
                    className='settings__char-input'
                    data-symbol={hiragana[11].symbol}
                    defaultChecked={settings.kana.some(
                      char => char.symbol === hiragana[11].symbol
                    )}
                    onChange={updateKana}
                  />
                </span>
                <span className='settings__hiragana-char'>
                  <input
                    type='checkbox'
                    className='settings__char-input'
                    data-symbol={hiragana[12].symbol}
                    defaultChecked={settings.kana.some(
                      char => char.symbol === hiragana[12].symbol
                    )}
                    onChange={updateKana}
                  />
                </span>
                <span className='settings__hiragana-char'>
                  <input
                    type='checkbox'
                    className='settings__char-input'
                    data-symbol={hiragana[13].symbol}
                    defaultChecked={settings.kana.some(
                      char => char.symbol === hiragana[13].symbol
                    )}
                    onChange={updateKana}
                  />
                </span>
                <span className='settings__hiragana-char'>
                  <input
                    type='checkbox'
                    className='settings__char-input'
                    data-symbol={hiragana[14].symbol}
                    defaultChecked={settings.kana.some(
                      char => char.symbol === hiragana[14].symbol
                    )}
                    onChange={updateKana}
                  />
                </span>
              </li>
              <li className='settings__hiragana-list__row'>
                <button
                  className='settings__group-button'
                  onClick={toggleKanaGroup}
                >
                  Za
                </button>
                <span className='settings__hiragana-char'>
                  <input
                    type='checkbox'
                    className='settings__char-input'
                    data-symbol={hiragana[51].symbol}
                    defaultChecked={settings.kana.some(
                      char => char.symbol === hiragana[51].symbol
                    )}
                    onChange={updateKana}
                  />
                </span>
                <span className='settings__hiragana-char'>
                  <input
                    type='checkbox'
                    className='settings__char-input'
                    data-symbol={hiragana[52].symbol}
                    defaultChecked={settings.kana.some(
                      char => char.symbol === hiragana[52].symbol
                    )}
                    onChange={updateKana}
                  />
                </span>
                <span className='settings__hiragana-char'>
                  <input
                    type='checkbox'
                    className='settings__char-input'
                    data-symbol={hiragana[53].symbol}
                    defaultChecked={settings.kana.some(
                      char => char.symbol === hiragana[53].symbol
                    )}
                    onChange={updateKana}
                  />
                </span>
                <span className='settings__hiragana-char'>
                  <input
                    type='checkbox'
                    className='settings__char-input'
                    data-symbol={hiragana[54].symbol}
                    defaultChecked={settings.kana.some(
                      char => char.symbol === hiragana[54].symbol
                    )}
                    onChange={updateKana}
                  />
                </span>
                <span className='settings__hiragana-char'>
                  <input
                    type='checkbox'
                    className='settings__char-input'
                    data-symbol={hiragana[55].symbol}
                    defaultChecked={settings.kana.some(
                      char => char.symbol === hiragana[55].symbol
                    )}
                    onChange={updateKana}
                  />
                </span>
              </li>
              <li className='settings__hiragana-list__row'>
                <button
                  className='settings__group-button'
                  onClick={toggleKanaGroup}
                >
                  Ta
                </button>
                <span className='settings__hiragana-char'>
                  <input
                    type='checkbox'
                    className='settings__char-input'
                    data-symbol={hiragana[15].symbol}
                    defaultChecked={settings.kana.some(
                      char => char.symbol === hiragana[15].symbol
                    )}
                    onChange={updateKana}
                  />
                </span>
                <span className='settings__hiragana-char'>
                  <input
                    type='checkbox'
                    className='settings__char-input'
                    data-symbol={hiragana[16].symbol}
                    defaultChecked={settings.kana.some(
                      char => char.symbol === hiragana[16].symbol
                    )}
                    onChange={updateKana}
                  />
                </span>
                <span className='settings__hiragana-char'>
                  <input
                    type='checkbox'
                    className='settings__char-input'
                    data-symbol={hiragana[17].symbol}
                    defaultChecked={settings.kana.some(
                      char => char.symbol === hiragana[17].symbol
                    )}
                    onChange={updateKana}
                  />
                </span>
                <span className='settings__hiragana-char'>
                  <input
                    type='checkbox'
                    className='settings__char-input'
                    data-symbol={hiragana[18].symbol}
                    defaultChecked={settings.kana.some(
                      char => char.symbol === hiragana[18].symbol
                    )}
                    onChange={updateKana}
                  />
                </span>
                <span className='settings__hiragana-char'>
                  <input
                    type='checkbox'
                    className='settings__char-input'
                    data-symbol={hiragana[19].symbol}
                    defaultChecked={settings.kana.some(
                      char => char.symbol === hiragana[19].symbol
                    )}
                    onChange={updateKana}
                  />
                </span>
              </li>
              <li className='settings__hiragana-list__row'>
                <button
                  className='settings__group-button'
                  onClick={toggleKanaGroup}
                >
                  Da
                </button>
                <span className='settings__hiragana-char'>
                  <input
                    type='checkbox'
                    className='settings__char-input'
                    data-symbol={hiragana[56].symbol}
                    defaultChecked={settings.kana.some(
                      char => char.symbol === hiragana[56].symbol
                    )}
                    onChange={updateKana}
                  />
                </span>
                <span className='settings__hiragana-char'>
                  <input
                    type='checkbox'
                    className='settings__char-input'
                    data-symbol={hiragana[57].symbol}
                    defaultChecked={settings.kana.some(
                      char => char.symbol === hiragana[57].symbol
                    )}
                    onChange={updateKana}
                  />
                </span>
                <span className='settings__hiragana-char'>
                  <input
                    type='checkbox'
                    className='settings__char-input'
                    data-symbol={hiragana[58].symbol}
                    defaultChecked={settings.kana.some(
                      char => char.symbol === hiragana[58].symbol
                    )}
                    onChange={updateKana}
                  />
                </span>
                <span className='settings__hiragana-char'>
                  <input
                    type='checkbox'
                    className='settings__char-input'
                    data-symbol={hiragana[59].symbol}
                    defaultChecked={settings.kana.some(
                      char => char.symbol === hiragana[59].symbol
                    )}
                    onChange={updateKana}
                  />
                </span>
                <span className='settings__hiragana-char'>
                  <input
                    type='checkbox'
                    className='settings__char-input'
                    data-symbol={hiragana[60].symbol}
                    defaultChecked={settings.kana.some(
                      char => char.symbol === hiragana[60].symbol
                    )}
                    onChange={updateKana}
                  />
                </span>
              </li>
              <li className='settings__hiragana-list__row'>
                <button
                  className='settings__group-button'
                  onClick={toggleKanaGroup}
                >
                  Na
                </button>
                <span className='settings__hiragana-char'>
                  <input
                    type='checkbox'
                    className='settings__char-input'
                    data-symbol={hiragana[20].symbol}
                    defaultChecked={settings.kana.some(
                      char => char.symbol === hiragana[20].symbol
                    )}
                    onChange={updateKana}
                  />
                </span>
                <span className='settings__hiragana-char'>
                  <input
                    type='checkbox'
                    className='settings__char-input'
                    data-symbol={hiragana[21].symbol}
                    defaultChecked={settings.kana.some(
                      char => char.symbol === hiragana[21].symbol
                    )}
                    onChange={updateKana}
                  />
                </span>
                <span className='settings__hiragana-char'>
                  <input
                    type='checkbox'
                    className='settings__char-input'
                    data-symbol={hiragana[22].symbol}
                    defaultChecked={settings.kana.some(
                      char => char.symbol === hiragana[22].symbol
                    )}
                    onChange={updateKana}
                  />
                </span>
                <span className='settings__hiragana-char'>
                  <input
                    type='checkbox'
                    className='settings__char-input'
                    data-symbol={hiragana[23].symbol}
                    defaultChecked={settings.kana.some(
                      char => char.symbol === hiragana[23].symbol
                    )}
                    onChange={updateKana}
                  />
                </span>
                <span className='settings__hiragana-char'>
                  <input
                    type='checkbox'
                    className='settings__char-input'
                    data-symbol={hiragana[24].symbol}
                    defaultChecked={settings.kana.some(
                      char => char.symbol === hiragana[24].symbol
                    )}
                    onChange={updateKana}
                  />
                </span>
              </li>
              <li className='settings__hiragana-list__row'>
                <button
                  className='settings__group-button'
                  onClick={toggleKanaGroup}
                >
                  Ha
                </button>
                <span className='settings__hiragana-char'>
                  <input
                    type='checkbox'
                    className='settings__char-input'
                    data-symbol={hiragana[25].symbol}
                    defaultChecked={settings.kana.some(
                      char => char.symbol === hiragana[25].symbol
                    )}
                    onChange={updateKana}
                  />
                </span>
                <span className='settings__hiragana-char'>
                  <input
                    type='checkbox'
                    className='settings__char-input'
                    data-symbol={hiragana[26].symbol}
                    defaultChecked={settings.kana.some(
                      char => char.symbol === hiragana[26].symbol
                    )}
                    onChange={updateKana}
                  />
                </span>
                <span className='settings__hiragana-char'>
                  <input
                    type='checkbox'
                    className='settings__char-input'
                    data-symbol={hiragana[27].symbol}
                    defaultChecked={settings.kana.some(
                      char => char.symbol === hiragana[27].symbol
                    )}
                    onChange={updateKana}
                  />
                </span>
                <span className='settings__hiragana-char'>
                  <input
                    type='checkbox'
                    className='settings__char-input'
                    data-symbol={hiragana[28].symbol}
                    defaultChecked={settings.kana.some(
                      char => char.symbol === hiragana[28].symbol
                    )}
                    onChange={updateKana}
                  />
                </span>
                <span className='settings__hiragana-char'>
                  <input
                    type='checkbox'
                    className='settings__char-input'
                    data-symbol={hiragana[29].symbol}
                    defaultChecked={settings.kana.some(
                      char => char.symbol === hiragana[29].symbol
                    )}
                    onChange={updateKana}
                  />
                </span>
              </li>
              <li className='settings__hiragana-list__row'>
                <button
                  className='settings__group-button'
                  onClick={toggleKanaGroup}
                >
                  Ba
                </button>
                <span className='settings__hiragana-char'>
                  <input
                    type='checkbox'
                    className='settings__char-input'
                    data-symbol={hiragana[61].symbol}
                    defaultChecked={settings.kana.some(
                      char => char.symbol === hiragana[61].symbol
                    )}
                    onChange={updateKana}
                  />
                </span>
                <span className='settings__hiragana-char'>
                  <input
                    type='checkbox'
                    className='settings__char-input'
                    data-symbol={hiragana[62].symbol}
                    defaultChecked={settings.kana.some(
                      char => char.symbol === hiragana[62].symbol
                    )}
                    onChange={updateKana}
                  />
                </span>
                <span className='settings__hiragana-char'>
                  <input
                    type='checkbox'
                    className='settings__char-input'
                    data-symbol={hiragana[63].symbol}
                    defaultChecked={settings.kana.some(
                      char => char.symbol === hiragana[63].symbol
                    )}
                    onChange={updateKana}
                  />
                </span>
                <span className='settings__hiragana-char'>
                  <input
                    type='checkbox'
                    className='settings__char-input'
                    data-symbol={hiragana[64].symbol}
                    defaultChecked={settings.kana.some(
                      char => char.symbol === hiragana[64].symbol
                    )}
                    onChange={updateKana}
                  />
                </span>
                <span className='settings__hiragana-char'>
                  <input
                    type='checkbox'
                    className='settings__char-input'
                    data-symbol={hiragana[65].symbol}
                    defaultChecked={settings.kana.some(
                      char => char.symbol === hiragana[65].symbol
                    )}
                    onChange={updateKana}
                  />
                </span>
              </li>
              <li className='settings__hiragana-list__row'>
                <button
                  className='settings__group-button'
                  onClick={toggleKanaGroup}
                >
                  Pa
                </button>
                <span className='settings__hiragana-char'>
                  <input
                    type='checkbox'
                    className='settings__char-input'
                    data-symbol={hiragana[66].symbol}
                    defaultChecked={settings.kana.some(
                      char => char.symbol === hiragana[66].symbol
                    )}
                    onChange={updateKana}
                  />
                </span>
                <span className='settings__hiragana-char'>
                  <input
                    type='checkbox'
                    className='settings__char-input'
                    data-symbol={hiragana[67].symbol}
                    defaultChecked={settings.kana.some(
                      char => char.symbol === hiragana[67].symbol
                    )}
                    onChange={updateKana}
                  />
                </span>
                <span className='settings__hiragana-char'>
                  <input
                    type='checkbox'
                    className='settings__char-input'
                    data-symbol={hiragana[68].symbol}
                    defaultChecked={settings.kana.some(
                      char => char.symbol === hiragana[68].symbol
                    )}
                    onChange={updateKana}
                  />
                </span>
                <span className='settings__hiragana-char'>
                  <input
                    type='checkbox'
                    className='settings__char-input'
                    data-symbol={hiragana[69].symbol}
                    defaultChecked={settings.kana.some(
                      char => char.symbol === hiragana[69].symbol
                    )}
                    onChange={updateKana}
                  />
                </span>
                <span className='settings__hiragana-char'>
                  <input
                    type='checkbox'
                    className='settings__char-input'
                    data-symbol={hiragana[70].symbol}
                    defaultChecked={settings.kana.some(
                      char => char.symbol === hiragana[70].symbol
                    )}
                    onChange={updateKana}
                  />
                </span>
              </li>
              <li className='settings__hiragana-list__row'>
                <button
                  className='settings__group-button'
                  onClick={toggleKanaGroup}
                >
                  Ma
                </button>
                <span className='settings__hiragana-char'>
                  <input
                    type='checkbox'
                    className='settings__char-input'
                    data-symbol={hiragana[30].symbol}
                    defaultChecked={settings.kana.some(
                      char => char.symbol === hiragana[30].symbol
                    )}
                    onChange={updateKana}
                  />
                </span>
                <span className='settings__hiragana-char'>
                  <input
                    type='checkbox'
                    className='settings__char-input'
                    data-symbol={hiragana[31].symbol}
                    defaultChecked={settings.kana.some(
                      char => char.symbol === hiragana[31].symbol
                    )}
                    onChange={updateKana}
                  />
                </span>
                <span className='settings__hiragana-char'>
                  <input
                    type='checkbox'
                    className='settings__char-input'
                    data-symbol={hiragana[32].symbol}
                    defaultChecked={settings.kana.some(
                      char => char.symbol === hiragana[32].symbol
                    )}
                    onChange={updateKana}
                  />
                </span>
                <span className='settings__hiragana-char'>
                  <input
                    type='checkbox'
                    className='settings__char-input'
                    data-symbol={hiragana[33].symbol}
                    defaultChecked={settings.kana.some(
                      char => char.symbol === hiragana[33].symbol
                    )}
                    onChange={updateKana}
                  />
                </span>
                <span className='settings__hiragana-char'>
                  <input
                    type='checkbox'
                    className='settings__char-input'
                    data-symbol={hiragana[34].symbol}
                    defaultChecked={settings.kana.some(
                      char => char.symbol === hiragana[34].symbol
                    )}
                    onChange={updateKana}
                  />
                </span>
              </li>
              <li className='settings__hiragana-list__row'>
                <button
                  className='settings__group-button'
                  onClick={toggleKanaGroup}
                >
                  Ya
                </button>
                <span className='settings__hiragana-char'>
                  <input
                    type='checkbox'
                    className='settings__char-input'
                    data-symbol={hiragana[35].symbol}
                    defaultChecked={settings.kana.some(
                      char => char.symbol === hiragana[35].symbol
                    )}
                    onChange={updateKana}
                  />
                </span>
                <span className='settings__hiragana-char'>
                  <input
                    type='checkbox'
                    className='settings__char-input'
                    data-symbol={hiragana[36].symbol}
                    defaultChecked={settings.kana.some(
                      char => char.symbol === hiragana[36].symbol
                    )}
                    onChange={updateKana}
                  />
                </span>
                <span className='settings__hiragana-char'>
                  <input
                    type='checkbox'
                    className='settings__char-input'
                    data-symbol={hiragana[37].symbol}
                    defaultChecked={settings.kana.some(
                      char => char.symbol === hiragana[37].symbol
                    )}
                    onChange={updateKana}
                  />
                </span>
              </li>
              <li className='settings__hiragana-list__row'>
                <button
                  className='settings__group-button'
                  onClick={toggleKanaGroup}
                >
                  Ra
                </button>
                <span className='settings__hiragana-char'>
                  <input
                    type='checkbox'
                    className='settings__char-input'
                    data-symbol={hiragana[38].symbol}
                    defaultChecked={settings.kana.some(
                      char => char.symbol === hiragana[38].symbol
                    )}
                    onChange={updateKana}
                  />
                </span>
                <span className='settings__hiragana-char'>
                  <input
                    type='checkbox'
                    className='settings__char-input'
                    data-symbol={hiragana[39].symbol}
                    defaultChecked={settings.kana.some(
                      char => char.symbol === hiragana[39].symbol
                    )}
                    onChange={updateKana}
                  />
                </span>
                <span className='settings__hiragana-char'>
                  <input
                    type='checkbox'
                    className='settings__char-input'
                    data-symbol={hiragana[40].symbol}
                    defaultChecked={settings.kana.some(
                      char => char.symbol === hiragana[40].symbol
                    )}
                    onChange={updateKana}
                  />
                </span>
                <span className='settings__hiragana-char'>
                  <input
                    type='checkbox'
                    className='settings__char-input'
                    data-symbol={hiragana[41].symbol}
                    defaultChecked={settings.kana.some(
                      char => char.symbol === hiragana[41].symbol
                    )}
                    onChange={updateKana}
                  />
                </span>
                <span className='settings__hiragana-char'>
                  <input
                    type='checkbox'
                    className='settings__char-input'
                    data-symbol={hiragana[42].symbol}
                    defaultChecked={settings.kana.some(
                      char => char.symbol === hiragana[42].symbol
                    )}
                    onChange={updateKana}
                  />
                </span>
              </li>
              <li className='settings__hiragana-list__row'>
                <button
                  className='settings__group-button'
                  onClick={toggleKanaGroup}
                >
                  Wa
                </button>
                <span className='settings__hiragana-char'>
                  <input
                    type='checkbox'
                    className='settings__char-input'
                    data-symbol={hiragana[43].symbol}
                    defaultChecked={settings.kana.some(
                      char => char.symbol === hiragana[43].symbol
                    )}
                    onChange={updateKana}
                  />
                </span>
                <span className='settings__hiragana-char'>
                  <input
                    type='checkbox'
                    className='settings__char-input'
                    data-symbol={hiragana[44].symbol}
                    defaultChecked={settings.kana.some(
                      char => char.symbol === hiragana[44].symbol
                    )}
                    onChange={updateKana}
                  />
                </span>
              </li>
              <li className='settings__hiragana-list__row'>
                <button
                  className='settings__group-button'
                  onClick={toggleKanaGroup}
                >
                  N
                </button>
                <span className='settings__hiragana-char'>
                  <input
                    type='checkbox'
                    className='settings__char-input'
                    data-symbol={hiragana[45].symbol}
                    defaultChecked={settings.kana.some(
                      char => char.symbol === hiragana[45].symbol
                    )}
                    onChange={updateKana}
                  />
                </span>
              </li>
            </ul>
            <h2>
              Katakana
              {allKatakanaSelected ? (
                <button
                  className='settings__kana-section__select-all-button'
                  onClick={() => {
                    const katakanaInputs = Array.from(
                      document.querySelectorAll<HTMLInputElement>(
                        '.settings__katakana-char input'
                      )
                    )
                    katakanaInputs.forEach(input => (input.checked = false))
                    updateKana()
                  }}
                >
                  DESELECT ALL
                </button>
              ) : (
                <button
                  className='settings__kana-section__select-all-button'
                  onClick={() => {
                    const katakanaInputs = Array.from(
                      document.querySelectorAll<HTMLInputElement>(
                        '.settings__katakana-char input'
                      )
                    )
                    katakanaInputs.forEach(input => (input.checked = true))
                    updateKana()
                  }}
                >
                  SELECT ALL
                </button>
              )}
            </h2>
            <ul className='settings__katakana-list'>
              <li className='settings__katakana-list__row'>
                <button
                  className='settings__group-button'
                  onClick={toggleKanaGroup}
                >
                  A
                </button>
                <span className='settings__katakana-char'>
                  <input
                    type='checkbox'
                    className='settings__char-input'
                    data-symbol={katakana[0].symbol}
                    defaultChecked={settings.kana.some(
                      char => char.symbol === katakana[0].symbol
                    )}
                    onChange={updateKana}
                  />
                </span>
                <span className='settings__katakana-char'>
                  <input
                    type='checkbox'
                    className='settings__char-input'
                    data-symbol={katakana[1].symbol}
                    defaultChecked={settings.kana.some(
                      char => char.symbol === katakana[1].symbol
                    )}
                    onChange={updateKana}
                  />
                </span>
                <span className='settings__katakana-char'>
                  <input
                    type='checkbox'
                    className='settings__char-input'
                    data-symbol={katakana[2].symbol}
                    defaultChecked={settings.kana.some(
                      char => char.symbol === katakana[2].symbol
                    )}
                    onChange={updateKana}
                  />
                </span>
                <span className='settings__katakana-char'>
                  <input
                    type='checkbox'
                    className='settings__char-input'
                    data-symbol={katakana[3].symbol}
                    defaultChecked={settings.kana.some(
                      char => char.symbol === katakana[3].symbol
                    )}
                    onChange={updateKana}
                  />
                </span>
                <span className='settings__katakana-char'>
                  <input
                    type='checkbox'
                    className='settings__char-input'
                    data-symbol={katakana[4].symbol}
                    defaultChecked={settings.kana.some(
                      char => char.symbol === katakana[4].symbol
                    )}
                    onChange={updateKana}
                  />
                </span>
              </li>
              <li className='settings__katakana-list__row'>
                <button
                  className='settings__group-button'
                  onClick={toggleKanaGroup}
                >
                  Ka
                </button>
                <span className='settings__katakana-char'>
                  <input
                    type='checkbox'
                    className='settings__char-input'
                    data-symbol={katakana[5].symbol}
                    defaultChecked={settings.kana.some(
                      char => char.symbol === katakana[5].symbol
                    )}
                    onChange={updateKana}
                  />
                </span>
                <span className='settings__katakana-char'>
                  <input
                    type='checkbox'
                    className='settings__char-input'
                    data-symbol={katakana[6].symbol}
                    defaultChecked={settings.kana.some(
                      char => char.symbol === katakana[6].symbol
                    )}
                    onChange={updateKana}
                  />
                </span>
                <span className='settings__katakana-char'>
                  <input
                    type='checkbox'
                    className='settings__char-input'
                    data-symbol={katakana[7].symbol}
                    defaultChecked={settings.kana.some(
                      char => char.symbol === katakana[7].symbol
                    )}
                    onChange={updateKana}
                  />
                </span>
                <span className='settings__katakana-char'>
                  <input
                    type='checkbox'
                    className='settings__char-input'
                    data-symbol={katakana[8].symbol}
                    defaultChecked={settings.kana.some(
                      char => char.symbol === katakana[8].symbol
                    )}
                    onChange={updateKana}
                  />
                </span>
                <span className='settings__katakana-char'>
                  <input
                    type='checkbox'
                    className='settings__char-input'
                    data-symbol={katakana[9].symbol}
                    defaultChecked={settings.kana.some(
                      char => char.symbol === katakana[9].symbol
                    )}
                    onChange={updateKana}
                  />
                </span>
              </li>
              <li className='settings__katakana-list__row'>
                <button
                  className='settings__group-button'
                  onClick={toggleKanaGroup}
                >
                  Ga
                </button>
                <span className='settings__katakana-char'>
                  <input
                    type='checkbox'
                    className='settings__char-input'
                    data-symbol={katakana[46].symbol}
                    defaultChecked={settings.kana.some(
                      char => char.symbol === katakana[46].symbol
                    )}
                    onChange={updateKana}
                  />
                </span>
                <span className='settings__katakana-char'>
                  <input
                    type='checkbox'
                    className='settings__char-input'
                    data-symbol={katakana[47].symbol}
                    defaultChecked={settings.kana.some(
                      char => char.symbol === katakana[47].symbol
                    )}
                    onChange={updateKana}
                  />
                </span>
                <span className='settings__katakana-char'>
                  <input
                    type='checkbox'
                    className='settings__char-input'
                    data-symbol={katakana[48].symbol}
                    defaultChecked={settings.kana.some(
                      char => char.symbol === katakana[48].symbol
                    )}
                    onChange={updateKana}
                  />
                </span>
                <span className='settings__katakana-char'>
                  <input
                    type='checkbox'
                    className='settings__char-input'
                    data-symbol={katakana[49].symbol}
                    defaultChecked={settings.kana.some(
                      char => char.symbol === katakana[49].symbol
                    )}
                    onChange={updateKana}
                  />
                </span>
                <span className='settings__katakana-char'>
                  <input
                    type='checkbox'
                    className='settings__char-input'
                    data-symbol={katakana[50].symbol}
                    defaultChecked={settings.kana.some(
                      char => char.symbol === katakana[50].symbol
                    )}
                    onChange={updateKana}
                  />
                </span>
              </li>
              <li className='settings__katakana-list__row'>
                <button
                  className='settings__group-button'
                  onClick={toggleKanaGroup}
                >
                  Sa
                </button>
                <span className='settings__katakana-char'>
                  <input
                    type='checkbox'
                    className='settings__char-input'
                    data-symbol={katakana[10].symbol}
                    defaultChecked={settings.kana.some(
                      char => char.symbol === katakana[10].symbol
                    )}
                    onChange={updateKana}
                  />
                </span>
                <span className='settings__katakana-char'>
                  <input
                    type='checkbox'
                    className='settings__char-input'
                    data-symbol={katakana[11].symbol}
                    defaultChecked={settings.kana.some(
                      char => char.symbol === katakana[11].symbol
                    )}
                    onChange={updateKana}
                  />
                </span>
                <span className='settings__katakana-char'>
                  <input
                    type='checkbox'
                    className='settings__char-input'
                    data-symbol={katakana[12].symbol}
                    defaultChecked={settings.kana.some(
                      char => char.symbol === katakana[12].symbol
                    )}
                    onChange={updateKana}
                  />
                </span>
                <span className='settings__katakana-char'>
                  <input
                    type='checkbox'
                    className='settings__char-input'
                    data-symbol={katakana[13].symbol}
                    defaultChecked={settings.kana.some(
                      char => char.symbol === katakana[13].symbol
                    )}
                    onChange={updateKana}
                  />
                </span>
                <span className='settings__katakana-char'>
                  <input
                    type='checkbox'
                    className='settings__char-input'
                    data-symbol={katakana[14].symbol}
                    defaultChecked={settings.kana.some(
                      char => char.symbol === katakana[14].symbol
                    )}
                    onChange={updateKana}
                  />
                </span>
              </li>
              <li className='settings__katakana-list__row'>
                <button
                  className='settings__group-button'
                  onClick={toggleKanaGroup}
                >
                  Za
                </button>
                <span className='settings__katakana-char'>
                  <input
                    type='checkbox'
                    className='settings__char-input'
                    data-symbol={katakana[51].symbol}
                    defaultChecked={settings.kana.some(
                      char => char.symbol === katakana[51].symbol
                    )}
                    onChange={updateKana}
                  />
                </span>
                <span className='settings__katakana-char'>
                  <input
                    type='checkbox'
                    className='settings__char-input'
                    data-symbol={katakana[52].symbol}
                    defaultChecked={settings.kana.some(
                      char => char.symbol === katakana[52].symbol
                    )}
                    onChange={updateKana}
                  />
                </span>
                <span className='settings__katakana-char'>
                  <input
                    type='checkbox'
                    className='settings__char-input'
                    data-symbol={katakana[53].symbol}
                    defaultChecked={settings.kana.some(
                      char => char.symbol === katakana[53].symbol
                    )}
                    onChange={updateKana}
                  />
                </span>
                <span className='settings__katakana-char'>
                  <input
                    type='checkbox'
                    className='settings__char-input'
                    data-symbol={katakana[54].symbol}
                    defaultChecked={settings.kana.some(
                      char => char.symbol === katakana[54].symbol
                    )}
                    onChange={updateKana}
                  />
                </span>
                <span className='settings__katakana-char'>
                  <input
                    type='checkbox'
                    className='settings__char-input'
                    data-symbol={katakana[55].symbol}
                    defaultChecked={settings.kana.some(
                      char => char.symbol === katakana[55].symbol
                    )}
                    onChange={updateKana}
                  />
                </span>
              </li>
              <li className='settings__katakana-list__row'>
                <button
                  className='settings__group-button'
                  onClick={toggleKanaGroup}
                >
                  Ta
                </button>
                <span className='settings__katakana-char'>
                  <input
                    type='checkbox'
                    className='settings__char-input'
                    data-symbol={katakana[15].symbol}
                    defaultChecked={settings.kana.some(
                      char => char.symbol === katakana[15].symbol
                    )}
                    onChange={updateKana}
                  />
                </span>
                <span className='settings__katakana-char'>
                  <input
                    type='checkbox'
                    className='settings__char-input'
                    data-symbol={katakana[16].symbol}
                    defaultChecked={settings.kana.some(
                      char => char.symbol === katakana[16].symbol
                    )}
                    onChange={updateKana}
                  />
                </span>
                <span className='settings__katakana-char'>
                  <input
                    type='checkbox'
                    className='settings__char-input'
                    data-symbol={katakana[17].symbol}
                    defaultChecked={settings.kana.some(
                      char => char.symbol === katakana[17].symbol
                    )}
                    onChange={updateKana}
                  />
                </span>
                <span className='settings__katakana-char'>
                  <input
                    type='checkbox'
                    className='settings__char-input'
                    data-symbol={katakana[18].symbol}
                    defaultChecked={settings.kana.some(
                      char => char.symbol === katakana[18].symbol
                    )}
                    onChange={updateKana}
                  />
                </span>
                <span className='settings__katakana-char'>
                  <input
                    type='checkbox'
                    className='settings__char-input'
                    data-symbol={katakana[19].symbol}
                    defaultChecked={settings.kana.some(
                      char => char.symbol === katakana[19].symbol
                    )}
                    onChange={updateKana}
                  />
                </span>
              </li>
              <li className='settings__katakana-list__row'>
                <button
                  className='settings__group-button'
                  onClick={toggleKanaGroup}
                >
                  Da
                </button>
                <span className='settings__katakana-char'>
                  <input
                    type='checkbox'
                    className='settings__char-input'
                    data-symbol={katakana[56].symbol}
                    defaultChecked={settings.kana.some(
                      char => char.symbol === katakana[56].symbol
                    )}
                    onChange={updateKana}
                  />
                </span>
                <span className='settings__katakana-char'>
                  <input
                    type='checkbox'
                    className='settings__char-input'
                    data-symbol={katakana[57].symbol}
                    defaultChecked={settings.kana.some(
                      char => char.symbol === katakana[57].symbol
                    )}
                    onChange={updateKana}
                  />
                </span>
                <span className='settings__katakana-char'>
                  <input
                    type='checkbox'
                    className='settings__char-input'
                    data-symbol={katakana[58].symbol}
                    defaultChecked={settings.kana.some(
                      char => char.symbol === katakana[58].symbol
                    )}
                    onChange={updateKana}
                  />
                </span>
                <span className='settings__katakana-char'>
                  <input
                    type='checkbox'
                    className='settings__char-input'
                    data-symbol={katakana[59].symbol}
                    defaultChecked={settings.kana.some(
                      char => char.symbol === katakana[59].symbol
                    )}
                    onChange={updateKana}
                  />
                </span>
                <span className='settings__katakana-char'>
                  <input
                    type='checkbox'
                    className='settings__char-input'
                    data-symbol={katakana[60].symbol}
                    defaultChecked={settings.kana.some(
                      char => char.symbol === katakana[60].symbol
                    )}
                    onChange={updateKana}
                  />
                </span>
              </li>
              <li className='settings__katakana-list__row'>
                <button
                  className='settings__group-button'
                  onClick={toggleKanaGroup}
                >
                  Na
                </button>
                <span className='settings__katakana-char'>
                  <input
                    type='checkbox'
                    className='settings__char-input'
                    data-symbol={katakana[20].symbol}
                    defaultChecked={settings.kana.some(
                      char => char.symbol === katakana[20].symbol
                    )}
                    onChange={updateKana}
                  />
                </span>
                <span className='settings__katakana-char'>
                  <input
                    type='checkbox'
                    className='settings__char-input'
                    data-symbol={katakana[21].symbol}
                    defaultChecked={settings.kana.some(
                      char => char.symbol === katakana[21].symbol
                    )}
                    onChange={updateKana}
                  />
                </span>
                <span className='settings__katakana-char'>
                  <input
                    type='checkbox'
                    className='settings__char-input'
                    data-symbol={katakana[22].symbol}
                    defaultChecked={settings.kana.some(
                      char => char.symbol === katakana[22].symbol
                    )}
                    onChange={updateKana}
                  />
                </span>
                <span className='settings__katakana-char'>
                  <input
                    type='checkbox'
                    className='settings__char-input'
                    data-symbol={katakana[23].symbol}
                    defaultChecked={settings.kana.some(
                      char => char.symbol === katakana[23].symbol
                    )}
                    onChange={updateKana}
                  />
                </span>
                <span className='settings__katakana-char'>
                  <input
                    type='checkbox'
                    className='settings__char-input'
                    data-symbol={katakana[24].symbol}
                    defaultChecked={settings.kana.some(
                      char => char.symbol === katakana[24].symbol
                    )}
                    onChange={updateKana}
                  />
                </span>
              </li>
              <li className='settings__katakana-list__row'>
                <button
                  className='settings__group-button'
                  onClick={toggleKanaGroup}
                >
                  Ha
                </button>
                <span className='settings__katakana-char'>
                  <input
                    type='checkbox'
                    className='settings__char-input'
                    data-symbol={katakana[25].symbol}
                    defaultChecked={settings.kana.some(
                      char => char.symbol === katakana[25].symbol
                    )}
                    onChange={updateKana}
                  />
                </span>
                <span className='settings__katakana-char'>
                  <input
                    type='checkbox'
                    className='settings__char-input'
                    data-symbol={katakana[26].symbol}
                    defaultChecked={settings.kana.some(
                      char => char.symbol === katakana[26].symbol
                    )}
                    onChange={updateKana}
                  />
                </span>
                <span className='settings__katakana-char'>
                  <input
                    type='checkbox'
                    className='settings__char-input'
                    data-symbol={katakana[27].symbol}
                    defaultChecked={settings.kana.some(
                      char => char.symbol === katakana[27].symbol
                    )}
                    onChange={updateKana}
                  />
                </span>
                <span className='settings__katakana-char'>
                  <input
                    type='checkbox'
                    className='settings__char-input'
                    data-symbol={katakana[28].symbol}
                    defaultChecked={settings.kana.some(
                      char => char.symbol === katakana[28].symbol
                    )}
                    onChange={updateKana}
                  />
                </span>
                <span className='settings__katakana-char'>
                  <input
                    type='checkbox'
                    className='settings__char-input'
                    data-symbol={katakana[29].symbol}
                    defaultChecked={settings.kana.some(
                      char => char.symbol === katakana[29].symbol
                    )}
                    onChange={updateKana}
                  />
                </span>
              </li>
              <li className='settings__katakana-list__row'>
                <button
                  className='settings__group-button'
                  onClick={toggleKanaGroup}
                >
                  Ba
                </button>
                <span className='settings__katakana-char'>
                  <input
                    type='checkbox'
                    className='settings__char-input'
                    data-symbol={katakana[61].symbol}
                    defaultChecked={settings.kana.some(
                      char => char.symbol === katakana[61].symbol
                    )}
                    onChange={updateKana}
                  />
                </span>
                <span className='settings__katakana-char'>
                  <input
                    type='checkbox'
                    className='settings__char-input'
                    data-symbol={katakana[62].symbol}
                    defaultChecked={settings.kana.some(
                      char => char.symbol === katakana[62].symbol
                    )}
                    onChange={updateKana}
                  />
                </span>
                <span className='settings__katakana-char'>
                  <input
                    type='checkbox'
                    className='settings__char-input'
                    data-symbol={katakana[63].symbol}
                    defaultChecked={settings.kana.some(
                      char => char.symbol === katakana[63].symbol
                    )}
                    onChange={updateKana}
                  />
                </span>
                <span className='settings__katakana-char'>
                  <input
                    type='checkbox'
                    className='settings__char-input'
                    data-symbol={katakana[64].symbol}
                    defaultChecked={settings.kana.some(
                      char => char.symbol === katakana[64].symbol
                    )}
                    onChange={updateKana}
                  />
                </span>
                <span className='settings__katakana-char'>
                  <input
                    type='checkbox'
                    className='settings__char-input'
                    data-symbol={katakana[65].symbol}
                    defaultChecked={settings.kana.some(
                      char => char.symbol === katakana[65].symbol
                    )}
                    onChange={updateKana}
                  />
                </span>
              </li>
              <li className='settings__katakana-list__row'>
                <button
                  className='settings__group-button'
                  onClick={toggleKanaGroup}
                >
                  Pa
                </button>
                <span className='settings__katakana-char'>
                  <input
                    type='checkbox'
                    className='settings__char-input'
                    data-symbol={katakana[66].symbol}
                    defaultChecked={settings.kana.some(
                      char => char.symbol === katakana[66].symbol
                    )}
                    onChange={updateKana}
                  />
                </span>
                <span className='settings__katakana-char'>
                  <input
                    type='checkbox'
                    className='settings__char-input'
                    data-symbol={katakana[67].symbol}
                    defaultChecked={settings.kana.some(
                      char => char.symbol === katakana[67].symbol
                    )}
                    onChange={updateKana}
                  />
                </span>
                <span className='settings__katakana-char'>
                  <input
                    type='checkbox'
                    className='settings__char-input'
                    data-symbol={katakana[68].symbol}
                    defaultChecked={settings.kana.some(
                      char => char.symbol === katakana[68].symbol
                    )}
                    onChange={updateKana}
                  />
                </span>
                <span className='settings__katakana-char'>
                  <input
                    type='checkbox'
                    className='settings__char-input'
                    data-symbol={katakana[69].symbol}
                    defaultChecked={settings.kana.some(
                      char => char.symbol === katakana[69].symbol
                    )}
                    onChange={updateKana}
                  />
                </span>
                <span className='settings__katakana-char'>
                  <input
                    type='checkbox'
                    className='settings__char-input'
                    data-symbol={katakana[70].symbol}
                    defaultChecked={settings.kana.some(
                      char => char.symbol === katakana[70].symbol
                    )}
                    onChange={updateKana}
                  />
                </span>
              </li>
              <li className='settings__katakana-list__row'>
                <button
                  className='settings__group-button'
                  onClick={toggleKanaGroup}
                >
                  Ma
                </button>
                <span className='settings__katakana-char'>
                  <input
                    type='checkbox'
                    className='settings__char-input'
                    data-symbol={katakana[30].symbol}
                    defaultChecked={settings.kana.some(
                      char => char.symbol === katakana[30].symbol
                    )}
                    onChange={updateKana}
                  />
                </span>
                <span className='settings__katakana-char'>
                  <input
                    type='checkbox'
                    className='settings__char-input'
                    data-symbol={katakana[31].symbol}
                    defaultChecked={settings.kana.some(
                      char => char.symbol === katakana[31].symbol
                    )}
                    onChange={updateKana}
                  />
                </span>
                <span className='settings__katakana-char'>
                  <input
                    type='checkbox'
                    className='settings__char-input'
                    data-symbol={katakana[32].symbol}
                    defaultChecked={settings.kana.some(
                      char => char.symbol === katakana[32].symbol
                    )}
                    onChange={updateKana}
                  />
                </span>
                <span className='settings__katakana-char'>
                  <input
                    type='checkbox'
                    className='settings__char-input'
                    data-symbol={katakana[33].symbol}
                    defaultChecked={settings.kana.some(
                      char => char.symbol === katakana[33].symbol
                    )}
                    onChange={updateKana}
                  />
                </span>
                <span className='settings__katakana-char'>
                  <input
                    type='checkbox'
                    className='settings__char-input'
                    data-symbol={katakana[34].symbol}
                    defaultChecked={settings.kana.some(
                      char => char.symbol === katakana[34].symbol
                    )}
                    onChange={updateKana}
                  />
                </span>
              </li>
              <li className='settings__katakana-list__row'>
                <button
                  className='settings__group-button'
                  onClick={toggleKanaGroup}
                >
                  Ya
                </button>
                <span className='settings__katakana-char'>
                  <input
                    type='checkbox'
                    className='settings__char-input'
                    data-symbol={katakana[35].symbol}
                    defaultChecked={settings.kana.some(
                      char => char.symbol === katakana[35].symbol
                    )}
                    onChange={updateKana}
                  />
                </span>
                <span className='settings__katakana-char'>
                  <input
                    type='checkbox'
                    className='settings__char-input'
                    data-symbol={katakana[36].symbol}
                    defaultChecked={settings.kana.some(
                      char => char.symbol === katakana[36].symbol
                    )}
                    onChange={updateKana}
                  />
                </span>
                <span className='settings__katakana-char'>
                  <input
                    type='checkbox'
                    className='settings__char-input'
                    data-symbol={katakana[37].symbol}
                    defaultChecked={settings.kana.some(
                      char => char.symbol === katakana[37].symbol
                    )}
                    onChange={updateKana}
                  />
                </span>
              </li>
              <li className='settings__katakana-list__row'>
                <button
                  className='settings__group-button'
                  onClick={toggleKanaGroup}
                >
                  Ra
                </button>
                <span className='settings__katakana-char'>
                  <input
                    type='checkbox'
                    className='settings__char-input'
                    data-symbol={katakana[38].symbol}
                    defaultChecked={settings.kana.some(
                      char => char.symbol === katakana[38].symbol
                    )}
                    onChange={updateKana}
                  />
                </span>
                <span className='settings__katakana-char'>
                  <input
                    type='checkbox'
                    className='settings__char-input'
                    data-symbol={katakana[39].symbol}
                    defaultChecked={settings.kana.some(
                      char => char.symbol === katakana[39].symbol
                    )}
                    onChange={updateKana}
                  />
                </span>
                <span className='settings__katakana-char'>
                  <input
                    type='checkbox'
                    className='settings__char-input'
                    data-symbol={katakana[40].symbol}
                    defaultChecked={settings.kana.some(
                      char => char.symbol === katakana[40].symbol
                    )}
                    onChange={updateKana}
                  />
                </span>
                <span className='settings__katakana-char'>
                  <input
                    type='checkbox'
                    className='settings__char-input'
                    data-symbol={katakana[41].symbol}
                    defaultChecked={settings.kana.some(
                      char => char.symbol === katakana[41].symbol
                    )}
                    onChange={updateKana}
                  />
                </span>
                <span className='settings__katakana-char'>
                  <input
                    type='checkbox'
                    className='settings__char-input'
                    data-symbol={katakana[42].symbol}
                    defaultChecked={settings.kana.some(
                      char => char.symbol === katakana[42].symbol
                    )}
                    onChange={updateKana}
                  />
                </span>
              </li>
              <li className='settings__katakana-list__row'>
                <button
                  className='settings__group-button'
                  onClick={toggleKanaGroup}
                >
                  Wa
                </button>
                <span className='settings__katakana-char'>
                  <input
                    type='checkbox'
                    className='settings__char-input'
                    data-symbol={katakana[43].symbol}
                    defaultChecked={settings.kana.some(
                      char => char.symbol === katakana[43].symbol
                    )}
                    onChange={updateKana}
                  />
                </span>
                <span className='settings__katakana-char'>
                  <input
                    type='checkbox'
                    className='settings__char-input'
                    data-symbol={katakana[44].symbol}
                    defaultChecked={settings.kana.some(
                      char => char.symbol === katakana[44].symbol
                    )}
                    onChange={updateKana}
                  />
                </span>
              </li>
              <li className='settings__katakana-list__row'>
                <button
                  className='settings__group-button'
                  onClick={toggleKanaGroup}
                >
                  N
                </button>
                <span className='settings__katakana-char'>
                  <input
                    type='checkbox'
                    className='settings__char-input'
                    data-symbol={katakana[45].symbol}
                    defaultChecked={settings.kana.some(
                      char => char.symbol === katakana[45].symbol
                    )}
                    onChange={updateKana}
                  />
                </span>
              </li>
            </ul>
          </section>
        </div>
      </div>
    )

  return null
}
