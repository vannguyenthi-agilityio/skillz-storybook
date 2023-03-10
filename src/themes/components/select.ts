// Helpers
import { convertPxToRem } from '@helpers/common';

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
        color: 'black',
        height: '100%',
        borderTopLeftRadius: convertPxToRem(7),
        borderBottomLeftRadius: convertPxToRem(7),
        backgroundColor: 'transparent',
        cursor: 'pointer',
        _hover: {
          borderColor: 'blue.300'
        },
        _disabled: {
          _hover: {
            cursor: 'default',
            borderColor: 'grey.400'
          }
        },
        _invalid: {
          border: 'error.600 1px solid'
        }
      },
      icon: {
        color: 'black'
      }
    }
  }
};

export default selectTheme;
