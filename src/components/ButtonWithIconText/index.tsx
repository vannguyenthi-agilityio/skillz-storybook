// Components
import { Flex, Button, Text } from '@chakra-ui/react';
import { CreateIcon, StarLayoutIcon } from '@components';

// Enums
import { COLORS } from '@enums';

// Helpers
import { convertPxToRem } from '@helpers/common';

// Themes
import CUSTOM_COLORS_PALETTE from '@themes/colors';

// Interface
import { IButtonWithIconText } from '@interfaces/buttonWithIconText.interface';

export const ButtonWithIconText = ({
  valueTokens = '',
  colorScheme = `${COLORS.CYAN}.500`,
  bgColorBoxText = `${COLORS.CYAN}.400`,
  icon = <CreateIcon />,
  textAction = 'Create',
  textType = 'an examination',
  isActive,
  ...rest
}: IButtonWithIconText) => {
  return (
    <Button
      alignItems='center'
      data-testid={`btn-${textAction}`}
      bg={colorScheme}
      w={convertPxToRem(190)}
      h={convertPxToRem(280)}
      justifyContent='center'
      p='0'
      isActive={isActive}
      borderRadius='xl'
      flexDirection='column'
      onClick={rest.onClick}
      {...rest}
    >
      {valueTokens && (
        <Flex
          w='full'
          alignItems='center'
          justifyContent='end'
          mb='4'
        >
          <StarLayoutIcon
            w={convertPxToRem(24)}
            h={convertPxToRem(24)}
            bgColor={isActive ? CUSTOM_COLORS_PALETTE.orange[500] : CUSTOM_COLORS_PALETTE.yellow[750]}
          />
          <Text
            px='2'
            fontSize='lg'
            color={isActive ? 'black' : 'yellow.750'}
          >
            {valueTokens}
          </Text>
        </Flex>
      )}
      <Flex
        alignItems='center'
        justifyContent='center'
        aria-label={`Icon ${textAction}`}
        borderColor='grey.850'
        borderStyle='solid'
        borderWidth='2px'
        borderRadius='full'
        w={convertPxToRem(80)}
        h={convertPxToRem(80)}
      >
        {icon}
      </Flex>
      <Flex
        flexDirection='column'
        textAlign='center'
        w='full'
        mb='4'
        py={convertPxToRem(7)}
        mt={convertPxToRem(31)}
        color='grey.850'
        backgroundColor={`${bgColorBoxText}`}
      >
        <Text
          fontSize='4xl'
          fontWeight='300'
          lineHeight={convertPxToRem(40)}
        >
          {textAction}
        </Text>
        <Text
          fontSize='xl'
          fontWeight='300'
          lineHeight={convertPxToRem(36)}
        >
          {textType}
        </Text>
      </Flex>
    </Button>
  );
};

export default ButtonWithIconText;
