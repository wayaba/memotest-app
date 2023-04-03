import { useState } from 'react'
import { Board } from './Board'

export function Game() {
  const [start, setStart] = useState(false)
  return (
    <>
      {start ? (
        <Board />
      ) : (
        <div className="gird grid-col-1 items-center text-gray-200 text-center p-2 rounded-lg m-6">
          <button
            className="border rounded-lg hover:bg-slate-500 p-2 bg-slate-700"
            onClick={() => setStart(true)}
          >
            Comenzar juego
          </button>
        </div>
      )}
    </>
  )
}
