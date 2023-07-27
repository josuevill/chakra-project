import { ChatIcon, CheckCircleIcon, EmailIcon, StarIcon, WarningIcon } from '@chakra-ui/icons'
import { List, ListIcon, ListItem, Tab, TabList, TabPanel, TabPanels, Tabs } from '@chakra-ui/react'
import React from 'react'

export default function Profile() {
  return (
    <Tabs mt="40px" p="20px" variant="enclosed" colorScheme='purple'>
      <TabList>
        <Tab _selected={{ color: 'white', bg: 'purple.400' }}>Información</Tab>
        <Tab _selected={{ color: 'white', bg: 'purple.400' }}>Historial</Tab>
      </TabList>
      <TabPanels>
        <TabPanel>
          <List spacing={4}>
            <ListItem>
              <ListIcon as={EmailIcon} />
              Email: test@josvill.io
            </ListItem>
            <ListItem>
              <ListIcon as={ChatIcon} />
              Lorem ipsum dolor sit amet.
            </ListItem>
            <ListItem>
              <ListIcon as={StarIcon} />
              Lorem ipsum dolor sit amet.
            </ListItem>
          </List>
        </TabPanel>
        <TabPanel>
          <List spacing={4}>
            <ListItem>
              <ListIcon as={CheckCircleIcon} color="teal.400"/>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus, voluptatum!
            </ListItem>
            <ListItem>
              <ListIcon as={WarningIcon} color="red.400"/>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, consectetur?
            </ListItem>
            <ListItem>
              <ListIcon as={CheckCircleIcon} color="teal.400" />
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorem, eligendi!
            </ListItem>
            <ListItem>
              <ListIcon as={WarningIcon} color="red.400"/>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab, in?
            </ListItem>
            <ListItem>
              <ListIcon as={CheckCircleIcon} color="teal.400" />
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, eos.
            </ListItem>
          </List>
        </TabPanel>
      </TabPanels>
    </Tabs>
  )
}
