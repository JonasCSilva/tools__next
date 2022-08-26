import { Button, Stack } from '@mantine/core'
import { useClipboard } from '@mantine/hooks'
import generator from 'generate-password'
import { useCallback, useState } from 'react'

export const PasswordGenerator = () => {
  const [generatedPassword, setGeneratedPassword] = useState<string>('')

  const { copied, copy } = useClipboard({ timeout: 1000 })

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
    <Stack>
      <Button onClick={generatePassword} size='xl'>
        Generate Password
      </Button>

      <Button
        size='xl'
        style={{ fontSize: '16px' }}
        color={copied ? 'teal' : 'blue'}
        onClick={() => copy(generatedPassword)}
      >
        {generatedPassword}
      </Button>
    </Stack>
  )
}
