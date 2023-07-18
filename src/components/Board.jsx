import { HIDDEN_IMG } from '../cards'
import { Modal } from './Modal'
import { useGame } from '../hooks/useGame'
import { useChronometer } from '../hooks/useChronometer'
import { useEffect } from 'react'
import { Card } from './Card'

export function Board({ cardQty = 12 }) {
  const {
    showImg,
    hasWin,
    clickOnCard,
    restart: restartGame,
    cards,
    clickOnSecret
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
      <div className="flex justify-center items-center text-center m-2 text-white">
        <div className="items-center">
          <span onClick={clickOnSecret}>Tiempo</span> {time.toFixed(2)}
        </div>
        <button
          onClick={() => location.reload()}
          className="border rounded-lg hover:bg-slate-500 p-1 bg-slate-700 ml-2"
        >
          Volver
        </button>
      </div>
      <div
        className={`grid grid-cols-4 sm:grid-cols-4 ${
          cards.length > 12 ? 'lg:grid-cols-6' : ''
        } m-auto w-fit`}
      >
        {cards.map((img) => (
          <Card key={img.id} img={img} cardQty={cardQty} showImg={showImg} clickOnCard={clickOnCard}></Card>
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
