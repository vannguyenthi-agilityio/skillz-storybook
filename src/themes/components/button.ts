// Helpers
import { convertPxToRem } from '@helpers/common';

export default {
  baseStyle: {
    borderRadius: '8px',
    fontWeight: '400',
    fontStyle: 'normal',
    lineHeight: '17px'
  },
  sizes: {
    xs: {
      px: `${convertPxToRem(11)}`,
      py: `${convertPxToRem(22)}`
    },
    sm: {
      px: `${convertPxToRem(15)}`,
      py: `${convertPxToRem(24)}`
    },
    md: {
      px: `${convertPxToRem(24)}`,
      py: `${convertPxToRem(12)}`
    },
    lg: {
      px: `${convertPxToRem(32)}`,
      py: `${convertPxToRem(16)}`
    },
    xl: {
      px: `${convertPxToRem(42)}`,
      py: `${convertPxToRem(16)}`
    },
    full: {
      width: 'full',
      py: `${convertPxToRem(17)}`
    }
  },
  variants: {
    solid: {
      _disabled: {
        outline: 'none !important'
      },
      _active: {
        outline: 'solid 1px #FFF',
        outlineOffset: -3
      }
    }
  },
  defaultProps: {
    size: 'md',
    variant: 'solid',
    colorScheme: 'blue'
  }
};
