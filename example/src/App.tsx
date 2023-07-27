import * as React from 'react'

import { Flex, Text, Title } from 'wolff-ui'

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
        p={10}
        m={20}
        mt={50}
        display="flex"
        flex={1}
        border="10 solid orange"
        borderRadius="40"
        align="center"
        // gap={20}
      >
        <Title size="h3" ta="center">
          EXAMPLE HEADER
        </Title>
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
    </>
  )
}
