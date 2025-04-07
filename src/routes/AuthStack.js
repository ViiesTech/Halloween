import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from '../screens/authScreens/Login';
import Signup from '../screens/authScreens/Signup';

const Stack = createNativeStackNavigator();

export function AuthStack() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Signup" component={Signup} />
    </Stack.Navigator>
  );
}
