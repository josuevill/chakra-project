import { Box, Button, Checkbox, FormControl, FormHelperText, FormLabel, Input, Textarea } from '@chakra-ui/react'
import { Form, redirect } from "react-router-dom";
import React from 'react'

export default function Create() {
  return (
    <Box maxW="480px">
      <Form method='post' action='/create'>
        <FormControl isRequired mb="40px">
          <FormLabel>Nombre de la tarea:</FormLabel>
          <Input type='text' name='title' />
          <FormHelperText>Ingrese una descripticón de la tarea</FormHelperText>
        </FormControl>

        <FormControl mb="40px">
          <FormLabel>Descriptición de la tarea</FormLabel>
          <Textarea placeholder='Ingrese en detalle la descripción de la tarea' name='description' />
        </FormControl>

        <FormControl display="flex" alignItems="center" mb="40px">
          <Checkbox name='isPriority' colorScheme='purple' size="lg" />
          <FormLabel mb="0" ml="10px">Tarea prioritaria</FormLabel>
        </FormControl>

        <Button type='submit'>Guardar</Button>
      </Form>
    </Box>
  )
}

export const createAction = async({ request }) => {
  const data = await request.formData()

  const task = {
    title: data.get('title'),
    description: data.get('description'),
    isPriority: data.get('isPriority') === ''
  }
  console.log(task)
  return redirect('/')
}