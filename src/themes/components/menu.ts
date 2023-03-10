// Helpers
import { convertPxToRem } from '@helpers/common';

export const menuTheme = {
  baseStyle: {
    list: {
      py: convertPxToRem(13),
      bg: 'white',
      border: 'none',
      minW: convertPxToRem(212)
    },
    item: {
      py: convertPxToRem(4),
      px: convertPxToRem(20),
      color: 'grey.400',
      _hover: {
        bg: 'blue.150'
      },
      _focus: {
        bg: 'blue.150'
      }
    }
  }
};

export default menuTheme;
