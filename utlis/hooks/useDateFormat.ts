import { useMemo, useCallback } from 'react'
import { format, isValid } from 'date-fns'

type PatternType = {
  default: string
}

export const useDateFormat = () => {
  const pattern = useMemo<PatternType>(() => {
    return {
      default: 'yyyy/MM/dd',
    } as const
  }, [])

  const formatDate = useCallback((date: Date | string, pt: keyof PatternType = 'default'): string => {
    let targetDate: Date

    if (typeof date === 'string') {
      if (!isValid(new Date(date))) {
        throw new Error('無効です')
      }
    }

    targetDate = typeof date === 'string' ? new Date(date) : date

    return format(targetDate, pattern[pt])
  }, [pattern])

  return {
    pattern,
    formatDate
  }
}
