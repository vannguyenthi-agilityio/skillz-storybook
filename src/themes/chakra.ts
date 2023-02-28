import { extendTheme } from '@chakra-ui/react';
import colors from './colors';
import shadows from './shadows';
import fontSizes from './fontSizes';
import fonts from './fonts';
import lineHeights from './lineHeights';
import fontWeights from './fontWeights';
import radius from './radius';
import Button from './components/button';

const overrides = {
  components: {
    Button
  },
  colors,
  fonts,
  shadows,
  fontSizes,
  lineHeights,
  fontWeights,
  radius
};

const CHAKRA_THEME = extendTheme(overrides);

export default CHAKRA_THEME;
