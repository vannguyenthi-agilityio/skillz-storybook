import React from 'react';
import {
  Button as ButtonChakra,
  ButtonProps as ButtonPropsChakra
} from '@chakra-ui/react';

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
  size?: string;
  variant?: string;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const Button = ({
  size = 'default',
  children,
  label = '',
  backgroundColor,
  leftIcon,
  isDisabled = false,
  onClick,
  className = '',
  variant = 'colorDefault',
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
