import { useEffect, useState } from 'react'
import confetti from 'canvas-confetti'
import { CARDS } from '../cards'
export function useGame() {
  const [guessed, setGuessed] = useState([])
  const [selected, setSelected] = useState([])
  const [hasWin, setHasWin] = useState(false)

  useEffect(() => {
    if (selected.length === 2) {
      if (selected[0].value === selected[1].value)
        setGuessed([...guessed, selected[0], selected[1]])

      setTimeout(() => setSelected([]), 500)
    }
  }, [selected])

  useEffect(() => {
    if (guessed.length === CARDS.length) {
      confetti()
      setHasWin(true)
    }
  }, [guessed])

  return { guessed, selected, setSelected, hasWin, setHasWin }
}
