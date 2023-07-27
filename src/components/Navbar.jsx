import { UnlockIcon } from '@chakra-ui/icons'
import { Avatar, AvatarBadge, Box, Button, Flex, HStack, Heading, Spacer, Text, useToast } from '@chakra-ui/react'
import React from 'react'

export default function Navbar() {
  const toast = useToast()
  const showToast = () => {
    toast({
      title: 'Ingreso correcto',
      description: 'Salida correcta',
      duration: 5000,
      isClosable: true,
      status: 'success',
      position: 'top',
      icon: <UnlockIcon />
    })
  }

  return (
    <Flex as="nav" p="10px" mb="60px" alignItems="center">
        <Heading as="h1" fontSize="1.5em">Mis Tareas</Heading>
        <Spacer />
        <HStack spacing="20px">
            <Avatar name="mario" bg="purple" src={"/img/mario.png"}>
              <AvatarBadge width="1.3em" bg="teal.500">
                <Text fontSize="xs" color="white">3</Text>
              </AvatarBadge>
            </Avatar>
            {/* <Box bg="gray.200" p="10px 15px" borderRadius="50%">T</Box> */}
            <Text>test@josvill.io</Text>
            <Button colorScheme='purple' onClick={showToast}>Logout</Button>
        </HStack>
    </Flex>
  )
}
