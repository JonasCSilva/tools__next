'use client'

import generator from 'generate-password'
import { useCallback, useState } from 'react'

export default function Page() {
  const [generatedPassword, setGeneratedPassword] = useState<string>('')

  // const { copied, copy } = useClipboard({ timeout: 1000 })

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
    <div>
      <button onClick={generatePassword} /* size='xl' */>Generate Password</button>

      <button
        /* size='xl' */
        style={{ fontSize: '16px' }}
        /* color={copied ? 'teal' : 'blue'} */
        /* onClick={() => copy(generatedPassword)} */
      >
        {generatedPassword}
      </button>
    </div>
  )
}
