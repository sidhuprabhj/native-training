import { View, Text, SafeAreaView, TouchableOpacity } from "react-native";
import React from "react";

const NavigationpropsScreen = ({ navigation }) => {
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
  return (
    <SafeAreaView>
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
