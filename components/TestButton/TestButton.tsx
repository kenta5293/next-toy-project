import React from 'react';
import TestButton from './styled';
interface ButtonProps {
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
  size?: 'small' | 'medium' | 'large';
  /**
   * Button contents
   */
  label: string;

  bold?: boolean;
  /**
   * Optional click handler
   */
  onClick?: () => void;
}

/**
 * Primary UI component for user interaction
 */
export const TestButtonStyled = ({
  primary = false,
  size = 'medium',
  backgroundColor,
  label,
  bold = false,
  ...props
}: ButtonProps) => {
  const mode = primary ? 'storybook-button--primary' : 'storybook-button--secondary';
  const isBold = bold ? 'storybook-button--bold' : '';
  return (
    <TestButton
      className={['storybook-button', `storybook-button--${size}`, mode, isBold].join(' ')}
      style={{ backgroundColor }}
      {...props}
    >
      {label}
    </TestButton>
  );
};
