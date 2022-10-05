import { Group, TextInput, Box, Button, NumberInput } from '@mantine/core'
import { useForm } from '@mantine/form'
import { useState, useCallback } from 'react'

export default function InterestForm() {
  const form = useForm({
    initialValues: {
      contribution: 0,
      capital: 0,
      time: 0
    }
  })
  const [interest, setInterest] = useState(0)

  const getResult = useCallback(
    (values: typeof form.values) => {
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
    },
    [form]
  )

  return (
    <Box sx={{ maxWidth: 300 }} mx='auto'>
      <form onSubmit={form.onSubmit(getResult)}>
        <TextInput required label='Aporte' {...form.getInputProps('contribution')} />

        <NumberInput required label='Periodo' {...form.getInputProps('time')} />

        <NumberInput step={0.0005} precision={4} disabled value={+interest.toFixed(4)} label='Taxa' />

        <TextInput required label='Valor final' {...form.getInputProps('capital')} />

        <Group position='center' mt='md'>
          <Button type='submit'>Submit</Button>
        </Group>
      </form>
    </Box>
  )
}
