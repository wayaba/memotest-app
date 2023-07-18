import { useState } from 'react'
import { Board } from './Board'

export function Game() {
  const [start, setStart] = useState(false)
  const [cardQty, setCardQty] = useState(12)
  return (
    <>
      {start ? (
        <Board cardQty={cardQty} />
      ) : (
        <section className="gird grid-col-1 items-center text-gray-200 text-center p-2 rounded-lg m-6 border border-solid">
          <p className="m-4">Selecciona la cantidad de tarjetas</p>
          <div className="flex flex-row items-center place-content-center m-4">
            <div className="p-1">
              <input
                id="id12"
                type="radio"
                value="12"
                checked={cardQty === 12}
                onChange={() => setCardQty(12)}
              />
              <label htmlFor="id12" className="m-2 p-1">
                12
              </label>
            </div>
            <div className="p-1">
              <input
                id="id24"
                type="radio"
                value="24"
                checked={cardQty === 24}
                onChange={() => setCardQty(24)}
              />
              <label htmlFor="id24" className="m-2 p-1">
                24
              </label>
            </div>
          </div>
          <button
            className="border rounded-lg hover:bg-slate-500 p-2 bg-slate-700 m-2"
            onClick={() => setStart(true)}
          >
            Comenzar juego
          </button>
        </section>
      )}
    </>
  )
}
