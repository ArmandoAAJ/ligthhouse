import { Pressable } from 'react-native';
import { css } from 'styled-components';
import styled from 'styled-components/native';

interface PropsContainer {
  icon?: boolean;
}

export const Container = styled(Pressable)<PropsContainer>`
  align-items: center;
  align-self: center;
  background-color: ${({ theme }) => theme.COLORS.RED_DARK};
  border-radius: 30px;
  min-height: 40px;
  justify-content: center;
  padding: 10px;
  width: 100%;

  ${({ disabled }) =>
    disabled &&
    css`
      background-color: ${({ theme }) => theme.COLORS.HELP_200};
    `}

  ${({ icon }) =>
    icon &&
    css`
      background-color: ${({ theme }) => theme.COLORS.WHITE};
      border: 1px solid ${({ theme }) => theme.COLORS.HELP_900};
      display: flex;
      flex-direction: row;
      justify-content: flex-start;
    `}
`;
