import { convertPxToRem } from '@helpers/common';

const avatarTheme = {
  sizes: {
    '3xl': {
      container: {
        width: convertPxToRem(165),
        height: convertPxToRem(165),
        borderWidth: convertPxToRem(12)
      }
    },
    '4xl': {
      container: {
        width: convertPxToRem(238),
        height: convertPxToRem(238),
        borderWidth: convertPxToRem(14)
      }
    },
    xl: {
      container: {
        borderWidth: convertPxToRem(8)
      }
    },
    '2xl': {
      container: {
        borderWidth: convertPxToRem(10)
      }
    },
    '5xl': {
      container: {
        borderWidth: convertPxToRem(15),
        maxWidth: convertPxToRem(400)
      }
    }
  },
  variants: {
    border: {
      container: {
        filter: 'drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.1)) drop-shadow(0px 10px 10px rgba(0, 0, 0, 0.15))'
      }
    }
  },
  baseStyle: {
    default: {
      width: 'md'
    }
  }
};

export default avatarTheme;
