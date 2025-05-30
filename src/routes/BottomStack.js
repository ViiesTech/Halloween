/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/jsx-no-comment-textnodes */
/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable react/react-in-jsx-scope */
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {useState} from 'react';
import ScaryStories from '../screens/mainScreens/ScaryStories';
import Groups from '../screens/mainScreens/Groups';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {Color} from '../assets/Utils/Colors';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from '../assets/Responsive_Dimensions';
import HouseListing from '../screens/mainScreens/HouseListing';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Text, View} from 'react-native';

export function BottomTabs() {
  const [activeTab, setActiveTab] = useState('');
  const Tab = createBottomTabNavigator();
  const Stack = createNativeStackNavigator();

  // const HomeStack = () => {
  //   return (
  //     <Stack.Navigator
  //       screenOptions={{
  //         headerShown: false,
  //       }}>
  //       <Tab.Screen name="HouseListing" component={HouseListing} />
  //       <Tab.Screen name="Home" component={Home} />
  //       <Tab.Screen name="ViewDetails" component={ViewDetails} />
  //     </Stack.Navigator>
  //   );
  // };
  console.log('activeTab', activeTab);
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarItemStyle: {
          paddingTop: responsiveHeight(1.4),
        },
        tabBarStyle: {
          height: responsiveHeight(7.2),

          // paddingVertical:10,
          backgroundColor: Color.themeColor,
        },
      }}>
      <Tab.Screen
        options={{
          tabBarIcon: ({focused}) => (
            <View
              style={{
                flexDirection: 'row',
                gap: 10,
                backgroundColor: focused ? Color.themeOrange : null,
                borderRadius: 10,
                borderBottomRightRadius: 0,
                justifyContent: 'center',
                alignItems: 'center',
                height: responsiveHeight(5),
                width: responsiveWidth(27),

                // padding: 10,
              }}>
              {focused && (
                <Ionicons name="grid-outline" size={25} color={Color.white} />
              )}
              <Text
                style={{
                  color: Color.white,
                  fontSize: responsiveFontSize(2),
                }}>
                Home
              </Text>
            </View>
          ),
          tabBarLabel: '',
        }}
        name="HomeStack"
        component={HouseListing}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({focused}) => (
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                gap: 10,
                backgroundColor: focused ? Color.themeOrange : null,
                borderRadius: 10,
                borderBottomRightRadius: 0,
                justifyContent: 'center',
                height: responsiveHeight(5),
                width: responsiveWidth(27),
              }}>
              {focused && (
                <Ionicons name="grid-outline" size={25} color={Color.white} />
              )}
              // eslint-disable-next-line react/react-in-jsx-scope
              <Text
                style={{
                  color: Color.white,
                  fontSize: responsiveFontSize(2),
                }}>
                Stories
              </Text>
            </View>
          ),
          tabBarLabel: '',
        }}
        name="stories"
        component={ScaryStories}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({focused}) => (
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                gap: 10,
                backgroundColor: focused ? Color.themeOrange : null,
                borderRadius: 10,
                borderBottomRightRadius: 0,
                justifyContent: 'center',
                height: responsiveHeight(5),
                width: responsiveWidth(27),
                // padding: 10,
              }}>
              {focused && (
                <Ionicons name="grid-outline" size={25} color={Color.white} />
              )}

              <Text
                style={{
                  color: Color.white,
                  fontSize: responsiveFontSize(2),
                }}>
                Groups
              </Text>
            </View>
          ),
          tabBarLabel: '',
        }}
        name="GROUPS"
        component={Groups}
      />
    </Tab.Navigator>
  );
}
