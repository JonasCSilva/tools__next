'use client'

import clsx from 'clsx'
import generator from 'generate-password'
import { useCallback, useState } from 'react'

import styles from './page.module.scss'

const copy = (text: string) => navigator.clipboard.writeText(text)

export default function Page() {
  const [generatedUsername, setGeneratedUsername] = useState<string | null>(null)

  const generateUsername = useCallback(() => {
    const username =
      generator.generate({
        length: 1,
        numbers: false,
        uppercase: false,
        excludeSimilarCharacters: true,
        strict: true
      }) +
      generator.generate({
        length: 7,
        numbers: true,
        uppercase: false,
        excludeSimilarCharacters: true,
        strict: true
      })

    setGeneratedUsername(username)
  }, [])

  return (
    <div className={styles.root}>
      <button className={styles.button} onClick={generateUsername}>
        Generate Username
      </button>
      <button
        className={clsx(styles.button, styles.copied)}
        onClick={() => copy(generatedUsername!)}
        disabled={!generatedUsername}
      >
        {generatedUsername}
      </button>
    </div>
  )
}
