import { AppShell, Navbar } from '@mantine/core'
import type { NextPage } from 'next'
import Head from 'next/head'

import NavbarContent from '../components/NavbarContent'
import { PasswordGenerator } from '../components/PasswordGenerator'
import { UsernameGenerator } from '../components/UsernameGenerator'
import styles from '../styles/pages.module.css'

const Generator: NextPage = () => {
  return (
    <>
      <Head>
        <title>Generator</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <AppShell
        padding='md'
        navbar={
          <Navbar width={{ base: 300 }} p='xs'>
            <NavbarContent path='generator' />
          </Navbar>
        }
      >
        <main className={styles.main}>
          <UsernameGenerator />

          <PasswordGenerator />
        </main>
      </AppShell>
    </>
  )
}

export default Generator
