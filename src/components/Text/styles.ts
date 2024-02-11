import styled from 'styled-components/native';

export const Heading = styled.Text`
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  color: ${({ theme }) => theme.COLORS.GRAY_700};
  font-size: ${({ theme }) => theme.FONT_SIZE.XL}px;
  line-height: ${({ theme }) => theme.LINE_HEIGHT.LG}px;
  text-align: center;
`;

export const Body = styled.Text`
  font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
  color: ${({ theme }) => theme.COLORS.GRAY_700};
  font-size: ${({ theme }) => theme.FONT_SIZE.SM}px;
  line-height: ${({ theme }) => theme.LINE_HEIGHT.SM}px;
  text-align: center;
`;
