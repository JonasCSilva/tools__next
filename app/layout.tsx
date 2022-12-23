'use client'

import './globals.scss'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { ReactNode } from 'react'

// import styles from './layout.module.scss'

export default function RootLayout({ children }: { children: ReactNode }) {
  const pathname = usePathname()

  const path = pathname?.split('/')[1]

  return (
    <html lang='en'>
      <body /* className={styles.root} */>
        <aside /* className={styles.aside} */>
          <Link href='/username'>
            {/* <Button disabled={path === 'username'}> */}Username{/* </Button> */}
          </Link>
          <Link href='/password'>
            {/* <Button disabled={path === 'password'}> */}Password{/* </Button> */}
          </Link>
          <Link href='/compound-interest-with-contributions'>
            {/* <Button disabled={path === 'compound-interest-with-contributions'}> */}
            Compound interest with contributions
            {/* </Button> */}
          </Link>
        </aside>
        <main /* className={styles.main} */>{children}</main>
      </body>
    </html>
  )
}
