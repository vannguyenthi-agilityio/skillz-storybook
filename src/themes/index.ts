// Libraries
import { extendTheme } from '@chakra-ui/react';

// Custom color palette
import CUSTOM_COLORS_PALETTE from './colors';

// Custom theme of Component
import buttonTheme from './components/button';
import checkboxTheme from './components/checkbox';
import avatarTheme from './components/avatar';
import modalTheme from './components/modal';

const CHAKRA_THEME = extendTheme({
  components: {
    Button: buttonTheme,
    Checkbox: checkboxTheme,
    Avatar: avatarTheme,
    Modal: modalTheme
  },
  colors: CUSTOM_COLORS_PALETTE
});

export default CHAKRA_THEME;
