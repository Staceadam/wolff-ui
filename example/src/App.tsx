import * as React from 'react'

// import { Text } from 'react-native'
import { Flex, Text } from 'wolff-ui'

export default function App() {
  return (
    <Flex
      p={40}
      m={40}
      display="flex"
      flex={1}
      border="10 solid orange"
      borderRadius="40"
      justify="center"
      align="center"
      gap={20}
    >
      <Text
        truncate
        tt="lowercase"
        c="orange"
        ta="right"
        td="line-through"
        fw={700}
        fz={20}
        fs="italic"
      >
        Testing a very long piece of text that will go off
      </Text>
      <Text fz={20}>
        <Text>Testing nested</Text>
      </Text>
    </Flex>
  )
}
