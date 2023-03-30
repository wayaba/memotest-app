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
    <section className="grid justify-center">
      <ul className="grid lg:grid-cols-4 sm:grid-cols-3 gap-2 w-fit ">
        {CARDS.map((img) => (
          <li
            className="w-full h-auto rounded border p-3 cursor-pointer bg-slate-200 "
            key={img.id}
            onClick={() => handleClick(img)}
          >
            {selected.includes(img) || guessed.includes(img) ? (
              <img className="p-2 rounded " alt={img.id} src={img.value} />
            ) : (
              <img
                className="p-2 rounded bg-red-200 "
                alt={img.id}
                src={HIDDEN_IMG}
              />
            )}
          </li>
        ))}
      </ul>
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
