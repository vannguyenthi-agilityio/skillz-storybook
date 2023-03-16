import { Avatar as AvatarChakra, AvatarBadge } from '@chakra-ui/react';

//Types
import { IAvatar } from '@interfaces/avatar.interface';

// Helpers
import { convertPxToRem } from '@helpers/common';

// Enums
import { COLORS, SIZES } from '@enums';

export const Avatar = ({ isActive = false, size = SIZES.MD, ...props }: IAvatar) => {
  const borderWidthMapping: {
    [key: string | SIZES]: string;
  } = {
    [`${SIZES.XS}`]: convertPxToRem(3),
    [`${SIZES.SM}`]: convertPxToRem(3),
    [`${SIZES.MD}`]: convertPxToRem(5),
    [`${SIZES.LG}`]: convertPxToRem(5),
    [`${SIZES.XL}`]: convertPxToRem(6),
    [`${SIZES['2XL']}`]: convertPxToRem(7),
    [`${SIZES['3XL']}`]: convertPxToRem(7),
    [`${SIZES['4XL']}`]: convertPxToRem(8),
    [`${SIZES['5XL']}`]: convertPxToRem(10)
  };

  const boxSizeMapping: {
    [key: string | SIZES]: string;
  } = {
    [`${SIZES.XS}`]: convertPxToRem(12),
    [`${SIZES.SM}`]: convertPxToRem(12),
    [`${SIZES.MD}`]: convertPxToRem(22),
    [`${SIZES.LG}`]: convertPxToRem(22),
    [`${SIZES.XL}`]: convertPxToRem(30),
    [`${SIZES['2XL']}`]: convertPxToRem(40),
    [`${SIZES['3XL']}`]: convertPxToRem(40),
    [`${SIZES['4XL']}`]: convertPxToRem(68),
    [`${SIZES['5XL']}`]: convertPxToRem(86)
  };
  // TODO: Implement lazyload image with avatar has prop src
  return (
    <AvatarChakra
      {...props}
      size={size}
    >
      {isActive && (
        <AvatarBadge
          boxSize={boxSizeMapping[size]}
          borderWidth={borderWidthMapping[size]}
          bg={`${COLORS.GREEN}.300`}
        />
      )}
    </AvatarChakra>
  );
};
