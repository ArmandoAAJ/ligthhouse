import { StatusBar } from 'react-native';
import { ThemeProvider } from 'styled-components/native';
import {
  useFonts,
  OpenSans_400Regular,
  OpenSans_700Bold,
} from '@expo-google-fonts/open-sans';
import * as SplashScreen from 'expo-splash-screen';
import theme from './src/theme';

import { Routes } from 'src/routes/app.routes';
import { UserProvider } from '@context/contextUser';

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [fontsLoaded] = useFonts({
    OpenSans_400Regular,
    OpenSans_700Bold,
  });

  if (!fontsLoaded) return null;

  return (
    <ThemeProvider theme={theme}>
      <>
        <StatusBar backgroundColor="transparent" translucent />
        <UserProvider>
          <Routes />
        </UserProvider>
      </>
    </ThemeProvider>
  );
}
