import React from 'react';
import {
  Button as ButtonChakra,
  ButtonProps as ButtonPropsChakra
} from '@chakra-ui/react';

export enum SIZES {
  default = 'default',
  small = 'small',
  smallExtra = 'smallExtra',
  medium = 'medium',
  base = 'base',
  large = 'large',
  largeExtra = 'largeExtra',
  full = 'full'
}

export enum VARIANTS {
  default = 'default',
  medium = 'medium',
  status = 'status',
  transparent = 'transparent',
  uppercase = 'uppercase',
  noBorder = 'noBorder',
  muted = 'muted',
  action = 'action',
  icon = 'icon',
  selected = 'selected'
}

interface ButtonProps extends ButtonPropsChakra {
  children?: React.ReactNode;
  label?: string;
  className?: string;
  isLoading?: boolean;
  isDisabled?: boolean;
  leftIcon?: React.ReactElement<any, string>;
  /**
   * Is this the principal call to action on the page?
   */
  primary?: boolean;
  /**
   * What background color to use
   */
  backgroundColor?: string;
  /**
   * How large should the button be?
   */
  size?: SIZES;
  variant?: VARIANTS;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const Button = ({
  size = SIZES.default,
  children,
  label = '',
  backgroundColor,
  leftIcon,
  isDisabled = false,
  onClick,
  className = '',
  variant = VARIANTS.default,
  ...props
}: ButtonProps) => {
  return (
    <ButtonChakra
      size={size}
      onClick={onClick}
      variant={variant}
      backgroundColor={backgroundColor}
      isDisabled={isDisabled}
      leftIcon={leftIcon}
      className={[className].join('')}
      sx={{ '.chakra-button__icon': { marginRight: '0.75rem' } }}
      {...props}
    >
      {label}
      {children}
    </ButtonChakra>
  );
};

export default Button;
