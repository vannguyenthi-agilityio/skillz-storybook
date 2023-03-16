// Libraries
import { checkboxAnatomy as parts } from '@chakra-ui/anatomy';
import { createMultiStyleConfigHelpers, defineStyle } from '@chakra-ui/styled-system';

// Enums
import { COLORS } from '@enums';

const { definePartsStyle, defineMultiStyleConfig } = createMultiStyleConfigHelpers(parts.keys);

// Default base style from the Checkbox theme
const baseStyle = definePartsStyle({
  control: {
    padding: 3,
    borderRadius: 0
  }
});

// Defining a custom variant
const success = definePartsStyle({
  control: defineStyle({
    rounded: 'full',
    _checked: {
      _hover: {
        background: 'green',
        borderColor: 'green'
      },
      background: 'green',
      borderColor: 'green'
    },
    _disabled: {
      background: 'white'
    }
  }),
  label: defineStyle({
    _checked: {
      color: 'green'
    }
  })
});

const danger = definePartsStyle({
  control: defineStyle({
    rounded: 'full',
    _checked: {
      _hover: {
        background: 'pink.500',
        borderColor: 'pink.500'
      },
      background: 'pink.500',
      borderColor: 'pink.500'
    },
    _disabled: {
      background: 'white'
    }
  }),
  label: defineStyle({
    _checked: {
      color: 'pink.500'
    }
  })
});

const selected = definePartsStyle({
  control: defineStyle({
    rounded: 'full',
    _checked: {
      _hover: {
        background: 'blue.700',
        borderColor: 'blue.700'
      },
      background: 'blue.700',
      borderColor: 'blue.700'
    },
    _disabled: {
      background: 'white'
    }
  })
});

const black = definePartsStyle({
  control: defineStyle({
    rounded: 'full',
    _checked: {
      _hover: {
        background: `${COLORS.BLACK}`,
        borderColor: `${COLORS.BLACK}`
      },
      background: `${COLORS.BLACK}`,
      borderColor: `${COLORS.BLACK}`
    },
    _disabled: {
      background: 'white'
    }
  })
});

const variants = {
  success: success,
  danger: danger,
  selected: selected,
  black: black
};

const sizes = {
  xl: definePartsStyle({
    control: defineStyle({
      boxSize: 14
    }),
    label: defineStyle({
      fontSize: '2xl',
      marginLeft: 6
    })
  })
};

export default defineMultiStyleConfig({
  baseStyle,
  variants,
  sizes
});
