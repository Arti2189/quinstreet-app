import React from 'react';
import { StyledButton } from './Button.styles';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  isSubmitting?: boolean;
  isSubmitted?: boolean;
}
export const Button: React.FC<ButtonProps> = ({
  children,
  isSubmitting,
  isSubmitted,
  disabled,
  ...props
}) => {
  let buttonText = children;
  if (isSubmitting) {
    buttonText = 'Submitting...';
  } else if (isSubmitted) {
    buttonText = 'Submitted';
  }

  return (
    <StyledButton disabled={disabled || isSubmitting || isSubmitted} {...props}>
      {buttonText}
    </StyledButton>
  );
};