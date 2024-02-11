import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Authenticator } from '@screens/Authenticator';
import theme from '@theme/index';

const { Navigator, Screen } = createNativeStackNavigator();

export function AppRoutes() {
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
    </Navigator>
  );
}
