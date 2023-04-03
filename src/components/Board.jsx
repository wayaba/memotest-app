import { HIDDEN_IMG } from '../cards'
import { Modal } from './Modal'
import { useGame } from '../hooks/useGame'
import { useChronometer } from '../hooks/useChronometer'
import { useEffect } from 'react'

export function Board() {
  const {
    showImg,
    hasWin,
    clickOnCard,
    restart: restartGame,
    cards
  } = useGame()
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
      <section className="text-center m-4">
        <h2 className="text-white">Tiempo {time.toFixed(2)}</h2>
      </section>
      <div className="grid grid-cols-3 sm:grid-cols-4 m-auto w-fit">
        {cards.map((img) => (
          <div
            className="rounded-lg border-2 border-black items-center m-1 p-4 w-fitbg-gray-400"
            key={img.id}
            onClick={() => clickOnCard(img)}
          >
            <img
              className="p-2 rounded bg-white"
              alt={img.id}
              src={showImg(img) ? img.value : HIDDEN_IMG}
            />
          </div>
        ))}
      </div>
      <Modal
        isVisible={hasWin}
        time={time}
        onClose={() => location.reload()}
        onRestart={() => restart()}
      ></Modal>
    </section>
  )
}
