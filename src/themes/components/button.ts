import convertPxToRem from '@helpers/common';

const Button = {
  sizes: {
    default: {
      px: convertPxToRem(32),
      py: convertPxToRem(12),
      minW: convertPxToRem(120),
      fontWeight: 'normal'
    },
    medium: {
      minW: convertPxToRem(175),
      fontSize: 'md'
    },
    small: {
      minW: convertPxToRem(100)
    },
    smallExtra: {
      px: convertPxToRem(6),
      py: convertPxToRem(4),
      minW: convertPxToRem(95)
    },
    base: {
      minW: convertPxToRem(120)
    },
    large: {
      minW: convertPxToRem(180)
    },
    largeExtra: {
      minW: convertPxToRem(280),
      fontSize: 'md',
      borderRadius: '2xl',
      boxShadow: 'xl'
    },
    full: {
      fontSize: 'md',
      w: '100%'
    }
  },

  variants: {
    default: {
      bg: 'primary.100',
      color: 'default.light'
    },

    status: {
      bg: 'green.200',
    },

    transparent: {
      bg: 'transparent'
    },

    uppercase: {
      textTransform: 'uppercase'
    },

    noBorder: {
      border: 'none',
      px: '0'
    },

    muted: {
      bg: 'primary.200',
      color: 'default.light'
    },

    action: {
      p: '0',
      bg: 'default.gray'
    },

    icon: {
      border: 'none',
      px: '0',
      minW: 'auto',
      _hover: {
        background: 'transparent'
      },
    },

    selected: {
      background: 'primary.200',
      _hover: {
        background: 'primary.300',
        opacity: 1
      },
      _active: {
        background: 'primary.400'
      }
    },

    medium: {
      _hover: {
        background: 'orange.200'
      },
    }
  },
  baseStyle: {
    px: convertPxToRem(3),
    py: convertPxToRem(9),
    fontSize: 'sm',
    borderRadius: 'md',
    _focus: {
      boxShadow: ''
    }
  }
};

export default Button;
