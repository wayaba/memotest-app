import { useEffect, useState } from 'react'

export function useChronometer() {
  const [time, setTime] = useState(0)
  const [isStarted, setIsStarted] = useState(false)

  useEffect(() => {
    if (isStarted) {
      const timeout = setInterval(() => setTime(time + 0.1), 100)
      return () => clearInterval(timeout)
    }

    return () => clearInterval()
  }, [time, isStarted])

  const restart = () => {
    setTime(0)
    setIsStarted(true)
  }
  return { time, setIsStarted, restart }
}
