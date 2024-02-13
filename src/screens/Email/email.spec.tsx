import { act, fireEvent, render, screen } from '@testing-library/react-native';

import { Email } from '.';
import { ThemeProvider } from 'styled-components/native';
import theme from '@theme/index';
import { MOCKS, TEST_ID } from './constants';

const {
  buttons: { continueB },
  placeholders: { email },
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

describe('Screens: Email', () => {
  it('Should have the button disabled.', async () => {
    const { findByTestId } = render(
      <ThemeProvider theme={theme}>
        <Email />
      </ThemeProvider>
    );

    const button = await findByTestId(continueB);

    expect(button.props.accessibilityState).toHaveProperty('disabled', true);
  });

  it('Should have message invalid email error.', async () => {
    const { findByTestId } = render(
      <ThemeProvider theme={theme}>
        <Email />
      </ThemeProvider>
    );

    const input = screen.getByPlaceholderText(email);

    fireEvent.changeText(input, { target: { value: MOCKS.invalidEmail } });

    expect(screen.getByText('E-mail inválido')).toBeTruthy();

    const button = await findByTestId(continueB);

    expect(button.props.accessibilityState).toHaveProperty('disabled', true);
  });

  it('Should have button enabled when is valid email.', async () => {
    const { findByTestId } = render(
      <ThemeProvider theme={theme}>
        <Email />
      </ThemeProvider>
    );

    const input = screen.getByPlaceholderText(email);

    await act(async () => {
      fireEvent.changeText(input, MOCKS.validEmail);
    });

    const button = await findByTestId(continueB);

    expect(button.props.accessibilityState).toHaveProperty('disabled', false);

    await act(async () => {
      fireEvent.press(button);
    });
  });
});
