import { Dimensions } from 'react-native';
import styled from 'styled-components/native';

const { height } = Dimensions.get('screen');

export const HEIGHT = height / 3;

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const Image = styled.ImageBackground`
  width: 100%;
  height: ${HEIGHT}px;
`;

export const Preview = styled.View`
  width: 80%;
  overflow: hidden;
  border-radius: 20px;
  height: ${HEIGHT}px;
  border: 3px solid ${({ theme }) => theme.COLORS.HELP_900};
`;
