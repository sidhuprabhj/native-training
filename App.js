// In App.js in a new project

import * as React from "react";
import { View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import {
  createStackNavigator,
  CardStyleInterpolators,
  TransitionPresets,
} from "@react-navigation/stack";
import PropsScreen from "./pages/PropsScreen";
import FlatList1 from "./pages/FlatList1";
import SixthScreen from "./pages/SixthScreen";
import SplashScreen from "./pages/SplashScreen";
import SeventhScreen from "./pages/SeventhScreen";
import "react-native-gesture-handler";
import FourthScreen from "./pages/FourthScreen";

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={({ route, navigation }) => ({
          headerShown: false,
          gestureEnabled: true,
          // ...TransitionPresets.FadeFromBottomAndroid,
        })}
        initialRouteName="SplashScreen"
      >
        <Stack.Screen
          name="PropsScreen"
          component={PropsScreen}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="FlatList"
          component={FlatList1}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="SplashScreen"
          component={SplashScreen}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Fourth"
          component={FourthScreen}
          options={{
            headerShown: false,
            // cardStyleInterpolator:
            //   CardStyleInterpolators.ModalSlideFromBottomIOS,

            ...TransitionPresets.ScaleFromCenterAndroid,
          }}
        />
        <Stack.Screen name="Sixth" component={SixthScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
