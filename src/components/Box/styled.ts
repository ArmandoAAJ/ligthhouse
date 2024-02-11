import Theme from '@theme/index';
import styled from 'styled-components/native';

type ThemeSpaces = typeof Theme.SPACES;

interface BoxProps {
  size?: keyof ThemeSpaces;
}

export const Box = styled.View<BoxProps>`
  height: ${({ size, theme }) =>
    size ? theme.SPACES?.[size] : theme.SPACES.LG}px;
`;
