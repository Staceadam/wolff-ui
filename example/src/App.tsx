import * as React from 'react'
import { ThemeProvider, Text, Flex, Button } from 'wolff-ui'

import { theme } from './theme'

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      {/* <Box flex={1} bg="cardPrimaryBackground" justifyContent="center" alignItems="center">
        <Text variant="h1">Testing</Text>
      </Box> */}
      <Flex margin="l">
        <Text variant="h1">Testing</Text>
        <Text variant="h2">Testing</Text>
        <Button hitSlop={{ top: 12 }} margin="s">
          testing
        </Button>
      </Flex>
    </ThemeProvider>
  )
}
