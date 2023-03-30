export function Modal({ isVisible, onClose, children }) {
  if (!isVisible) return null

  return (
    <div className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center">
      <div className="w-[600px] flex flex-col">
        <button
          className="text-white text-xl place-self-end"
          onClick={() => onClose()}
        >
          X
        </button>
        <div className="bg-slate-700 p-2 rounded-lg">{children}</div>
      </div>
    </div>
  )
}
