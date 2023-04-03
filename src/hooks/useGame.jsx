import { useEffect, useState } from 'react'
import confetti from 'canvas-confetti'
import { sortCards } from '../cards'
export function useGame(cardQty = 12) {
  const [guessed, setGuessed] = useState([])
  const [cards, setCards] = useState([])
  const [selected, setSelected] = useState([])
  const [hasWin, setHasWin] = useState(false)

  useEffect(() => {
    setCards(sortCards(cardQty))
  }, [])

  useEffect(() => {
    if (selected.length === 2) {
      if (selected[0].value === selected[1].value)
        setGuessed([...guessed, selected[0], selected[1]])

      setTimeout(() => setSelected([]), 500)
    }
  }, [selected])

  useEffect(() => {
    if (guessed.length === cardQty) {
      confetti()
      setHasWin(true)
    }
  }, [guessed])

  const clickOnCard = (img) => {
    if (selected.includes(img)) return null
    if (selected.length < 2) setSelected([...selected, img])
  }

  const showImg = (img) => {
    return selected.includes(img) || guessed.includes(img)
  }

  const restart = () => {
    setGuessed([])
    setSelected([])
    setHasWin(false)
    setCards(sortCards(cardQty))
  }
  return { showImg, hasWin, clickOnCard, restart, cards }
}
