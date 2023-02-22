import { Box, Button, Flex, Heading, HStack, Spacer, Text } from '@chakra-ui/react';

const NavBar = () => {
  return (
    <Flex as='nav' p='10px' alignItems='center'>
      <Heading as='h1'>Application</Heading>
      <Spacer />
      <HStack spacing='20px'>
        <Box bg='gray.200' p='10px' borderRadius='50%'>
          N
        </Box>
        <Text>ngocquang2509@gmail.com</Text>
        <Button colorScheme='blue'>Logout</Button>
      </HStack>
    </Flex>
  );
};

export default NavBar;
