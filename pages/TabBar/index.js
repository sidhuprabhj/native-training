import { View, SafeAreaView, Text, TouchableOpacity } from "react-native";
import React from "react";
import DisplayData from "./DisplayData";

const TabBar = ({ navigation }) => {
  const [tabBarState, setTabBarState] = React.useState("Two");
  console.log(tabBarState);
  return (
    <SafeAreaView style={{}}>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-around",
        }}
      >
        <TouchableOpacity
          onPress={() => {
            setTabBarState("One");
          }}
          style={{
            backgroundColor: tabBarState === "One" ? "lightgreen" : "#fff",
            padding: 10,
          }}
        >
          <Text>One</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            setTabBarState("Two");
          }}
          style={{
            backgroundColor: tabBarState === "Two" ? "lightgreen" : "#fff",
            padding: 10,
          }}
        >
          <Text>Two</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            setTabBarState("Three");
          }}
          style={{
            backgroundColor: tabBarState === "Three" ? "lightgreen" : "#fff",
            padding: 10,
          }}
        >
          <Text>Three</Text>
        </TouchableOpacity>
      </View>

      {tabBarState == "One" ? (
        <View style={{}}>
          <DisplayData data={tabBarState} navigation={navigation} />
        </View>
      ) : (
        <></>
      )}
      {tabBarState == "Two" ? (
        <DisplayData data={tabBarState} navigation={navigation} />
      ) : (
        <></>
      )}
      {tabBarState == "Three" ? (
        <DisplayData data={tabBarState} navigation={navigation} />
      ) : (
        <></>
      )}
    </SafeAreaView>
  );
};

export default TabBar;
