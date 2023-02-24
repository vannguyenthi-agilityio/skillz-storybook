const Button = {
  sizes: {
    default: {
      px: '2rem',
      py: '0.72rem',
      minW: '7.5rem',
      fontWeight: 'normal'
    },
    medium: {
      minW: '10.93rem',
      fontSize: 'md'
    },
    small: {
      minW: '6.25rem'
    },
    smallExtra: {
      px: '0.375rem',
      py: '0.2rem',
      minW: '5.9375rem'
    },
    base: {
      minW: '7.5rem'
    },
    large: {
      minW: '11.25rem'
    },
    largeExtra: {
      minW: '17.5rem'
    },
    full: {
      fontSize: 'md',
      w: '100%'
    }
  },

  variants: {
    colorDefault: {
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
    px: '0.16rem',
    py: '0.58rem',
    fontSize: 'sm',
    borderRadius: '0.4375rem',
    _focus: {
      boxShadow: ''
    }
  }
};

export default Button;
