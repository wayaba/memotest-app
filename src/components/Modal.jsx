import { TwitterShare } from './TwitterShare'

export function Modal({ isVisible, onClose, time, onRestart }) {
  if (!isVisible) return null

  return (
    <div className="fixed inset-5 bg-opacity-25 backdrop-blur-sm flex justify-center items-center z-10">
      <div className="w-[600px] flex flex-col">
        <button
          className="text-white text-xl place-self-end"
          onClick={() => onClose()}
        >
          X
        </button>
        <div className="gird grid-col-1 items-center text-gray-200 text-center bg-slate-800 p-2 rounded-lg m-6">
          <h1 className="lg:text-4xl md:text-2xl sm:text-2xl text-lg m-2">
            🎊 !GANASTE! 🎊
          </h1>
          <p className="lg:text-md md:text-md sm:text-md text-sm m-4 ">
            Tu tiempo fue de {time.toFixed(2)} segundos
          </p>
          <div className="items-center text-center">
            <TwitterShare time={time} />
          </div>

          <small className="lg:text-2xl md:text-2xl sm:text-2xl text-lg m-4 ">
            ¿Querés jugar de nuevo?
          </small>
          <div className="grid grid-cols-2 gap-2 m-2">
            <button
              className="border rounded-lg hover:bg-slate-500 p-2"
              onClick={() => onRestart()}
            >
              Si
            </button>
            <button
              className="border rounded-lg hover:bg-slate-500 p-2"
              onClick={() => onClose()}
            >
              No
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
