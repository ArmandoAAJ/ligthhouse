import React from 'react';
import { TextInputProps } from 'react-native';
import { Container, Input } from './styles';
import { Body } from '@components/Text';

interface InputProps extends TextInputProps {
  messageError?: string;
}

export const TextInput: React.FC<InputProps> = ({ messageError, ...rest }) => {
  return (
    <Container>
      <Input {...rest} />
      {!!messageError && (
        <Body colorT="RED_DARK" size="SM">
          {messageError}
        </Body>
      )}
    </Container>
  );
};
