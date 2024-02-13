import React from 'react';
import { Button } from '@components/Button';

import facebook from '@assets/facebook.png';
import google from '@assets/google.png';
import apple from '@assets/apple.png';

import { Container, Image, Text } from './styles';
import { useNavigation } from '@react-navigation/native';
import { RouterName } from '@routes/index';

export const Social: React.FC = () => {
  const { navigate } = useNavigation();
  const handleCreateAccount = () => {
    navigate(RouterName.email);
  };

  return (
    <Container>
      <Button onPress={handleCreateAccount} icon>
        <Image source={facebook} />
        <Text>Entrar com Facebook</Text>
      </Button>
      <Button onPress={handleCreateAccount} icon>
        <Image source={apple} />
        <Text>Entrar com Apple</Text>
      </Button>
      <Button onPress={handleCreateAccount} icon>
        <Image source={google} />
        <Text>Entrar com Google</Text>
      </Button>
    </Container>
  );
};
