import { ThemeType } from 'src/@types/styled';
import styled from 'styled-components/native';

interface BoxProps {
  size?: keyof ThemeType['SPACES'];
}

export const Box = styled.View<BoxProps>`
  height: ${({ size, theme }) =>
    size ? theme.SPACES?.[size] : theme.SPACES.LG}px;
`;
