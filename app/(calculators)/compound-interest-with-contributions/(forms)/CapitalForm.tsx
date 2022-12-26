'use client'

import { useCallback, useState } from 'react'
import { useForm } from 'react-hook-form'

import styles from './form.module.scss'

export function CapitalForm() {
  const { handleSubmit, register } = useForm({
    defaultValues: {
      contribution: 0,
      time: 0,
      interest: 0
    }
  })

  const [capital, setCapital] = useState(0)

  const onSubmit = useCallback((values: any) => {
    const contribution = Number(values.contribution)
    const time = Number(values.time)
    const interest = Number(values.interest)

    const capital = (contribution * (1 + interest) * ((1 + interest) ** time - 1)) / interest
    setCapital(capital)
  }, [])

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className={styles.root}>
        <label htmlFor='contribution'>Aporte</label>
        <input type='number' id='contribution' step='any' {...register('contribution')} />

        <label htmlFor='time'>Periodo</label>
        <input type='number' id='time' step='any' {...register('time')} />

        <label htmlFor='interest'>Taxa</label>
        <input type='number' id='interest' step='any' {...register('interest')} />

        <label htmlFor='capital'>Valor final</label>
        <input type='number' id='capital' step='any' value={+capital.toFixed(4)} readOnly />

        <div>
          <button type='submit'>Calculate</button>
        </div>
      </div>
    </form>
  )
}
