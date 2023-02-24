import { extendTheme } from '@chakra-ui/react';
import colors from './colors';
import fontSizes from './fontSizes';
import fonts from './fonts';
import lineHeights from './lineHeights';

const overrides = {
  colors,
  fonts,
  fontSizes,
  lineHeights
};

const CHAKRA_THEME = extendTheme(overrides);

export default CHAKRA_THEME;
