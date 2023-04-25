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
    if (selected.length !== 2) return

    const [first, second] = selected
    if (first.value === second.value) setGuessed([...guessed, first, second])

    setTimeout(() => setSelected([]), 600)
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

  const clickOnSecret = () => {
    for (let index = 0; index < cards.length / 2; index++) {
      const cardA = cards.find((o) => o.id === index + 'a')
      const cardB = cards.find((o) => o.id === index + 'b')
      if (!guessed.includes(cardA)) {
        setGuessed([...guessed, cardA, cardB])
        return null
      }
    }
  }

  return { showImg, hasWin, clickOnCard, restart, cards, clickOnSecret }
}
