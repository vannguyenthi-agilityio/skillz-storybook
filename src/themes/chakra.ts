// Libraries
import { extendTheme } from '@chakra-ui/react';

// Custom theme
import { ButtonVariants as Button } from './components/button';

const CHAKRA_THEME = extendTheme({
  components: {
    Button
  }
});

export default CHAKRA_THEME;
