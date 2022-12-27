'use client'

import { useCallback, useState } from 'react'
import { useForm } from 'react-hook-form'

import styles from './form.module.scss'

type FormData = {
  contribution: number
  capital: number
  time: number
}

export function InterestForm() {
  const {
    handleSubmit,
    register,
    formState: { errors }
  } = useForm<FormData>()

  const [interest, setInterest] = useState<number>()

  const onSubmit = useCallback((values: FormData) => {
    const contribution = Number(values.contribution)
    const capital = Number(values.capital)
    const time = Number(values.time)

    let testCapital = 0
    let interest = 0

    while (+testCapital.toFixed(4) < +capital.toFixed(4)) {
      interest += 0.00001
      testCapital = (contribution * (1 + interest) * ((1 + interest) ** time - 1)) / interest
    }

    setInterest(Math.round((interest + Number.EPSILON) * 10000) / 100)
  }, [])

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className={styles.root}>
        <div>
          <label htmlFor='contribution3'>Aporte</label>
          <input
            type='number'
            id='contribution3'
            step='1'
            style={{ borderColor: errors.contribution && 'red' }}
            {...register('contribution', { required: true, min: 1 })}
          />
        </div>

        <div>
          <label htmlFor='time3'>Periodo</label>
          <input
            type='number'
            id='time3'
            step='1'
            style={{ borderColor: errors.time && 'red' }}
            {...register('time', { required: true, min: 1 })}
          />
        </div>

        <div>
          <label htmlFor='interest3'>Taxa %</label>
          <input type='number' id='interest3' value={interest ? +interest.toFixed(4) : ''} disabled />
        </div>

        <div>
          <label htmlFor='capital3'>Valor final</label>
          <input
            type='number'
            id='capital3'
            step='1'
            style={{ borderColor: errors.capital && 'red' }}
            {...register('capital', { required: true, min: 1 })}
          />
        </div>

        <div className={styles.buttonContainer}>
          <button type='submit' className={styles.submitButton}>
            Calculate
          </button>
        </div>
      </div>
    </form>
  )
}
