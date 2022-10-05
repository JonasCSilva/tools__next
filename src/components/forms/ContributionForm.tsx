import { Group, TextInput, Box, Button, NumberInput } from '@mantine/core'
import { useForm } from '@mantine/form'
import { useState, useCallback } from 'react'

export default function ContributionForm() {
  const form = useForm({
    initialValues: {
      capital: 0,
      time: 0,
      interest: 0
    }
  })
  const [contribution, setContribution] = useState(0)

  const getResult = useCallback(
    (values: typeof form.values) => {
      const capital = Number(values.capital)
      const time = Number(values.time)
      const interest = Number(values.interest)

      const contribution = capital / (((1 + interest) ** time - 1) / interest) / (1 + interest)
      setContribution(contribution)
    },
    [form]
  )

  return (
    <Box sx={{ maxWidth: 300 }} mx='auto'>
      <form onSubmit={form.onSubmit(getResult)}>
        <TextInput disabled value={+contribution.toFixed(4)} label='Aporte' />

        <NumberInput required label='Periodo' {...form.getInputProps('time')} />

        <NumberInput step={0.0005} precision={4} required label='Taxa' {...form.getInputProps('interest')} />

        <TextInput required label='Valor final' {...form.getInputProps('capital')} />

        <Group position='center' mt='md'>
          <Button type='submit'>Submit</Button>
        </Group>
      </form>
    </Box>
  )
}
