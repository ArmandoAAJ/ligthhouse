import React from 'react';

import { Button, Container, Content, TouchableWithoutFeedback } from './styles';
import { Heading } from '@components/Text';

import { TEST_ID } from './constants';

const {
  buttons: { continueB },
} = TEST_ID;

interface TemplateFormProps {
  title: string;
  children: React.ReactNode;
  disabled: boolean;
  onPress: () => void;
}

export const TemplateForm: React.FC<TemplateFormProps> = ({
  title,
  children,
  disabled,
  onPress,
}) => {
  return (
    <TouchableWithoutFeedback>
      <Container>
        <Content>
          <Heading>{title}</Heading>
          {children}
        </Content>
        <Button testID={continueB} onPress={onPress} disabled={disabled}>
          <Heading
            colorT={disabled ? 'HELP_500' : 'WHITE_100'}
            size="MD"
            lineH="MD"
          >
            Continuar
          </Heading>
        </Button>
      </Container>
    </TouchableWithoutFeedback>
  );
};
