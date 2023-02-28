import React from 'react';
import {
  Button as ButtonChakra,
  ButtonProps as ButtonPropsChakra
} from '@chakra-ui/react';
import { SIZES, VARIANTS, ICON_POSITION } from '@enums/button';

// Styles
import styles from './Button.module.css';

interface ButtonProps extends ButtonPropsChakra {
  children?: React.ReactNode;
  label?: string;
  className?: string;
  isLoading?: boolean;
  isDisabled?: boolean;
  icon?: React.ReactElement<any, string>;
  positionIcon?: ICON_POSITION;
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
  icon,
  positionIcon = ICON_POSITION.left,
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
      className={[styles[className], icon ? styles[`has-icon-${positionIcon}`] : ''].join('')}
      {...props}
    >
      {positionIcon === 'left' && icon }
      {label}
      {positionIcon === 'right' && icon }
      {children}
    </ButtonChakra>
  );
};

export default Button;
