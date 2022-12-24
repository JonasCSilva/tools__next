'use client'

import { Group, TextInput, Box, Button, NumberInput } from '@mantine/core'
import { useForm } from '@mantine/form'
import { useState, useCallback } from 'react'

export function CapitalForm() {
  const form = useForm({
    initialValues: {
      contribution: 0,
      time: 0,
      interest: 0
    }
  })
  const [capital, setCapital] = useState(0)

  const getResult = useCallback(
    (values: typeof form.values) => {
      const contribution = Number(values.contribution)
      const time = Number(values.time)
      const interest = Number(values.interest)

      const capital = (contribution * (1 + interest) * ((1 + interest) ** time - 1)) / interest
      setCapital(capital)
    },
    [form]
  )

  return (
    <Box sx={{ maxWidth: 300 }} mx='auto'>
      <form onSubmit={form.onSubmit(getResult)}>
        <TextInput required label='Aporte' {...form.getInputProps('contribution')} />

        <NumberInput required label='Periodo' {...form.getInputProps('time')} />

        <NumberInput step={0.0005} precision={4} required label='Taxa' {...form.getInputProps('interest')} />

        <TextInput disabled value={+capital.toFixed(4)} label='Valor final' />

        <Group position='center' mt='md'>
          <Button type='submit'>Calculate</Button>
        </Group>
      </form>
    </Box>
  )
}
