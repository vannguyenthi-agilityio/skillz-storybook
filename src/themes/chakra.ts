import { extendTheme } from '@chakra-ui/react';
import colors from './colors';
import fontSizes from './fontSizes';
import fonts from './fonts';
import lineHeights from './lineHeights';
import fontWeights from './fontWeights';
import Button from './components/button';

const overrides = {
  components: {
    Button
  },
  colors,
  fonts,
  fontSizes,
  lineHeights,
  fontWeights
};

const CHAKRA_THEME = extendTheme(overrides);

export default CHAKRA_THEME;
