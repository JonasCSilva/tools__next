import { Button, Stack } from '@mantine/core'
import Link from 'next/link'

export default function NavbarContent({ path }: { path: string }) {
  return (
    <Stack spacing='xl'>
      <Link href='/generator'>
        <Button disabled={path === 'generator'}>Generator</Button>
      </Link>
      <Link href='/calculator'>
        <Button disabled={path === 'calculator'}>Calculator</Button>
      </Link>
    </Stack>
  )
}
