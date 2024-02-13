import React from 'react';
import { StyleSheet } from 'react-native';
import { Camera as RNCamera } from 'expo-camera';

import { Container, Preview } from './styles';

export const Camera: React.FC = () => {
  return (
    <Container>
      <Preview>
        <RNCamera
          onBarCodeScanned={(e) => console.log(e)}
          style={{
            ...StyleSheet.absoluteFillObject,
          }}
        />
      </Preview>
    </Container>
  );
};
