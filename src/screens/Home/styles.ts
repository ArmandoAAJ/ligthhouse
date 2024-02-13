import styled from 'styled-components/native';
import next from '@assets/next.png';

export const Container = styled.View`
  flex: 1;
  justify-content: space-between;
  margin-bottom: ${({ theme }) => theme.SPACES.LG * 2}px;
  margin: 0 ${({ theme }) => theme.SPACES.LG}px;
`;

export const Content = styled.View``;

export const BoxImage = styled.View`
  align-items: center;
  height: 30%;
`;

export const Image = styled.Image.attrs({
  resizeMode: 'contain',
})`
  height: 100%;
`;

export const ImageQRMin = styled.Image.attrs({
  resizeMode: 'contain',
})`
  position: absolute;
  right: 20%;
  top: -50px;
`;

export const NextIcon = styled.Image.attrs({
  resizeMode: 'contain',
  source: next,
})`
  height: 100%;
`;

export const Next = styled.Pressable`
  align-items: center;
  align-self: flex-end;
  display: flex;
  flex-direction: row;
  gap: 4px;
  justify-content: flex-end;
  margin-bottom: 24px;
  padding: 10px 0;
  width: 120px;
`;
