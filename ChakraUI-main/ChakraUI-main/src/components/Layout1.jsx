import { Box,  Center,  Flex, Square, Text } from '@chakra-ui/react';
import React from 'react'

const Layout1 = () => {
  return (
    <Flex
      color="white"
      gap={["2%", "0%", "0%"]}
      flexDirection={["column", "row"]}
      h="350px"
    >
      <Center bg="blue" w={["100%", "22%"]} h={["10%", "100%"]}>
        <Text>Nav</Text>
      </Center>
      <Square bg="yellow" w={["100%", "56%"]} h={["10%", "100%"]}>
        <Text>CONTENT</Text>
      </Square>

      <Center bg="red" w={["100%", "22%"]} h={["30%", "100%"]} text>
        <Text>WIDGET</Text>
      </Center>
    </Flex>
  );
}

export default Layout1