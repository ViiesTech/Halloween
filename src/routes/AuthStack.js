import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from '../screens/authScreens/Login';
import Signup from '../screens/authScreens/Signup';
import Otp from '../screens/authScreens/Otp';
import ForgetPassword from '../screens/authScreens/ForgetPassword';
import ResetPassword from '../screens/authScreens/ResetPassword';

const Stack = createNativeStackNavigator();

export function AuthStack() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Signup" component={Signup} />
      <Stack.Screen name="Otp" component={Otp} />
      <Stack.Screen name="ForgetPassword" component={ForgetPassword} />
      <Stack.Screen name="ResetPassword" component={ResetPassword} />
    </Stack.Navigator>
  );
}
