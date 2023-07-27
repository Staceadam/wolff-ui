import * as React from 'react'

import { Text } from 'react-native'
import { Flex } from 'wolff-ui'

export default function App() {
  return (
    <Flex
      p={40}
      m={40}
      display="flex"
      flex={1}
      border="10 solid orange"
      borderRadius="40 20 10 40"
      justify="center"
      align="center"
      gap={20}
    >
      <Text>Testing</Text>
      <Text>Testing</Text>
    </Flex>
  )
}
