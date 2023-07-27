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
      justifyContent="center"
      alignItems="center"
      border="10 solid orange"
      borderRadius="40 10 20"
      // borderTopWidth={40}
      // borderBottomWidth={40}
    >
      <Text>Testing</Text>
    </Flex>
  )
}
