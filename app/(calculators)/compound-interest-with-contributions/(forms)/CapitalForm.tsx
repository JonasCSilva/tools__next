'use client'

import { useCallback, useState } from 'react'
import { useForm } from 'react-hook-form'

import styles from './form.module.scss'

type FormData = {
  contribution: number
  time: number
  interest: number
}

export function CapitalForm() {
  const {
    handleSubmit,
    register,
    formState: { errors }
  } = useForm<FormData>()

  const [capital, setCapital] = useState<number>()

  const onSubmit = useCallback((values: FormData) => {
    const contribution = Number(values.contribution)
    const time = Number(values.time)
    const interest = Number(values.interest) / 100

    const capital = (contribution * (1 + interest) * ((1 + interest) ** time - 1)) / interest

    setCapital(Math.round(capital))
  }, [])

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className={styles.root}>
        <div>
          <label htmlFor='contribution4'>Aporte</label>
          <input
            type='number'
            id='contribution4'
            step='1'
            style={{ borderColor: errors.contribution && 'red' }}
            {...register('contribution', { required: true, min: 1 })}
          />
        </div>

        <div>
          <label htmlFor='time4'>Periodo</label>
          <input
            type='number'
            id='time4'
            step='1'
            style={{ borderColor: errors.time && 'red' }}
            {...register('time', { required: true, min: 1 })}
          />
        </div>

        <div>
          <label htmlFor='interest4'>Taxa %</label>
          <input
            type='number'
            id='interest4'
            step='0.1'
            style={{ borderColor: errors.interest && 'red' }}
            {...register('interest', { required: true, min: 0.1 })}
          />
        </div>

        <div>
          <label htmlFor='capital4'>Valor final</label>
          <input type='number' id='capital4' step='any' value={capital ? +capital.toFixed(4) : ''} disabled />
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
