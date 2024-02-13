import { Text } from 'react-native';
import { ThemeType } from 'src/@types/styled';
import { css } from 'styled-components';
import styled from 'styled-components/native';

interface PropsText {
  colorT?: keyof ThemeType['COLORS'];
  size?: keyof ThemeType['FONT_SIZE'];
  lineH?: keyof ThemeType['LINE_HEIGHT'];
}

export const Heading = styled(Text)<PropsText>`
  color: ${({ theme }) => theme.COLORS.HELP_900};
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  font-size: ${({ theme }) => theme.FONT_SIZE.XL}px;
  line-height: ${({ theme }) => theme.LINE_HEIGHT.LG}px;
  text-align: center;

  ${({ lineH, theme }) =>
    lineH &&
    css`
      line-height: ${theme.LINE_HEIGHT[lineH]}px;
    `}

  ${({ size, theme }) =>
    size &&
    css`
      font-size: ${theme.FONT_SIZE[size]}px;
    `}

  ${({ colorT, theme }) =>
    colorT &&
    css`
      color: ${theme.COLORS[colorT]};
    `}
`;

export const Body = styled(Text)<PropsText>`
  color: ${({ theme }) => theme.COLORS.HELP_900};
  font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
  font-size: ${({ theme }) => theme.FONT_SIZE.SM}px;
  line-height: ${({ theme }) => theme.LINE_HEIGHT.SM}px;
  text-align: center;

  ${({ lineH, theme }) =>
    lineH &&
    css`
      line-height: ${theme.LINE_HEIGHT[lineH]}px;
    `}

  ${({ size, theme }) =>
    size &&
    css`
      font-size: ${theme.FONT_SIZE[size]}px;
    `}

  ${({ colorT, theme }) =>
    colorT &&
    css`
      color: ${theme.COLORS[colorT]};
    `}
`;
