import type { NextPage } from 'next'
import Head from 'next/head'

import Aside from '../components/aside/Aside'
import { UsernameGenerator } from '../components/UsernameGenerator'

const Username: NextPage = () => {
  return (
    <>
      <Head>
        <title>Username Generator</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Aside path='username'>
        <UsernameGenerator />
      </Aside>
    </>
  )
}

export default Username
