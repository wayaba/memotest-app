import { useEffect, useState } from 'react'

export function Chronometer() {
  const [time, setTime] = useState(0)
  const [isStarted, setIsStarted] = useState(false)

  useEffect(() => {
    if (isStarted) {
      const timeout = setInterval(() => setTime(time + 0.1), 100)
      return () => clearInterval(timeout)
    }

    return () => clearInterval()
  }, [time, isStarted])

  return (
    <section className="text-center m-4">
      <h2 className="text-white">Tiempo {time.toFixed(2)}</h2>
      <button>Reiniciar</button>
    </section>
  )
}
