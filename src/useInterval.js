import { useEffect, useRef } from 'react'

export default function useInterval(callback, delay) {
  const savedCallback = useRef()

  useEffect(() => {
    if (typeof callback !== 'function') {
      throw new Error('useInterval requires the first argument to be a function')
    }

    savedCallback.current = callback;
  }, [callback])

  useEffect(() => {
    if (typeof delay !== 'number') {
      throw new Error('useInterval requires the second argument to be a number')
    }

    let id = setInterval(() => savedCallback.current(), delay)
    return () => clearInterval(id)
  }, [delay])
}