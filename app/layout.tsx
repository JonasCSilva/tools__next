'use client'

import './globals.scss'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { ReactNode } from 'react'

import styles from './layout.module.scss'

export default function RootLayout({ children }: { children: ReactNode }) {
  const pathname = usePathname()

  const path = pathname?.split('/')[1]

  return (
    <html lang='en'>
      <body className={styles.body}>
        <aside className={styles.aside}>
          <h2>Generators</h2>
          <Link href='/username'>
            <button disabled={path === 'username'}>Username </button>
          </Link>
          <Link href='/password'>
            <button disabled={path === 'password'}> Password </button>
          </Link>
          <h2>Calculators</h2>
          <Link href='/compound-interest-with-contributions'>
            <button disabled={path === 'compound-interest-with-contributions'}>
              Compound interest with contributions
            </button>
          </Link>
        </aside>
        <main className={styles.main}>{children}</main>
      </body>
    </html>
  )
}
