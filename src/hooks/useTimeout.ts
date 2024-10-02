import { type MutableRefObject, useCallback, useEffect, useRef } from 'react'

export const useTimeout = () => {
  const timeoutRef = useRef(null) as MutableRefObject<ReturnType<typeof setTimeout> | null>

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current)
      }
    }
  }, [])

  return useCallback((callback: () => void, time: number) => {
    timeoutRef.current = setTimeout(callback, time)
  }, [])
}
