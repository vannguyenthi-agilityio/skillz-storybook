// Libraries
import { extendTheme } from '@chakra-ui/react';

// Custom color palette
import CUSTOM_COLORS_PALETTE from './colors';

// Custom theme of Component
import { ButtonVariants as Button } from './components/button';

const CHAKRA_THEME = extendTheme({
  components: {
    Button
  },
  colors: CUSTOM_COLORS_PALETTE
});

export default CHAKRA_THEME;
