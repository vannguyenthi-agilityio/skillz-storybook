import { convertPxToRem } from '@helpers/common';

const CUSTOM_RADIUS = {
  xs: convertPxToRem(5),
  sm: convertPxToRem(7),
  base: convertPxToRem(8),
  md: convertPxToRem(10),
  xl: convertPxToRem(15),
  '2xl': convertPxToRem(30),
  full: '9999px',
  none: '0',
  secondary: `${convertPxToRem(10)}, 0 0 ${convertPxToRem(10)}`
};

export default CUSTOM_RADIUS;
