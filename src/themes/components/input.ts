// Enums
import { COLORS } from '@enums';

const inputTheme = {
  sizes: {
    default: {
      field: {
        fontWeight: 'normal',
        lineHeight: 'sm'
      }
    }
  },
  variants: {
    default: {
      field: {
        borderColor: 'transparent',
        color: `${COLORS.BLACK}`,
        _hover: {
          borderColor: 'transparent'
        },
        _invalid: {
          borderColor: `${COLORS.RED}.600`,
          borderWidth: '1px'
        }
      }
    }
  },
  baseStyle: {
    field: {
      _placeholder: {
        color: `${COLORS.GREY}.450`
      }
    }
  }
};

export default inputTheme;
