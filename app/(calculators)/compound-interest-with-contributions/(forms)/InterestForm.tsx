'use client'

import { useCallback, useState } from 'react'
import { useForm } from 'react-hook-form'

import styles from './form.module.scss'

export function InterestForm() {
  const { handleSubmit, register } = useForm({
    defaultValues: {
      contribution: 0,
      capital: 0,
      time: 0
    }
  })

  const [interest, setInterest] = useState(0)

  const onSubmit = useCallback((values: any) => {
    const contribution = Number(values.contribution)
    const capital = Number(values.capital)
    const time = Number(values.time)

    let testCapital = 0
    let interest = 0

    while (+testCapital.toFixed(4) < +capital.toFixed(4)) {
      interest += 0.0005
      testCapital = (contribution * (1 + interest) * ((1 + interest) ** time - 1)) / interest
    }

    setInterest(interest)
  }, [])

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className={styles.root}>
        <label htmlFor='contribution'>Aporte</label>
        <input type='number' id='contribution' step='any' {...register('contribution')} />

        <label htmlFor='time'>Periodo</label>
        <input type='number' id='time' step='any' {...register('time')} />

        <label htmlFor='interest'>Taxa</label>
        <input type='number' id='interest' step='any' value={+interest.toFixed(4)} readOnly />

        <label htmlFor='capital'>Valor final</label>
        <input type='number' id='capital' step='any' {...register('capital')} />

        <div>
          <button type='submit'>Calculate</button>
        </div>
      </div>
    </form>
  )
}
