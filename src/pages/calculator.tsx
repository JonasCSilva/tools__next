import { AppShell, Navbar } from '@mantine/core'
import { NextPage } from 'next'
import Head from 'next/head'

import NavbarContent from '../components/NavbarContent'
import CapitalForm from '../components/forms/CapitalForm'
import ContributionForm from '../components/forms/ContributionForm'
import InterestForm from '../components/forms/InterestForm'
import TimeForm from '../components/forms/TimeForm'

const Calculator: NextPage = () => {
  return (
    <>
      <Head>
        <title>Calculator</title>
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
            <NavbarContent path='calculator' />
          </Navbar>
        }
      >
        <ContributionForm />
        <TimeForm />
        <InterestForm />
        <CapitalForm />
      </AppShell>
    </>
  )
}

export default Calculator
