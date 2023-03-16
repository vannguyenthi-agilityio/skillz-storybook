import { Flex, Heading, Text, Divider, Button } from '@chakra-ui/react';

// Components
import { CharityIcon, MaskIcon, SignInIcon } from '@components/Icons';
import { SearchFilterInput } from '@components/SearchFilterInput';
import { UserDropDownMenu } from '@components/UserDropDownMenu';
import { LogoIcon } from '@components';

// Interface
import { User } from '@interfaces/userDropDown.interface';

// Helpers
import { convertPxToRem, isEmpty } from '@helpers/common';

// Enums
import { COLORS } from '@enums';

interface HeaderProps {
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  userInfo?: User;
}

const Header = ({ userInfo, ...rest }: HeaderProps) => {
  const hasUserInfo = !isEmpty(userInfo);

  return (
    <Flex
      p={{ base: '2px', sm: convertPxToRem(14), '2xl': convertPxToRem(24) }}
      h={{ base: 'auto', '2xl': convertPxToRem(80) }}
      alignItems='center'
      justifyContent={{ base: 'center', lg: 'space-between' }}
      flexDirection={{ base: 'column', lg: 'row' }}
      flexWrap='wrap'
      w='100%'
      data-testid='header'
    >
      <Flex
        alignItems='center'
        mb={{ base: convertPxToRem(20), lg: '0' }}
      >
        <LogoIcon />
        <Heading
          as='h2'
          fontSize='2xl'
          ml='3'
          textTransform='uppercase'
          color={`${COLORS.GREY}.150`}
        >
          Logo
        </Heading>
      </Flex>
      <Flex
        flexDirection={{ base: 'column', lg: 'row' }}
        ml={{ base: '0', lg: convertPxToRem(10), xl: convertPxToRem(50), '2xl': convertPxToRem(118) }}
        alignItems='center'
        minWidth='80%'
        justifyContent={{ base: 'center', lg: 'space-between' }}
      >
        <Flex
          minWidth={{
            base: convertPxToRem(350),
            sm: convertPxToRem(450),
            lg: convertPxToRem(550),
            xl: convertPxToRem(600),
            '2xl': convertPxToRem(610)
          }}
          alignItems='center'
          justifyContent='center'
        >
          <Button
            leftIcon={<CharityIcon />}
            bg={`${COLORS.CYAN}.500`}
            minW={{
              base: convertPxToRem(145),
              sm: convertPxToRem(150),
              md: convertPxToRem(155),
              xl: convertPxToRem(175),
              '2xl': convertPxToRem(175)
            }}
            size='xs'
            mr={{ base: convertPxToRem(10), sm: convertPxToRem(20), lg: convertPxToRem(25), '2xl': convertPxToRem(34) }}
          >
            <Text
              ml='1'
              fontSize={{ base: 'xs', md: 'sm', lg: 'md' }}
            >
              Examination
            </Text>
          </Button>
          <SearchFilterInput
            size='sm'
            maxW={{
              base: convertPxToRem(300),
              sm: convertPxToRem(350),
              lg: convertPxToRem(400),
              '2xl': convertPxToRem(500)
            }}
          />
        </Flex>
        <Flex
          ml={{ base: '0', lg: convertPxToRem(10), xl: convertPxToRem(100), '2xl': convertPxToRem(240) }}
          mt={{ base: convertPxToRem(20), lg: '0' }}
          alignItems='center'
        >
          <Button
            leftIcon={<MaskIcon />}
            bg={`${COLORS.ORANGE}.600`}
            mr={{ base: convertPxToRem(20), '2xl': convertPxToRem(24) }}
            size={{ base: 'xs', md: 'sm' }}
            colorScheme={`${COLORS.ORANGE}.200`}
            onClick={rest.onClick}
          >
            <Text
              ml='1'
              fontSize='sm'
            >
              MetaMask
            </Text>
          </Button>
          <Divider
            h='45px'
            orientation='vertical'
            mr={{ base: convertPxToRem(20), '2xl': convertPxToRem(24) }}
            borderColor={COLORS.BLACK}
          />
          {hasUserInfo ? (
            <Flex alignItems='center'>
              <UserDropDownMenu userInfo={userInfo}>{}</UserDropDownMenu>
            </Flex>
          ) : (
            <Flex alignItems='center'>
              <SignInIcon />
              <Text
                ml='2'
                fontSize='sm'
                color={`${COLORS.GREY}.800`}
              >
                Sign in
              </Text>
            </Flex>
          )}
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Header;
