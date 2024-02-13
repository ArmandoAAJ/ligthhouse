import {
  act,
  fireEvent,
  render,
  renderHook,
  screen,
  waitFor,
} from '@testing-library/react-native';

import { Password } from '.';
import { ThemeProvider } from 'styled-components/native';
import theme from '@theme/index';
import { MOCKS, TEST_ID } from './constants';
import { UserProvider, useAuth } from '@context/contextUser';

const {
  buttons: { continueB },
  placeholders: { password },
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

jest.mock('@react-navigation/native', () => ({
  useRoute: () => ({
    params: {
      email: MOCKS.email,
    },
  }),
}));

describe('Screens: Password', () => {
  it('Should have the button disabled.', async () => {
    const { findByTestId } = render(
      <ThemeProvider theme={theme}>
        <Password />
      </ThemeProvider>
    );

    const button = await findByTestId(continueB);

    expect(button.props.accessibilityState).toHaveProperty('disabled', true);
  });

  it('Should have message invalid password error.', async () => {
    const { findByTestId } = render(
      <ThemeProvider theme={theme}>
        <Password />
      </ThemeProvider>
    );

    const input = screen.getByPlaceholderText(password);

    fireEvent.changeText(input, { target: { value: MOCKS.passwordInvalid } });

    expect(screen.getByText('Mínimo de 6 caracteres')).toBeTruthy();

    const button = await findByTestId(continueB);

    expect(button.props.accessibilityState).toHaveProperty('disabled', true);
  });

  it('Should have button enabled when is valid password.', async () => {
    const { findByTestId, findByPlaceholderText } = render(
      <ThemeProvider theme={theme}>
        <UserProvider>
          <Password />
        </UserProvider>
      </ThemeProvider>
    );
    const { result } = renderHook(() => useAuth(), {
      wrapper: UserProvider,
    });

    await waitFor(() =>
      act(() => {
        result.current.onUserLoggedIn();
      })
    );

    const input = await findByPlaceholderText(password);

    await act(async () => {
      fireEvent.changeText(input, MOCKS.password);
    });

    const button = await findByTestId(continueB);

    expect(button.props.accessibilityState).toHaveProperty('disabled', false);

    await act(async () => {
      fireEvent.press(button);
    });
  });
});
