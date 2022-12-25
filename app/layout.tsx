'use client'

import './globals.scss'
import { Inter } from '@next/font/google'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { ReactNode } from 'react'

import styles from './layout.module.scss'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({ children }: { children: ReactNode }) {
  const pathname = usePathname()

  const path = pathname!.split('/')[1]

  return (
    <html lang='en' className={inter.className}>
      <body className={styles.body}>
        <aside className={styles.aside}>
          <h2 className={styles.heading}>Generators</h2>
          <Link href='/username'>
            <button className={styles.button} disabled={path === 'username'}>
              Username
            </button>
          </Link>
          <Link href='/password'>
            <button className={styles.button} disabled={path === 'password'}>
              Password
            </button>
          </Link>
          <h2 className={styles.heading}>Calculators</h2>
          <Link href='/compound-interest-with-contributions'>
            <button className={styles.button} disabled={path === 'compound-interest-with-contributions'}>
              Compound interest with contributions
            </button>
          </Link>
        </aside>
        <main className={styles.main}>{children}</main>
      </body>
    </html>
  )
}
