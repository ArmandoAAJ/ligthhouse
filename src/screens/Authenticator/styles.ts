import { Heading } from '@components/Text';
import styled from 'styled-components/native';

import logo from '@assets/lighthouse.png';

export const Scroll = styled.ScrollView`
  flex: 1;
  padding: 0 ${({ theme }) => theme.SPACES.MD}px;
`;

export const HeadingSmall = styled(Heading)`
  font-size: ${({ theme }) => theme.FONT_SIZE.SM}px;
`;

export const Image = styled.Image.attrs({
  source: logo,
  resizeMode: 'contain',
})`
  width: 60%;
  height: 200px;
  align-self: center;
`;
