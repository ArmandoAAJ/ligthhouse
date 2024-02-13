import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Authenticator } from '@screens/Authenticator';
import { Email } from '@screens/Email';
import theme from '@theme/index';

import back from '@assets/back.png';

import { Password } from '@screens/Password';
import { Home } from '@screens/Home';
import { NavigationContainer } from '@react-navigation/native';
import { useAuth } from '@context/contextUser';
import { Camera } from '@screens/Camera';
import { Button } from 'react-native';
import { clearStorage } from '@storage/user';

const { Navigator, Screen } = createNativeStackNavigator();

function AuthenticatedRouteStack() {
  const { onUserLoggedIn } = useAuth();
  return (
    <Navigator
      screenOptions={{
        headerShadowVisible: false,
        headerTitle: '',
        contentStyle: {
          backgroundColor: theme.COLORS.WHITE,
        },
      }}
    >
      <Screen
        name="home"
        component={Home}
        options={{
          headerRight: () => (
            <Button
              onPress={async () => {
                await clearStorage();
                onUserLoggedIn();
              }}
              title="sair"
              color={theme.COLORS.RED_DARK}
            />
          ),
        }}
      />
      <Screen
        name="camera"
        component={Camera}
        options={{
          contentStyle: {
            backgroundColor: theme.COLORS.HELP_800,
          },
          headerStyle: {
            backgroundColor: theme.COLORS.HELP_800,
          },
          headerTitleStyle: {
            fontFamily: theme.FONT_FAMILY.BOLD,
          },
          headerBackImageSource: back,
          headerTitle: 'Pague com QR Code',
          headerTintColor: theme.COLORS.HELP_100,
        }}
      />
    </Navigator>
  );
}

function SignInRouteStack() {
  return (
    <Navigator
      screenOptions={{
        headerShadowVisible: false,
        headerTitle: '',
        contentStyle: {
          backgroundColor: theme.COLORS.WHITE,
        },
      }}
    >
      <Screen name="authenticator" component={Authenticator} />
      <Screen
        name="email"
        component={Email}
        options={{
          headerBackImageSource: back,
          headerTintColor: theme.COLORS.RED_DARK,
        }}
      />
      <Screen
        name="password"
        component={Password}
        options={{
          headerBackImageSource: back,
          headerTintColor: theme.COLORS.RED_DARK,
        }}
      />
    </Navigator>
  );
}

export function Routes() {
  const { isLogged } = useAuth();
  return (
    <NavigationContainer>
      {isLogged ? <AuthenticatedRouteStack /> : <SignInRouteStack />}
    </NavigationContainer>
  );
}
