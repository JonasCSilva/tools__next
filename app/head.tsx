'use client'

import { usePathname } from 'next/navigation'

import { titles } from './links'

export default function Head() {
  const pathname = usePathname()

  const currentPath = pathname?.split('/')[1]!

  return (
    <>
      <title>{titles[currentPath]}</title>
      <link rel='icon' href='/favicon.ico' />
    </>
  )
}
