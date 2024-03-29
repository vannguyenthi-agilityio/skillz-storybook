// Libraries
import { extendTheme } from '@chakra-ui/react';

// Custom color palette
import CUSTOM_COLORS_PALETTE from './colors';

import CUSTOM_FONTS from './fonts';
import CUSTOM_SHADOWS from './shadows';
import CUSTOM_RADIUS from './radius';
import CUSTOM_FONTSIZES from './fontSizes';

// Custom theme of Component
import buttonTheme from './components/button';
import checkboxTheme from './components/checkbox';
import avatarTheme from './components/avatar';
import menuTheme from './components/menu';
import modalTheme from './components/modal';
import selectTheme from './components/select';
import inputTheme from './components/input';
import cardTheme from './components/card';

const CHAKRA_THEME = extendTheme({
  components: {
    Button: buttonTheme,
    Checkbox: checkboxTheme,
    Avatar: avatarTheme,
    Menu: menuTheme,
    Modal: modalTheme,
    Select: selectTheme,
    Input: inputTheme,
    Card: cardTheme
  },
  colors: CUSTOM_COLORS_PALETTE,
  fonts: CUSTOM_FONTS,
  shadows: CUSTOM_SHADOWS,
  radii: CUSTOM_RADIUS,
  fontSizes: CUSTOM_FONTSIZES
});

export default CHAKRA_THEME;
