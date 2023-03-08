// Libraries
import { modalAnatomy as parts } from '@chakra-ui/anatomy';
import { createMultiStyleConfigHelpers, defineStyle } from '@chakra-ui/styled-system';

// Helpers
import { convertPxToRem } from '@helpers';

const { definePartsStyle, defineMultiStyleConfig } = createMultiStyleConfigHelpers(parts.keys);

const baseStyle = definePartsStyle({
  dialog: defineStyle({
    borderRadius: '10px',
    borderRight: '15px solid',
    borderLeft: '15px solid',
    borderColor: 'blue.500',
    w: '100%',
    boxSizing: 'content-box'
  }),
  header: defineStyle({
    fontWeight: 300,
    fontSize: '24px',
    lineHeight: '29px'
  }),
  body: defineStyle({
    fontWeight: 300,
    fontSize: '14px',
    lineHeight: '20px'
  })
});

const sizes = {
  lg: definePartsStyle({
    dialog: {
      maxWidth: '770px'
    },
    header: defineStyle({
      p: `${convertPxToRem(30)} ${convertPxToRem(35)} 0`
    }),
    body: defineStyle({
      p: `${convertPxToRem(10)} ${convertPxToRem(35)} 0`
    }),
    footer: defineStyle({
      py: `${convertPxToRem(30)}`
    })
  }),
  md: definePartsStyle({
    dialog: {
      maxWidth: '530px'
    },
    header: defineStyle({
      p: `${convertPxToRem(30)} ${convertPxToRem(35)} 0`
    }),
    body: defineStyle({
      p: `${convertPxToRem(10)} ${convertPxToRem(35)} 0`
    }),
    footer: defineStyle({
      pt: `${convertPxToRem(30)}`,
      pb: `${convertPxToRem(40)}`
    })
  }),
  sm: defineStyle({
    dialog: {
      maxWidth: '330px'
    },
    header: defineStyle({
      p: `${convertPxToRem(20)} ${convertPxToRem(35)} 0`
    }),
    body: defineStyle({
      p: `${convertPxToRem(10)} ${convertPxToRem(35)} 0`
    }),
    footer: defineStyle({
      p: `${convertPxToRem(40)}`
    })
  })
};

export default defineMultiStyleConfig({
  baseStyle,
  sizes,
  defaultProps: {
    size: 'md'
  }
});
