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
    sm: {
      //TODO: Add small size if has any
    },
    md: {
      px: `${convertPxToRem(24)}`,
      py: `${convertPxToRem(12)}`
    },
    lg: {
      px: `${convertPxToRem(32)}`,
      py: `${convertPxToRem(16)}`
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
