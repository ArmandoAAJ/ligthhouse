import {
  act,
  render,
  renderHook,
  waitFor,
} from '@testing-library/react-native';
import { Routes } from './app.routes';

import { ThemeProvider } from 'styled-components/native';
import theme from '@theme/index';
import { useAuth, UserProvider } from '@context/contextUser';

jest.mock('@storage/user', () => ({
  getUser: jest.fn().mockResolvedValue(true),
}));

describe('Routes', () => {
  it('should render authenticated routes when user is not logged in', () => {
    const { getByText } = render(
      <ThemeProvider theme={theme}>
        <Routes />
      </ThemeProvider>
    );

    expect(getByText(/criar minha conta/i)).toBeTruthy();
  });

  it('should render authenticated routes when user is logged in', async () => {
    const { getByText } = render(
      <ThemeProvider theme={theme}>
        <UserProvider>
          <Routes />
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

    expect(result.current.isLogged).toBe(true);

    expect(getByText(/para realizar o pagamento/i)).toBeTruthy();
  });
});
