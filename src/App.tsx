import { Box, Button, Flex, Heading, HStack, Spacer, Text } from '@chakra-ui/react';

function App() {
  return (
    <Flex as='nav' p='10px' alignItems='center'>
      <Heading as='h1'>Logo</Heading>
      <Spacer />
      <HStack spacing='20px'>
        <Box bg='gray.200' p='10px' borderRadius='50%'>
          N
        </Box>
        <Text>Some text here</Text>
        <Button colorScheme='blue'>Logout</Button>
      </HStack>
    </Flex>
  );
}

export default App;
