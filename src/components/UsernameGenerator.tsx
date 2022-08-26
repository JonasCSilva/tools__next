import { Button, Stack } from '@mantine/core'
import { useClipboard } from '@mantine/hooks'
import generator from 'generate-password'
import { useCallback, useState } from 'react'

export const UsernameGenerator = () => {
  const [generatedUsername, setGeneratedUsername] = useState<string>('')

  const { copied, copy } = useClipboard({ timeout: 1000 })

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
    <Stack>
      <Button onClick={generateUsername} size='xl'>
        Generate Username
      </Button>
      <Button
        size='xl'
        style={{ fontSize: '16px' }}
        color={copied ? 'teal' : 'blue'}
        onClick={() => copy(generatedUsername)}
      >
        {generatedUsername}
      </Button>
    </Stack>
  )
}
