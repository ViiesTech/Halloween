import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {useState} from 'react';
import Home from '../screens/mainScreens/Home';
import ScaryStories from '../screens/mainScreens/ScaryStories';
import Groups from '../screens/mainScreens/Groups';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {Color} from '../assets/Utils/Colors';
import {responsiveFontSize} from '../assets/Responsive_Dimensions';
import HouseListing from '../screens/mainScreens/HouseListing';
import ViewDetails from '../screens/mainScreens/ViewDetails';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

export function BottomTabs() {
  const [activeTab, setActiveTab] = useState('');
  const Tab = createBottomTabNavigator();
  const Stack = createNativeStackNavigator();

  const HomeStack = () => {
    return (
      <Stack.Navigator
      screenOptions={{
          headerShown: false,
        }}>
        <Tab.Screen name="HouseListing" component={HouseListing} />
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="ViewDetails" component={ViewDetails} />
      </Stack.Navigator>
    );
  };
  console.log('activeTab', activeTab);
  return (
    <Tab.Navigator
    screenOptions={{
      headerShown: false,
      tabBarStyle: {
        width: '100%',
        height: 70,
      
        // padding: 10, // Add padding inside the bottom bar
        backgroundColor: Color.themeColor,
      },
   
      }}>
      <Tab.Screen
        options={{
          tabBarIcon: ({focused}) =>
            focused && (
              <Ionicons
                name="grid-outline"
                size={25}
                color={focused ? Color.white : 'gray'}
              />
            ),
          tabBarActiveBackgroundColor: Color.themeOrange,
          
          tabBarLabelPosition: 'beside-icon',
          tabBarLabelStyle: {
            color: Color.white,
            fontSize: responsiveFontSize(2.2),
            fontWeight: '600',
          },
          tabBarItemStyle: {
            padding:10,
            borderTopLeftRadius: 5,
            borderTopRightRadius:5,
            borderBottomLeftRadius:5
          },
          // tabBarStyle:{
          //   padding:10
          //   // borderRadius:4
          // },
          tabBarLabel: 'HOME',
        }}
        name="Home"
        component={HomeStack}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({focused}) =>
            focused && (
              <Ionicons
                name="grid-outline"
                size={25}
                color={focused ? Color.white : 'gray'}
              />
            ),
          tabBarActiveBackgroundColor: Color.themeOrange,
          tabBarItemStyle: {
            padding:10,

            borderTopLeftRadius: 5,
            borderTopRightRadius:5,
            borderBottomLeftRadius:5
          },
          tabBarLabelPosition: 'beside-icon',
          tabBarLabelStyle: {
            color: Color.white,
            fontSize: responsiveFontSize(2.2),
            fontWeight: '600',
          },
          tabBarLabel: 'STORIES',
        }}
        name="stories"
        component={ScaryStories}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({focused}) =>
            focused && (
              <Ionicons
                name="grid-outline"
                size={25}
                color={focused ? Color.white : 'gray'}
              />
            ),
            tabBarItemStyle: {
            padding:10,

              borderTopLeftRadius: 10,
              borderTopRightRadius:10,
              borderBottomLeftRadius:10
            },
          tabBarActiveBackgroundColor: Color.themeOrange,
          tabBarLabelPosition: 'beside-icon',
          tabBarLabelStyle: {
            color: Color.white,
            fontSize: responsiveFontSize(2.2),
            fontWeight: '600',
          },
          tabBarLabel: 'GROUPS',
        }}
        name="GROUPS"
        component={Groups}
      />
    </Tab.Navigator>
  );
}
