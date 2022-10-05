import { AppShell, Navbar } from '@mantine/core'
import type { NextPage } from 'next'
import Head from 'next/head'

import NavbarContent from '../components/NavbarContent'
import { PasswordGenerator } from '../components/PasswordGenerator'
import { UsernameGenerator } from '../components/UsernameGenerator'

const Generator: NextPage = () => {
  return (
    <>
      <Head>
        <title>Generator</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
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
          <Navbar width={{ base: 300 }} p='xs'>
            <NavbarContent path='generator' />
          </Navbar>
        }
      >
        <UsernameGenerator />

        <PasswordGenerator />
      </AppShell>
    </>
  )
}

export default Generator
