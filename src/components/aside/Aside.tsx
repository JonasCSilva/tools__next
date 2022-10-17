import { AppShell, Button, Navbar, Stack } from '@mantine/core'
import Link from 'next/link'
import { ReactNode } from 'react'

export default function Aside({ children, path }: { children: ReactNode; path: string }) {
  return (
    <AppShell
      padding='md'
      styles={{
        main: {
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-around',
          flexDirection: 'row'
        }
      }}
      navbar={
        <Navbar>
          <Stack spacing='xl'>
            <Link href='/username'>
              <Button disabled={path === 'username'}>Username</Button>
            </Link>
            <Link href='/password'>
              <Button disabled={path === 'password'}>Password</Button>
            </Link>
            <Link href='/compound-interest-with-contributions'>
              <Button disabled={path === 'compound-interest-with-contributions'}>
                Compound interest with contributions
              </Button>
            </Link>
          </Stack>
        </Navbar>
      }
    >
      {children}
    </AppShell>
  )
}
