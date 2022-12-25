'use client'

import clsx from 'clsx'
import generator from 'generate-password'
import { useCallback, useState } from 'react'

import styles from './page.module.scss'

const copy = (text: string) => navigator.clipboard.writeText(text)

export default function Page() {
  const [generatedPassword, setGeneratedPassword] = useState<string | null>(null)

  const generatePassword = useCallback(() => {
    const password = generator.generate({
      length: 16,
      numbers: true,
      symbols: true,
      excludeSimilarCharacters: true,
      strict: true
    })

    setGeneratedPassword(password)
  }, [])

  return (
    <div className={styles.root}>
      <button className={styles.button} onClick={generatePassword}>
        Generate Password
      </button>

      <button
        className={clsx(styles.button, styles.copied)}
        onClick={() => copy(generatedPassword!)}
        disabled={!generatedPassword}
      >
        {generatedPassword}
      </button>
    </div>
  )
}
