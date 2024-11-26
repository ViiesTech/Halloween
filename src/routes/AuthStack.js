import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from '../screens/authScreens/Login';

const Stack = createNativeStackNavigator();

export function AuthStack() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Login" component={Login} />
    </Stack.Navigator>
  );
}
