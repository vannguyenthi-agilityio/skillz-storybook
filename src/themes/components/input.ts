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
        color: 'black',
        _hover: {
          borderColor: 'transparent'
        },
        _invalid: {
          borderColor: 'error.600',
          borderWidth: '1px'
        }
      }
    }
  },
  baseStyle: {
    field: {
      _placeholder: {
        color: 'grey.450'
      }
    }
  }
};

export default inputTheme;
