import styled from 'styled-components/native';

import { Body } from '@components/Text';

export const Container = styled.View`
  gap: ${({ theme }) => theme.SPACES.SM}px;
`;

export const Text = styled(Body)`
  position: absolute;
  left: 35%;
`;

export const Image = styled.Image.attrs({
  resizeMode: 'contain',
})`
  width: 25px;
  height: 100%;
  position: absolute;
  left: 15%;
`;
