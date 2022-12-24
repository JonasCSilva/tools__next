import { CapitalForm } from './(forms)/CapitalForm'
import { ContributionForm } from './(forms)/ContributionForm'
import { InterestForm } from './(forms)/InterestForm'
import { TimeForm } from './(forms)/TimeForm'

export default function Page() {
  return (
    <div>
      <CapitalForm />
      <ContributionForm />
      <InterestForm />
      <TimeForm />
    </div>
  )
}
