import { EditIcon, ViewIcon } from '@chakra-ui/icons';
import { Box, CardHeader, Container, Flex, Card, SimpleGrid, Text, Heading, CardBody, Divider, CardFooter, HStack, Button, Avatar } from '@chakra-ui/react'
import React from 'react'
import { useLoaderData } from "react-router-dom";

export default function Dashboard() {

  // const boxStyles = {
  //   p: "10px",
  //   bg: "purple.400",
  //   color: "white",
  //   m: "10px",
  //   textAling: 'center',
  //   ':hover': {
  //     color: 'black',
  //   },
  //   filter: 'blur(2px)'
  // }

  const tasks = useLoaderData()

  return (
    <SimpleGrid spacing={10} minChildWidth={300}>
      {tasks && tasks.map(task => (
        <Card key={task.id} borderTop="8px" borderColor="purple.400" bg="white">
          <CardHeader color="gray.700">
            <Flex gap={5}>
              <Avatar  src={task.img} />
              <Box>
                <Heading as="h3" size="sm">{task.title}</Heading>
                <Text>autor: {task.author}</Text>
              </Box>
            </Flex>
          </CardHeader>

          <CardBody color="gray.500">
            <Text>{task.description}</Text>
          </CardBody>

          <Divider borderColor="gray.200" />

          <CardFooter>
            <HStack>
              <Button variant="ghost" leftIcon={<ViewIcon />}>Mostrar</Button>
              <Button variant="ghost" leftIcon={<EditIcon />}>Comentar</Button>
            </HStack>
          </CardFooter>

        </Card>
      ))}
    </SimpleGrid>
  )
}

export const tasksLoader = async() => {
  const res = await fetch('http://localhost:3000/tasks')
  return res.json()
}

    // <SimpleGrid p="10px" column={4} spacing={10} minChildWidth={250}>
    //   <Box bg="white" height="200px" border="1px solid">
    //     <Text color={{ base: 'pink', md: 'blue', lg: 'green' }}>Hola</Text>
    //   </Box>
    //   <Box bg="white" height="200px" border="1px solid"></Box>
    //   <Box bg="white" height="200px" border="1px solid"></Box>
    //   <Box bg="white" height="200px" border="1px solid"></Box>

    //   <Box bg="white" height="200px" border="1px solid"></Box>
    //   <Box bg="white" height="200px" border="1px solid"></Box>
    //   <Box bg="white" height="200px" border="1px solid"></Box>
    //   <Box bg="white" height="200px" border="1px solid"></Box>

    //   <Box bg="white" height="200px" border="1px solid"></Box>
    //   <Box bg="white" height="200px" border="1px solid"></Box>
    //   <Box bg="white" height="200px" border="1px solid"></Box>
    //   <Box bg="white" height="200px" border="1px solid"></Box>
    // </SimpleGrid>

    // <Container as="section" maxWidth="4xl" py="20">
    //   <Heading my="30px" p="10px">Chakra UI Components</Heading>
    //     <Text marginLeft="30px">Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore mollitia at quia cumque perferendis aperiam.</Text>
    //     <Text ml="30px" color="blue.300">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sint iusto aut magni, tenetur dolores eligendi?</Text>
    //     <Box my="30px" p="20px" bg="orange">
    //       <Text>This is a Box</Text>
    //     </Box>

    //     <Box sx={boxStyles}>Lorem ipsum dolor sit amet.</Box>
    // </Container>

