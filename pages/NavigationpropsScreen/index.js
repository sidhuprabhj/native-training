import { View, Text, SafeAreaView, TouchableOpacity } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import Calculator from "../Calculator";
import { useDrawerStatus } from "@react-navigation/drawer";

const NavigationpropsScreen = ({ navigation }) => {
  const isDrawerOpen = useDrawerStatus() === "open";
  console.log(isDrawerOpen, "isDrawerOpen");
  const array = [
    {
      name: "Native",
      id: 1,
      description: "this is Native",
    },
    {
      name: "Chemistry",
      id: 2,
      description: "this is chemistry",
    },
    {
      name: "Physics",
      id: 3,
      description: "this is Physics",
    },
    {
      name: "Maths",
      id: 3,
      description: "this is Maths",
    },
    {
      name: "Biology",
      id: 3,
      description: "this is Biology",
    },
  ];
  const a = 1;
  const b = 2;
  return (
    <SafeAreaView style={{ opacity: isDrawerOpen === true ? 0.2 : 1 }}>
      <TouchableOpacity
        onPress={() => {
          navigation.openDrawer();
        }}
      >
        <Ionicons name="menu" size={30} />
      </TouchableOpacity>

      {/* <Calculator a={a} b={b} c={"20"} /> */}
      {array?.map((item) => {
        return (
          <TouchableOpacity
            onPress={() => {
              // console.log(item);
              navigation.navigate("DisplayDetailsScreen", {
                propId: item.id,
                data: item,
              });
            }}
            key={item.name}
            style={{
              paddingHorizontal: 20,
              paddingVertical: 10,
              marginVertical: 10,
              backgroundColor: "lightgreen",
            }}
          >
            <Text>{item.name}</Text>
          </TouchableOpacity>
        );
      })}
    </SafeAreaView>
  );
};

export default NavigationpropsScreen;
