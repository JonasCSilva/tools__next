import { CapitalForm } from './(forms)/CapitalForm'
import { ContributionForm } from './(forms)/ContributionForm'
import { InterestForm } from './(forms)/InterestForm'
import { TimeForm } from './(forms)/TimeForm'
import styles from './page.module.scss'

export default function Page() {
  return (
    <div className={styles.root}>
      <ContributionForm />
      <TimeForm />
      <InterestForm />
      <CapitalForm />
    </div>
  )
}
