import { Button } from '@mantine/core'
import Link from 'next/link'
import { ReactNode } from 'react'

import styles from './aside.module.scss'

export default function Aside({ children, path }: { children: ReactNode; path: string }) {
  return (
    <div className={styles.root}>
      <aside className={styles.aside}>
        <Link href='/username'>
          <Button disabled={path === 'username'}>Username</Button>
        </Link>
        <Link href='/password'>
          <Button disabled={path === 'password'}>Password</Button>
        </Link>
        <Link href='/compound-interest-with-contributions'>
          <Button disabled={path === 'compound-interest-with-contributions'}>
            Compound interest with contributions
          </Button>
        </Link>
      </aside>
      <main className={styles.main}>{children}</main>
    </div>
  )
}
