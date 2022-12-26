'use client'

import { useCallback, useState } from 'react'
import { useForm } from 'react-hook-form'

import styles from './form.module.scss'

export function ContributionForm() {
  const { handleSubmit, register } = useForm({
    defaultValues: {
      capital: 0,
      time: 0,
      interest: 0
    }
  })

  const [contribution, setContribution] = useState(0)

  const onSubmit = useCallback((values: any) => {
    const capital = Number(values.capital)
    const time = Number(values.time)
    const interest = Number(values.interest)

    const contribution = capital / (((1 + interest) ** time - 1) / interest) / (1 + interest)
    setContribution(contribution)
  }, [])

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className={styles.root}>
        <label htmlFor='contribution'>Aporte</label>
        <input type='number' id='contribution' step='any' value={+contribution.toFixed(4)} readOnly />

        <label htmlFor='time'>Periodo</label>
        <input type='number' id='time' step='any' {...register('time')} />

        <label htmlFor='interest'>Taxa</label>
        <input type='number' id='interest' step='any' {...register('interest')} />

        <label htmlFor='capital'>Valor final</label>
        <input type='number' id='capital' step='any' {...register('capital')} />

        <div>
          <button type='submit'>Calculate</button>
        </div>
      </div>
    </form>
  )
}
