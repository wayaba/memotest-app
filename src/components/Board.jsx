import { CARDS, HIDDEN_IMG } from '../cards'
import { Modal } from './Modal'
import { useGame } from '../hooks/useGame'

export function Board() {
  const { guessed, selected, setSelected, hasWin, setHasWin } = useGame()

  const handleClick = (img) => {
    if (selected.includes(img)) return null
    if (selected.length < 2) setSelected([...selected, img])
  }

  return (
    <section className="grid grid-cols-3 sm:grid-cols-4 gap-4 m-6">
      {CARDS.map((img) => (
        <div
          className={`rounded-lg 
                       border-2 
                      border-black 
                      items-center 
                      m-1 
                      p-4 
                      bg-gray-400`}
          key={img.id}
          onClick={() => handleClick(img)}
        >
          {selected.includes(img) || guessed.includes(img) ? (
            <img
              className="p-2 rounded bg-white"
              alt={img.id}
              src={img.value}
            />
          ) : (
            <img
              className="p-2 rounded bg-white"
              alt={img.id}
              src={HIDDEN_IMG}
            />
          )}
        </div>
      ))}
      <Modal isVisible={hasWin} onClose={() => setHasWin(false)}>
        <div className="flex flex-col items-center text-gray-200 text-center">
          <h1 className="text-4xl m-4">🎊 !GANASTE! 🎊</h1>
          <small className="text-2xl m-4 ">¿Querés jugar de nuevo?</small>
          <div className="grid grid-cols-2 gap-2">
            <button
              className="border rounded-lg hover:bg-slate-500 p-2"
              onClick={() => location.reload()}
            >
              Si
            </button>
            <button
              className="border rounded-lg hover:bg-slate-500 p-2"
              onClick={() => setHasWin(false)}
            >
              No
            </button>
          </div>
        </div>
      </Modal>
    </section>
  )
}
