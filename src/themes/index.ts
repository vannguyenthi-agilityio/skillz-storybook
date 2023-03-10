// Libraries
import { extendTheme } from '@chakra-ui/react';

// Custom color palette
import CUSTOM_COLORS_PALETTE from './colors';

import CUSTOM_FONTS from './fonts';
import CUSTOM_SHADOWS from './shadows';

// Custom theme of Component
import buttonTheme from './components/button';
import checkboxTheme from './components/checkbox';
import avatarTheme from './components/avatar';
import menuTheme from './components/menu';
import modalTheme from './components/modal';

const CHAKRA_THEME = extendTheme({
  components: {
    Button: buttonTheme,
    Checkbox: checkboxTheme,
    Avatar: avatarTheme,
    Menu: menuTheme,
    Modal: modalTheme
  },
  colors: CUSTOM_COLORS_PALETTE,
  fonts: CUSTOM_FONTS,
  shadows: CUSTOM_SHADOWS
});

export default CHAKRA_THEME;
