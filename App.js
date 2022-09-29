// In App.js in a new project

import * as React from "react";
import { View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import {
  createStackNavigator,
  CardStyleInterpolators,
  TransitionPresets,
  HeaderStyleInterpolators,
} from "@react-navigation/stack";
import PropsScreen from "./pages/PropsScreen";
import FlatList1 from "./pages/FlatList1";
import SixthScreen from "./pages/SixthScreen";
import SplashScreen from "./pages/SplashScreen";
import SeventhScreen from "./pages/SeventhScreen";
import Calculator from "./pages/Calculator";
import "react-native-gesture-handler";
import FourthScreen from "./pages/FourthScreen";
import IssuesScreen from "./pages/IssuesScreen";

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={() => ({
          headerShown: false,
          // gestureEnabled: true,
          // cardStyleInterpolator: CardStyleInterpolators.forVerticalIOS,

          // ...TransitionPresets.ModalSlideFromBottomIOS,
        })}
        initialRouteName="SplashScreen"
      >

        <Stack.Screen
          name="SplashScreen"
          component={SplashScreen}
          options={{}}
        />

        <Stack.Screen
          name="IssuesScreen"
          component={IssuesScreen}
          options={{}}
        />

        <Stack.Screen
          name="FlatList"
          component={FlatList1}
          options={
            {
              // headerShown: false,
              // ...TransitionPresets.ModalSlideFromBottomIOS,
            }
          }
        />
        <Stack.Screen
          name="PropsScreen1"
          component={PropsScreen}
          options={{}}
        />


        <Stack.Screen
          name="Fourth"
          component={FourthScreen}
          options={
            {
              // headerShown: false,
              // cardStyleInterpolator: CardStyleInterpolators.forVerticalIOS,
              // ...TransitionPresets.ScaleFromCenterAndroid,
            }
          }
        />
        <Stack.Screen
          name="Calculators"
          component={Calculator}
          options={
            {
              // headerShown: true,
              // cardStyleInterpolator:
              //   CardStyleInterpolators.ModalSlideFromBottomIOS,
              // ...TransitionPresets.ScaleFromCenterAndroid,
              // headerStyleInterpolator: HeaderStyleInterpolators.forFade,
            }
          }
        />
        <Stack.Screen name="Sixth" component={SixthScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
