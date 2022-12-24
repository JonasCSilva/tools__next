'use client'

import { usePathname } from 'next/navigation'

const title: { [key: string]: string } = {
  password: 'Password Generator',
  username: 'Username Generator',
  'compound-interest-with-contributions': 'Compound Interest With Contributions Calculator'
}

export default function Head() {
  const pathname = usePathname()

  const path = pathname?.split('/')[1]!

  return (
    <>
      <title>{title[path]}</title>
      <link rel='icon' href='/favicon.ico' />
    </>
  )
}
