import { fireEvent, render } from '@testing-library/react-native';
import theme from '@theme/index';
import { ThemeProvider } from 'styled-components/native';
import { Authenticator } from '.';

import { TEST_ID } from './costants';

const {
  buttons: { createAccount },
} = TEST_ID;

jest.mock('@react-navigation/native', () => {
  return {
    useNavigation: () => {
      return {
        navigate: jest.fn(),
      };
    },
  };
});

describe('Screens: Authenticator', () => {
  it("Find a button with the text 'create my account now' and click it", () => {
    const element = render(
      <ThemeProvider theme={theme}>
        <Authenticator />
      </ThemeProvider>
    );

    const { getByTestId } = element;

    const button = getByTestId(createAccount);

    expect(button).toBeTruthy();

    fireEvent(button, 'press');
  });
});
