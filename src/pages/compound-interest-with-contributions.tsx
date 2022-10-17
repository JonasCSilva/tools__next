import { NextPage } from 'next'
import Head from 'next/head'

import Aside from '../components/aside/Aside'
import CapitalForm from '../components/forms/CapitalForm'
import ContributionForm from '../components/forms/ContributionForm'
import InterestForm from '../components/forms/InterestForm'
import TimeForm from '../components/forms/TimeForm'

const CompoundInterestWithContributions: NextPage = () => {
  return (
    <>
      <Head>
        <title>Compound Interest With Contributions Calculator</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Aside path='compound-interest-with-contributions'>
        <ContributionForm />
        <TimeForm />
        <InterestForm />
        <CapitalForm />
      </Aside>
    </>
  )
}

export default CompoundInterestWithContributions
