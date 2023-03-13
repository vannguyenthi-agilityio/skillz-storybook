// Components
import { Flex, Text, IconButton } from '@chakra-ui/react';

import { AddIcon, UnionIcon } from '@components';

// Interface
import { ITokentsBalance } from '@interfaces/tokentsBalance.interface';

export const TokensBalance = ({ valueTokensBalance = 129, ...rest }: ITokentsBalance) => {
  return (
    <Flex
      alignItems='center'
      data-testid='tokents-balance'
      {...rest}
    >
      <UnionIcon />
      <Text px='2'>{valueTokensBalance}</Text>
      <IconButton
        display='flex'
        alignItems='center'
        aria-label='Add Icon'
        icon={<AddIcon />}
        variant='unstyled'
      />
    </Flex>
  );
};

export default TokensBalance;
