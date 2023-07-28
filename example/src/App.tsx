import * as React from 'react'
import { Alert } from 'react-native'

import { Flex, Text, Title, Pressable, Button } from 'wolff-ui'

export default function App() {
  return (
    <>
      {/* <Title size="h2" ta="center">
        EXAMPLE HEADER
      </Title>
      <Title size="h3" ta="center">
        EXAMPLE HEADER
      </Title>
      <Title size="h4" ta="center">
        EXAMPLE HEADER
      </Title>
      <Title size="h5" ta="center">
        EXAMPLE HEADER
      </Title>
      <Title size="h6" ta="center">
        EXAMPLE HEADER
      </Title> */}
      <Flex
        p={4}
        m="6"
        mt={50}
        display="flex"
        flex={1}
        // bg="blue.200"
        // backgroundColor="blue.200"
        borderRadius="40"
        align="center"
        justify="center"
        // gap={20}
      >
        <Title size="h3">EXAMPLE HEADER</Title>
        <Pressable bg="orange.500" onPress={() => Alert.alert('pressed')}>
          {({ isPressed, isHovered, isFocused }) => (
            <Flex>
              <Text>
                {JSON.stringify({ isPressed, isHovered, isFocused }, null, 2)}
              </Text>
            </Flex>
          )}
        </Pressable>
        <Button>testing</Button>
        {/* <Text
          truncate
          tt="uppercase"
          c="orange"
          ta="right"
          //TODO: td not working
          // td="line-through"
          fw={700}
          fz={20}
          fs="italic"
        >
          Testing a very long piece of text that will go off
        </Text>
        <Text fz={20}>
          <Text>Testing nested</Text>
        </Text> */}
      </Flex>
    </>
  )
}
