// Helpers
import { convertPxToRem } from '@helpers/common';

// Enums
import { COLORS } from '@enums';

const selectTheme = {
  sizes: {
    default: {
      field: {
        fontSize: convertPxToRem(14),
        fontWeight: 'normal',
        pl: convertPxToRem(20),
        h: 'full'
      }
    }
  },
  variants: {
    default: {
      field: {
        borderColor: 'transparent',
        color: `${COLORS.BLACK}`,
        height: '100%',
        borderTopLeftRadius: convertPxToRem(7),
        borderBottomLeftRadius: convertPxToRem(7),
        backgroundColor: 'transparent',
        cursor: 'pointer',
        _hover: {
          borderColor: `${COLORS.BLUE}.300`
        },
        _disabled: {
          _hover: {
            cursor: 'default',
            borderColor: `${COLORS.GREY}.400`
          }
        },
        _invalid: {
          borderWidth: '1px',
          borderColor: `${COLORS.RED}.600`
        }
      },
      icon: {
        color: `${COLORS.BLACK}`
      }
    }
  }
};

export default selectTheme;
