// Helpers
import { convertPxToRem } from '@helpers/common';

// Enums
import { COLORS } from '@enums';

export const menuTheme = {
  baseStyle: {
    list: {
      py: convertPxToRem(13),
      bg: COLORS.WHITE,
      border: 'none',
      minW: convertPxToRem(212)
    },
    item: {
      py: convertPxToRem(4),
      px: convertPxToRem(20),
      color: `${COLORS.GREY}.400`,
      _hover: {
        bg: `${COLORS.BLUE}.150`
      },
      _focus: {
        bg: `${COLORS.BLUE}.150`
      }
    }
  }
};

export default menuTheme;
