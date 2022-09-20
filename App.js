// In App.js in a new project

import * as React from "react";
import { View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import PropsScreen from "./pages/PropsScreen";
import SixthScreen from "./pages/SixthScreen";
import FourthScreen from "./pages/FourthScreen";

// const HomeScreen = () => {
//   return (
//     <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
//       <Text>Home Screen</Text>
//     </View>
//   );
// };

const Stack1 = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack1.Navigator initialRouteName="Props1213123">
        <Stack1.Screen
          name="Props1213123"
          component={PropsScreen}
          options={{ headerShown: false }}
        />
        <Stack1.Screen
          name="Fourth"
          component={FourthScreen}
          options={{ headerShown: false }}
        />
        <Stack1.Screen name="Sixth" component={SixthScreen} />
      </Stack1.Navigator>
    </NavigationContainer>
  );
};

export default App;
