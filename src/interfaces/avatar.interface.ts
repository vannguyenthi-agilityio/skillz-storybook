import type { AvatarProps } from '@chakra-ui/react';

import { SIZES } from '@enums';

export interface IAvatar extends AvatarProps {
  isActive?: boolean;
  size?: SIZES;
}
