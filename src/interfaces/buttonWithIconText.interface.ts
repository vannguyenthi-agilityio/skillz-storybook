import type { ButtonProps } from '@chakra-ui/react';

// Enums
import { COLORS } from '@enums';

export interface IButtonWithIconText extends ButtonProps {
  valueTokens?: string;
  colorScheme?: COLORS | string;
  bgColorBoxText?: COLORS | string;
  icon?: JSX.Element;
  textAction?: string;
  textType?: string;
}
