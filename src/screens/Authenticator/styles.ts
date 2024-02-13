import styled from 'styled-components/native';

import logo from '@assets/lighthouse.png';

export const ScrollView = styled.ScrollView.attrs({
  contentContainerStyle: {
    paddingBottom: 20,
  },
  showsVerticalScrollIndicator: false,
})`
  flex: 1;
  padding: 0 ${({ theme }) => theme.SPACES.MD}px;
`;

export const Image = styled.Image.attrs({
  source: logo,
  resizeMode: 'contain',
})`
  height: 200px;
  align-self: center;
`;

export const Content = styled.View`
  margin: 0 ${({ theme }) => theme.SPACES.LG * 2}px;
`;

export const Row = styled.View`
  align-items: center;
  display: flex;
  flex-direction: row;
  gap: ${({ theme }) => theme.LINE_HEIGHT.SM}px;
  margin: ${({ theme }) => theme.SPACES.LG}px 0;
`;

export const Line = styled.View`
  background-color: ${({ theme }) => theme.COLORS.HELP_300};
  border-radius: 2px;
  flex: 1;
  height: 2px;
`;
