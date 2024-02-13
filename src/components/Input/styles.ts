import { TextInput } from 'react-native';
import styled from 'styled-components/native';

export const Container = styled.View`
  gap: ${({ theme }) => theme.SPACES.SM}px;
  align-items: flex-start;
`;

export const Input = styled(TextInput).attrs(({ theme }) => ({
  placeholderTextColor: theme.COLORS.HELP_300,
}))`
  height: 50px;
  width: 100%;
  border-bottom-width: 0.5px;
  border-bottom-color: ${({ theme }) => theme.COLORS.HELP_300};
`;
