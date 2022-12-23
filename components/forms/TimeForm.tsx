import { Group, TextInput, Box, Button, NumberInput } from '@mantine/core'
import { useForm } from '@mantine/form'
import { useState, useCallback } from 'react'

export default function TimeForm() {
  const form = useForm({
    initialValues: {
      contribution: 0,
      capital: 0,
      interest: 0
    }
  })
  const [capital, setCapital] = useState(0)

  const getResult = useCallback(
    (values: typeof form.values) => {
      const contribution = Number(values.contribution)
      const capital = Number(values.capital)
      const interest = Number(values.interest)

      const time =
        Math.log(
          (capital + (contribution * (1 + interest)) / interest) / ((contribution * (1 + interest)) / interest)
        ) / Math.log(1 + interest)
      setCapital(time)
    },
    [form]
  )

  return (
    <Box sx={{ maxWidth: 300 }} mx='auto'>
      <form onSubmit={form.onSubmit(getResult)}>
        <TextInput required label='Aporte' {...form.getInputProps('contribution')} />

        <NumberInput disabled value={+capital.toFixed(4)} label='Periodo' />

        <NumberInput step={0.0005} precision={4} required label='Taxa' {...form.getInputProps('interest')} />

        <TextInput required label='Valor final' {...form.getInputProps('capital')} />

        <Group position='center' mt='md'>
          <Button type='submit'>Calculate</Button>
        </Group>
      </form>
    </Box>
  )
}
