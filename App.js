// In App.js in a new project

import * as React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
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
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItem,
  DrawerItemList,
} from "@react-navigation/drawer";

import NavigationpropsScreen from "./pages/NavigationpropsScreen";
import DisplayDetailsScreen from "./pages/NavigationpropsScreen/DisplayDetailsScreen";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import CustomDrawerContent from "./pages/CustomDrawerContent";
const Stack = createStackNavigator();
const Bottomtab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();
const App = () => {
  const array = [
    { name: "Home", route: "" },
    { name: "FlatList1", route: "" },
    { name: "Issue", route: "" },
  ];
  return (
    <NavigationContainer>
      <DrawerNavigation />

      {/* <View
        style={{
          marginBottom: 50,
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-around",
        }}
      >
        {array?.map((item) => {
          return (
            <TouchableOpacity
              onPress={() => {
                navigation.navigate(item.route);
              }}
              key={item.name}
              style={{ paddingVertical: 10, alignSelf: "center" }}
            >
              <Ionicons name="add" style={{ alignSelf: "center" }} size={20} />
              <Text>{item.name}</Text>
            </TouchableOpacity>
          );
        })}
      </View> */}
    </NavigationContainer>
  );
};

export default App;

const DrawerNavigation = () => {
  return (
    <Drawer.Navigator
      initialRouteName="SplashScreen"
      drawerContent={({ navigation }, props) => (
        <CustomDrawerContent props={props} navigation={navigation} />
      )}
    >
      <Drawer.Screen
        name="StackNavigator"
        component={StackNavigator}
        options={{ headerShown: false }}
      />
    </Drawer.Navigator>
  );
};

const StackNavigator = () => {
  return (
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
        name="BottomTabNavigator"
        component={BottomTabNavigator}
        options={{}}
      />
      <Stack.Screen name="SplashScreen" component={SplashScreen} options={{}} />
      <Stack.Screen name="IssuesScreen" component={IssuesScreen} options={{}} />

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
      <Stack.Screen name="PropsScreen1" component={PropsScreen} options={{}} />
      <Stack.Screen
        name="DisplayDetailsScreen"
        component={DisplayDetailsScreen}
        options={{}}
      />
      <Stack.Screen
        name="NavigationpropsScreen"
        component={NavigationpropsScreen}
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
  );
};
const BottomTabNavigator = () => {
  return (
    <Bottomtab.Navigator
      screenOptions={{
        showLabel: false,
        headerShown: false,
        tabBarStyle: {
          paddingHorizontal: 20,
        },
        // activeTintColor:'red',
        // style: {
        //   borderTopWidth: 0,
        //   width: "100%",
        //   borderTopStartRadius:20,borderTopRightRadius:20,
        //   // backgroundColor: theme.colors.primary,
        // },
      }}
      // screenOptions={{
      //   tabBarStyle: { backgroundColor: "red" },
      // }}
      // sceneContainerStyle={{
      //   tabBarStyle: { backgroundColor: "red" },
      // }}
      // activeColor="black"
    >
      <Bottomtab.Screen
        name="NavigationpropsScreen"
        component={NavigationpropsScreen}
        options={{
          tabBarLabel: ({ focused }) => {
            return (
              <View>
                <Text style={{ color: focused ? "red" : "#000" }}>Home1s</Text>
              </View>
            );
          },
          tabBarIcon: ({ focused }) => (
            <Ionicons name="home" color={focused ? "red" : "black"} size={20} />
          ),
        }}
      />
      <Bottomtab.Screen
        name="DisplayDetailsScreen"
        component={DisplayDetailsScreen}
        options={{
          tabBarLabel: ({ focused }) => {
            console.log(focused, "focused");

            return (
              <View>
                <Text style={{ color: focused ? "red" : "black" }}>
                  Display Details
                </Text>
              </View>
            );
          },
          tabBarIcon: ({ focused }) => {
            return (
              <Ionicons
                name="ios-construct"
                size={20}
                color={focused ? "green" : "#000"}
              />
            );
          },
        }}
      />
      <Bottomtab.Screen
        name="FlatList"
        component={FlatList1}
        options={{
          tabBarLabel: ({ focused }) => {
            return (
              <View>
                <Text style={{ color: focused ? "red" : "black" }}>
                  Flatlist
                </Text>
              </View>
            );
          },
          tabBarIcon: ({ focused }) => (
            <Ionicons name="home" color={focused ? "red" : "black"} size={20} />
          ),
        }}
      />
    </Bottomtab.Navigator>
  );
};
