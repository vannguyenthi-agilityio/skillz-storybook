// Libraries
import { cardAnatomy } from '@chakra-ui/anatomy';
import { createMultiStyleConfigHelpers } from '@chakra-ui/react';

// Enums
import { COLORS } from '@enums';

// Helpers
import { convertPxToRem } from '@helpers';

const { definePartsStyle, defineMultiStyleConfig } = createMultiStyleConfigHelpers(cardAnatomy.keys);

// Define the base component styles
const baseStyle = definePartsStyle((props) => {
  const { colorScheme: color } = props;
  return {
    container: {
      px: 0,
      borderRadius: `${convertPxToRem(15)}`,
      bg: `${color}.400`,
      boxShadow: 'none'
      //TODO: set border
    },
    footer: {
      bg: `${color}.500`
    }
  };
});

export default defineMultiStyleConfig({
  baseStyle,
  defaultProps: {
    colorScheme: COLORS.LIME
  }
});
