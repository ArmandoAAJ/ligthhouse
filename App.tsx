import { StatusBar } from 'react-native';
import { ThemeProvider } from 'styled-components/native';
import {
  useFonts,
  OpenSans_400Regular,
  OpenSans_700Bold,
} from '@expo-google-fonts/open-sans';

import theme from './src/theme';

import { NavigationContainer } from '@react-navigation/native';
import { AppRoutes } from 'src/routes/app.routes';

export default function App() {
  const [fontsLoaded] = useFonts({ OpenSans_400Regular, OpenSans_700Bold });

  if (!fontsLoaded) return null;

  return (
    <ThemeProvider theme={theme}>
      <>
        <StatusBar
          barStyle="light-content"
          backgroundColor="transparent"
          translucent
        />
        <NavigationContainer>
          <AppRoutes />
        </NavigationContainer>
      </>
    </ThemeProvider>
  );
}
