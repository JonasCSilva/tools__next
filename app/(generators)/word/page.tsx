'use client'

import clsx from 'clsx'
import { useCallback, useState } from 'react'

import styles from '../generator.module.scss'
import { wordList } from './words'

const copy = (text: string) => navigator.clipboard.writeText(text)

export default function Page() {
  const [generatedWord, setGeneratedWord] = useState<string | null>(null)

  const generateWord = useCallback(() => {
    const word = wordList[Math.floor(Math.random() * wordList.length)]

    setGeneratedWord(word)
  }, [])

  return (
    <div className={styles.root}>
      <button className={styles.button} onClick={generateWord}>
        Generate Word
      </button>
      <button
        className={clsx(styles.button, styles.copied)}
        onClick={() => copy(generatedWord!)}
        disabled={!generatedWord}
      >
        {generatedWord}
      </button>
    </div>
  )
}
