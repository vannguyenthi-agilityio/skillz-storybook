// Helpers
import { convertPxToRem } from '@helpers/common';

export default {
  baseStyle: {
    borderRadius: '8px',
    fontWeights: '400',
    fontStyle: 'normal',
    lineHeight: '2rem'
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
      //TODO: Add large size if has any
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
