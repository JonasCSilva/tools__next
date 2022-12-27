'use client'

import { useCallback, useState } from 'react'
import { useForm } from 'react-hook-form'

import styles from './form.module.scss'

type FormData = {
  contribution: number
  capital: number
  interest: number
}

export function TimeForm() {
  const {
    handleSubmit,
    register,
    formState: { errors }
  } = useForm<FormData>()

  const [time, setTime] = useState<number>()

  const onSubmit = useCallback((values: FormData) => {
    const contribution = Number(values.contribution)
    const capital = Number(values.capital)
    const interest = Number(values.interest) / 100

    const time =
      Math.log((capital + (contribution * (1 + interest)) / interest) / ((contribution * (1 + interest)) / interest)) /
      Math.log(1 + interest)

    setTime(Math.round(time))
  }, [])

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className={styles.root}>
        <div>
          <label htmlFor='contribution2'>Aporte</label>
          <input
            type='number'
            id='contribution2'
            step='1'
            style={{ borderColor: errors.contribution && 'red' }}
            {...register('contribution', { required: true, min: 1 })}
          />
        </div>

        <div>
          <label htmlFor='time2'>Periodo</label>
          <input type='number' id='time2' value={time ? +time.toFixed(4) : ''} disabled />
        </div>

        <div>
          <label htmlFor='interest2'>Taxa %</label>
          <input
            type='number'
            id='interest2'
            step='0.1'
            style={{ borderColor: errors.interest && 'red' }}
            {...register('interest', { required: true, min: 0.1 })}
          />
        </div>

        <div>
          <label htmlFor='capital2'>Valor final</label>
          <input
            type='number'
            id='capital2'
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
