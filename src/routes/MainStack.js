import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HouseListing from '../screens/mainScreens/HouseListing';
import ViewDetails from '../screens/mainScreens/ViewDetails';
import CandyDetails from '../screens/mainScreens/CandyDetails';
import { BottomTabs } from './BottomStack';

const Stack = createNativeStackNavigator();

export function MainStack() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="BottomTabs" component={BottomTabs} />
      <Stack.Screen name="HouseListing" component={HouseListing} />
      <Stack.Screen name="ViewDetails" component={ViewDetails} />
      <Stack.Screen name="CandyDetails" component={CandyDetails} />
    </Stack.Navigator>
  );
}
