import React from 'react';
import { Button } from '@components/Button';

import facebook from '@assets/facebook.png';
import google from '@assets/google.png';
import apple from '@assets/apple.png';

import { Container, Image, Text } from './styles';

export const Social: React.FC = () => {
  return (
    <Container>
      <Button icon>
        <Image source={facebook} />
        <Text>Entrar com Facebook</Text>
      </Button>
      <Button icon>
        <Image source={apple} />
        <Text>Entrar com Apple</Text>
      </Button>
      <Button icon>
        <Image source={google} />
        <Text>Entrar com Google</Text>
      </Button>
    </Container>
  );
};
