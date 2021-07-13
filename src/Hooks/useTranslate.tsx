import { useMemo, useRef } from 'react'
import { useTranslation } from 'react-i18next'

export function useTranslate(initialWords: any) {
  const currentWords = useRef(initialWords)

  const { t } = useTranslation()

  const translations = useMemo(
    () =>
      currentWords.current.reduce(
        (items: any, key: any) => ({
          ...items,
          [key]: t(key),
        }),
        {}
      ),
    [t]
  )

  return {
    ...translations,
  }
}
