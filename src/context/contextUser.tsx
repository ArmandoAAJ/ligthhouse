import React, {
  useContext,
  useState,
  useEffect,
  useCallback,
  createContext,
  ReactNode,
} from 'react';
import { getUser } from '@storage/user';

import * as SplashScreen from 'expo-splash-screen';

interface Ctx {
  isLogged: boolean;
  onUserLoggedIn: () => void;
}

const AuthContext = createContext<Ctx>({} as Ctx);

interface AuthProviderProps {
  children: ReactNode;
}

export const UserProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [isLogged, setIsLogged] = useState(false);

  const onUserLoggedIn = useCallback(async () => {
    const hasUser = await getUser();
    setIsLogged(hasUser);
    await SplashScreen.hideAsync();
  }, []);

  useEffect(() => {
    onUserLoggedIn();
  }, []);

  const value = {
    isLogged,
    onUserLoggedIn,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => useContext(AuthContext);
