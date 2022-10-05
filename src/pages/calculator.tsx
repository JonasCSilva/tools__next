import { AppShell, Navbar } from '@mantine/core'
import { NextPage } from 'next'
import Head from 'next/head'

import NavbarContent from '../components/NavbarContent'
import styles from '../styles/pages.module.scss'

const Calculator: NextPage = () => {
  return (
    <>
      <Head>
        <title>Calculator</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <AppShell
        padding='md'
        navbar={
          <Navbar width={{ base: 300 }} p='xs'>
            <NavbarContent path='calculator' />
          </Navbar>
        }
      >
        <main className={styles.main} />
      </AppShell>
    </>
  )
}

export default Calculator
