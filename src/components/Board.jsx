import { HIDDEN_IMG } from '../cards'
import { Modal } from './Modal'
import { useGame } from '../hooks/useGame'
import { useChronometer } from '../hooks/useChronometer'
import { useEffect } from 'react'

export function Board({ cardQty = 12 }) {
  const {
    showImg,
    hasWin,
    clickOnCard,
    restart: restartGame,
    cards
  } = useGame(cardQty)
  const { time, setIsStarted, restart: restartChron } = useChronometer()

  useEffect(() => {
    setIsStarted(true)
  }, [])

  useEffect(() => {
    if (hasWin) setIsStarted(false)
  }, [hasWin])

  const restart = () => {
    restartChron()
    restartGame()
  }

  return (
    <section className="grid grid-cols-1">
      <section className="text-center m-3">
        <h2 className="text-white">Tiempo {time.toFixed(2)}</h2>
      </section>
      <div
        className={`grid grid-cols-4 sm:grid-cols-4 ${
          cards.length > 12 ? 'lg:grid-cols-6' : ''
        } m-auto w-fit`}
      >
        {cards.map((img) => (
          <div
            className="rounded-lg border-2 border-black items-center lg:m-1 md:m-1 sm:m-1 m-0 p-1 w-fitbg-gray-400"
            key={img.id}
            onClick={() => clickOnCard(img)}
          >
            <img
              className="p-2 rounded bg-white lg:w-32 w-16"
              alt={img.id}
              src={showImg(img) ? img.value : HIDDEN_IMG}
            />
          </div>
        ))}
      </div>
      <Modal
        isVisible={hasWin}
        time={time}
        cardQty={cardQty}
        onClose={() => location.reload()}
        onRestart={() => restart()}
      ></Modal>
    </section>
  )
}
