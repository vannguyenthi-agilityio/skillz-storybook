// Components
import { Box, Button, FormControl, FormLabel, HStack, Input, Stack, Text } from '@chakra-ui/react';
import { RightArrowIcon, Select } from '@components';

// Helpers
import { convertPxToRem } from '@helpers';

const roles = [
  { label: 'Candidate', value: 'candidate' },
  { label: 'Evaluator', value: 'evaluator' },
  { label: 'Instructor', value: 'instructor' },
  { label: 'Recruiter', value: 'recruiter' }
];

const SignUpForm = () => (
  <Box
    bg='grey.50'
    px={convertPxToRem(45)}
    pt={convertPxToRem(30)}
    pb={convertPxToRem(150)}
    borderRadius='7px'
    boxShadow='lg'
    data-testid='signup-form'
  >
    <Stack>
      <Stack>
        <Text
          fontSize='24px'
          color='blue.450'
        >
          Register a <Text as='b'>New Account</Text>
        </Text>
        <Text
          fontSize='14px'
          color='grey.500'
        >
          Fill out the form to get started.
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
              <Input bg='white' />
            </FormControl>
            <FormControl>
              <FormLabel
                fontSize='14px'
                textTransform='uppercase'
              >
                Email address
              </FormLabel>
              <Input bg='white' />
            </FormControl>
            <HStack spacing='30px'>
              <Box w='full'>
                <FormControl>
                  <FormLabel
                    fontSize='14px'
                    textTransform='uppercase'
                  >
                    Password
                  </FormLabel>
                  <Input
                    px={convertPxToRem(20)}
                    bg='white'
                  />
                </FormControl>
              </Box>
              <Box w='full'>
                <FormControl>
                  <FormLabel
                    fontSize='14px'
                    textTransform='uppercase'
                  >
                    Confirm password
                  </FormLabel>
                  <Input
                    px={convertPxToRem(20)}
                    bg='white'
                  />
                </FormControl>
              </Box>
            </HStack>
            <FormControl>
              <FormLabel
                fontSize='14px'
                textTransform='uppercase'
              >
                Select Role
              </FormLabel>
              <Select
                options={roles}
                value={roles[0].value}
                bg='white'
              />
            </FormControl>
            <HStack justify='space-between'>
              <Box>
                <Text
                  fontSize='14px'
                  color='grey.500'
                  pb='10px'
                >
                  Already have an account?
                </Text>
                <Button
                  variant='link'
                  leftIcon={<RightArrowIcon />}
                  color='pink.600'
                  fontSize='14px'
                  type='submit'
                >
                  Click to sign in
                </Button>
              </Box>
              <Box>
                <Button
                  size='lg'
                  fontSize='14px'
                >
                  Create an Account
                </Button>
              </Box>
            </HStack>
          </Stack>
        </Box>
      </form>
    </Stack>
  </Box>
);

export default SignUpForm;
