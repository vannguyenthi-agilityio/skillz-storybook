// Components
import { Flex, Text, Divider } from '@chakra-ui/react';
import { StarLayoutIcon } from '@components';

// Interface
import type { ITransaction } from '@interfaces/transaction.interface';

// Helpers
import { convertPxToRem } from '@helpers/common';

export const Transaction = ({
  label = '',
  content = '',
  score,
  timeDate = '',
  bgColorIcon = '',
  icon,
  ...rest
}: ITransaction) => {
  return (
    <Flex
      maxW={convertPxToRem(900)}
      w='full'
      data-testid={`transaction`}
      flexDirection='column'
      {...rest}
    >
      <Flex
        alignItems='center'
        w='full'
        justifyContent='space-between'
        flexDirection={{ base: 'column', md: 'row' }}
      >
        <Flex
          justifyContent='center'
          alignItems='center'
        >
          <Flex
            bg={bgColorIcon}
            borderRadius='full'
            w={convertPxToRem(48)}
            h={convertPxToRem(48)}
            justifyContent='center'
            alignItems='center'
          >
            {icon}
          </Flex>
          <Flex
            ml={{ base: convertPxToRem(10), sm: convertPxToRem(20), md: convertPxToRem(26) }}
            flexDirection='column'
            color='grey.850'
            fontSize='base'
          >
            <Text fontWeight='light'>{label}:</Text>
            <Text fontWeight='bold'>{content}</Text>
          </Flex>
        </Flex>
        <Flex
          justifyContent='center'
          alignItems='center'
          fontWeight='normal'
        >
          <Text
            fontSize='sm'
            pl='3'
          >
            {timeDate}
          </Text>
          <Flex
            justifyContent='center'
            alignItems='center'
            ml={{ base: convertPxToRem(10), sm: convertPxToRem(20), md: convertPxToRem(50), '2xl': convertPxToRem(60) }}
          >
            <Text px='2'>{score}</Text>
            <StarLayoutIcon />
          </Flex>
        </Flex>
      </Flex>
      <Divider
        mt='5'
        borderColor='grey.150'
      />
    </Flex>
  );
};

export default Transaction;
