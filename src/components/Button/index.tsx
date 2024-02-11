import React from 'react';

import { Container } from './styles';
import { PressableProps } from 'react-native';

interface ButtonProps extends PressableProps {
  icon?: boolean;
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  icon = false,
  children,
  ...rest
}) => {
  return (
    <Container icon={icon} {...rest}>
      {children}
    </Container>
  );
};
