'use client'

import { useCallback, useState } from 'react'
import { useForm } from 'react-hook-form'

import styles from './form.module.scss'

type FormData = {
  capital: number
  time: number
  interest: number
}

export function ContributionForm() {
  const {
    handleSubmit,
    register,
    formState: { errors }
  } = useForm<FormData>()

  const [contribution, setContribution] = useState<number>()

  const onSubmit = useCallback((values: FormData) => {
    const capital = Number(values.capital)
    const time = Number(values.time)
    const interest = Number(values.interest) / 100

    const contribution = capital / (((1 + interest) ** time - 1) / interest) / (1 + interest)

    setContribution(Math.round(contribution))
  }, [])

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className={styles.root}>
        <div>
          <label htmlFor='contribution1'>Aporte</label>
          <input type='number' id='contribution1' value={contribution ? +contribution.toFixed(4) : ''} disabled />
        </div>

        <div>
          <label htmlFor='time1'>Periodo</label>
          <input
            type='number'
            id='time1'
            step='1'
            style={{ borderColor: errors.time && 'red' }}
            {...register('time', { required: true, min: 1 })}
          />
        </div>

        <div>
          <label htmlFor='interest1'>Taxa %</label>
          <input
            type='number'
            id='interest1'
            step='0.1'
            style={{ borderColor: errors.interest && 'red' }}
            {...register('interest', { required: true, min: 0.1 })}
          />
        </div>

        <div>
          <label htmlFor='capital1'>Valor final</label>
          <input
            type='number'
            id='capital1'
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
