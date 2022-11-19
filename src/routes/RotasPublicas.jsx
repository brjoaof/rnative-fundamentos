import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from '../screens/Login';

const Stack = createNativeStackNavigator()

export const RotasPublicas = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Login" component={Login} options={{ title: "MEU LOGIN", headerShown: false}} />
    </Stack.Navigator>
  );
};
