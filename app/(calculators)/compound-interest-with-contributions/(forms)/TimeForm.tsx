'use client'

import { useCallback, useState } from 'react'
import { useForm } from 'react-hook-form'

import styles from './form.module.scss'

export function TimeForm() {
  const { handleSubmit, register } = useForm({
    defaultValues: {
      contribution: 0,
      capital: 0,
      interest: 0
    }
  })

  const [time, setTime] = useState(0)

  const onSubmit = useCallback((values: any) => {
    const contribution = Number(values.contribution)
    const capital = Number(values.capital)
    const interest = Number(values.interest)

    const time =
      Math.log((capital + (contribution * (1 + interest)) / interest) / ((contribution * (1 + interest)) / interest)) /
      Math.log(1 + interest)
    setTime(time)
  }, [])

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className={styles.root}>
        <label htmlFor='contribution'>Aporte</label>
        <input type='number' id='contribution' step='any' {...register('contribution')} />

        <label htmlFor='time'>Periodo</label>
        <input type='number' id='time' step='any' value={+time.toFixed(4)} readOnly />

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
