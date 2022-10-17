import type { NextPage } from 'next'
import Head from 'next/head'

import Aside from '../components/aside/Aside'
import { PasswordGenerator } from '../components/PasswordGenerator'

const Password: NextPage = () => {
  return (
    <>
      <Head>
        <title>Password Generator</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Aside path='password'>
        <PasswordGenerator />
      </Aside>
    </>
  )
}

export default Password
