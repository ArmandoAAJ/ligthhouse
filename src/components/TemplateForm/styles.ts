import styled from 'styled-components/native';
import { Button as ComponentsButton } from '@components/Button';

export const TouchableWithoutFeedback = styled.ScrollView`
  flex: 1;
`;

export const Container = styled.View`
  flex: 1;
  margin: 20% ${({ theme }) => theme.SPACES.XL}px 0;
  justify-content: space-between;
`;

export const Content = styled.View`
  gap: ${({ theme }) => theme.SPACES.XXL}px;
`;

export const Button = styled(ComponentsButton)`
  width: 80%;
  margin-top: 50%;
`;
