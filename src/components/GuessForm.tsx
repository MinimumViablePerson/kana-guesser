import { useEffect } from 'react'
import { useStore } from '../data/store'

export function GuessForm () {
  const char = useStore(store => store.char)
  const win = useStore(store => store.win)
  const lose = useStore(store => store.lose)
  const status = useStore(store => store.status)

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = event => {
    event.preventDefault()

    if (status !== 'playing') return

    const target = event.target as EventTarget & {
      guess: HTMLInputElement
      reset: () => void
    }

    const guessed = [char.symbol, char.spelling].includes(
      target.guess.value.toLowerCase()
    )

    if (guessed) win()
    else lose()

    target.reset()
  }

  useEffect(() => {
    if (status === 'playing') {
      const guessInput =
        document.querySelector<HTMLInputElement>('.guess-form__input')
      guessInput?.focus()
    }
  }, [status])

  return (
    <form
      className='guess-form'
      style={{ transform: status !== 'playing' ? 'scale(0)' : '' }}
      onSubmit={handleSubmit}
    >
      <input
        className='guess-form__input'
        type='text'
        name='guess'
        required
        autoComplete='off'
        autoCorrect='off'
        maxLength={3}
        disabled={status !== 'playing'}
      />
      <button className='guess-form__submit-button'>
        <span className='material-symbols-outlined'>send</span>
      </button>
    </form>
  )
}
