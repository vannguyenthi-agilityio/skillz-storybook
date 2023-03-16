// Components
import { Box, Button, Divider, FormControl, FormLabel, HStack, Input, Stack, Text } from '@chakra-ui/react';
import { RightArrowIcon, MetaMaskIcon } from '@components';

// Enums
import { COLORS } from '@enums';

// Helpers
import { convertPxToRem } from '@helpers';

const SignInForm = () => (
  <Box
    bg='grey.50'
    px={convertPxToRem(45)}
    pt={convertPxToRem(30)}
    pb={convertPxToRem(150)}
    borderRadius='7px'
    boxShadow='lg'
    data-testid='signin-form'
  >
    <Stack>
      <Stack>
        <Text
          fontSize='24px'
          color={`${COLORS.BLUE}.450`}
        >
          Welcome <Text as='b'>back</Text>
        </Text>
        <Text
          fontSize='14px'
          color={`${COLORS.GREY}.500`}
        >
          Login to your account
        </Text>
      </Stack>
      <form>
        <Box>
          <Stack spacing={convertPxToRem(30)}>
            <FormControl>
              <FormLabel
                fontSize='14px'
                textTransform='uppercase'
              >
                Username
              </FormLabel>
              <Input
                bg={COLORS.WHITE}
                defaultValue=''
              />
            </FormControl>
            <FormControl>
              <HStack justify='space-between'>
                <FormLabel
                  fontSize='14px'
                  textTransform='uppercase'
                >
                  Password
                </FormLabel>
                <Button
                  variant='link'
                  color={`${COLORS.BLUE}.400`}
                  fontSize='14px'
                >
                  Forgot your password?
                </Button>
              </HStack>
              <Input
                bg={COLORS.WHITE}
                defaultValue=''
              />
            </FormControl>

            <HStack justify='space-between'>
              <Box>
                <Text
                  fontSize='14px'
                  color={`${COLORS.GREY}.500`}
                  pb='10px'
                >
                  Don&rsquo;t have an account?
                </Text>
                <Button
                  variant='link'
                  leftIcon={<RightArrowIcon />}
                  colorScheme={COLORS.PINK}
                  fontSize='14px'
                  type='submit'
                >
                  Click to sign up
                </Button>
              </Box>
              <Box>
                <Button
                  size='xl'
                  fontSize='14px'
                >
                  Login
                </Button>
              </Box>
            </HStack>
          </Stack>
        </Box>
      </form>
    </Stack>
    <Divider
      my={convertPxToRem(30)}
      borderWidth='1px'
      borderColor={`${COLORS.GREY}.150`}
    />
    <Button
      size='full'
      fontSize='18px'
      leftIcon={<MetaMaskIcon />}
      colorScheme={COLORS.ORANGE}
    >
      Connect to MetaMask
    </Button>
  </Box>
);

export default SignInForm;
