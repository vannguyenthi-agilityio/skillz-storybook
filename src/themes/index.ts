// Libraries
import { extendTheme } from '@chakra-ui/react';

// Custom color palette
import CUSTOM_COLORS_PALETTE from './colors';

import CUSTOM_FONTS from './fonts';
import CUSTOM_SHADOWS from './shadows';
import CUSTOM_FONTSIZES from './fontSizes';

// Custom theme of Component
import buttonTheme from './components/button';
import checkboxTheme from './components/checkbox';
import avatarTheme from './components/avatar';
import menuTheme from './components/menu';
import modalTheme from './components/modal';
import selectTheme from './components/select';
import inputTheme from './components/input';

const CHAKRA_THEME = extendTheme({
  components: {
    Button: buttonTheme,
    Checkbox: checkboxTheme,
    Avatar: avatarTheme,
    Menu: menuTheme,
    Modal: modalTheme,
    Select: selectTheme,
    Input: inputTheme
  },
  colors: CUSTOM_COLORS_PALETTE,
  fonts: CUSTOM_FONTS,
  shadows: CUSTOM_SHADOWS,
  fontSizes: CUSTOM_FONTSIZES
});

export default CHAKRA_THEME;
