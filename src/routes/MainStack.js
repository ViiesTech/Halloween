import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ViewDetails from '../screens/mainScreens/ViewDetails';
import {BottomTabs} from './BottomStack';
import Home from '../screens/mainScreens/Home';
import ChooseLocation from '../screens/mainScreens/ChooseLocation';
import Settings from '../screens/mainScreens/Settings';
import EditProfile from '../screens/mainScreens/EditProfile';

const Stack = createNativeStackNavigator();

export function MainStack() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="BottomTabs" component={BottomTabs} />
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="ViewDetails" component={ViewDetails} />
      <Stack.Screen name="Settings" component={Settings} />
      <Stack.Screen name="ChooseLocation" component={ChooseLocation} />
      <Stack.Screen name="EditProfile" component={EditProfile} />
    </Stack.Navigator>
  );
}
