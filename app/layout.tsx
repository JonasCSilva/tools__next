'use client'

import './(styles)/globals.scss'
import { Inter } from '@next/font/google'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Fragment, ReactNode } from 'react'

import styles from './layout.module.scss'
import { linksGroups } from './links'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({ children }: { children: ReactNode }) {
  const pathname = usePathname()

  const currentPath = pathname!.split('/')[1]

  return (
    <html lang='en' className={inter.className}>
      <body className={styles.body}>
        <aside className={styles.aside}>
          {linksGroups.map(({ heading, content }) => (
            <Fragment key={heading}>
              <h2 className={styles.heading}>{heading}</h2>
              {content.map(({ path, name }) => (
                <Link href={'/' + path} key={path}>
                  <button className={styles.button} disabled={currentPath === path}>
                    {name}
                  </button>
                </Link>
              ))}
            </Fragment>
          ))}
        </aside>
        <main className={styles.main}>{children}</main>
      </body>
    </html>
  )
}
