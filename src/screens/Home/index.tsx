import { Body, Heading } from '@components/Text';

import React from 'react';

import {
  BoxImage,
  Container,
  Content,
  Image,
  ImageQRMin,
  Next,
  NextIcon,
} from './styles';
import { Box } from '@components/Box';

import QR from '@assets/qr.png';
import QR_MIN from '@assets/qr-min.png';

import { Camera, PermissionStatus } from 'expo-camera';
import { useNavigation } from '@react-navigation/native';
import { RouterName } from '@routes/index';

export const Home: React.FC = () => {
  const { navigate } = useNavigation();
  const [_, requestPermission] = Camera.useCameraPermissions();

  const handleRequestCamera = async () => {
    const { status } = await requestPermission();

    if (status === PermissionStatus.GRANTED) {
      navigate(RouterName.camera);

      return;
    }
  };

  return (
    <Container>
      <Content>
        <Heading>Pague com QR Code</Heading>
        <Box size="MD" />
        <Body>
          Para realizar o pagamento, basta apontar a câmera para o QR Code do
          seu ticket de estacionamento. Evite filas e pague diretamente pelo
          app.
        </Body>
      </Content>
      <BoxImage>
        <ImageQRMin source={QR_MIN} />
        <Image source={QR} />
      </BoxImage>
      <Next onPress={handleRequestCamera}>
        <Heading size="SM">Próximo</Heading>
        <NextIcon />
      </Next>
    </Container>
  );
};
