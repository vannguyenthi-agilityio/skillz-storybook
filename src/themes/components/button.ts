import convertPxToRem from '@helpers/common';

const Button = {
  sizes: {
    default: {
      px: convertPxToRem(32),
      py: convertPxToRem(12),
      minW: convertPxToRem(120),
      fontWeight: 'normal'
    },
    md: {
      minW: convertPxToRem(175),
      fontSize: 'md'
    },
    xs: {
      minW: convertPxToRem(100)
    },
    sm: {
      px: convertPxToRem(6),
      py: convertPxToRem(4),
      minW: convertPxToRem(95)
    },
    base: {
      minW: convertPxToRem(120)
    },
    lg: {
      minW: convertPxToRem(180)
    },
    lx: {
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
    color: 'default.light',
    borderRadius: 'sm',
    background: 'primary.100',
    _focus: {
      boxShadow: ''
    },
    _disabled: {
      opacity: 0.4,
      cursor: 'not-allowed',
      boxShadow: 'none',
    },
    _hover: {
      _disabled: {
        bg: 'grey.100',
      },
    },
  }
};

export default Button;
