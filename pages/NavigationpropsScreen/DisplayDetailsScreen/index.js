import { View, Text, SafeAreaView, TouchableOpacity } from "react-native";
import React, { useEffect, useState } from "react";
import { Ionicons } from "@expo/vector-icons";

const DisplayDetailsScreen = ({ navigation, route }) => {
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
  const [propIdData, setPropIdData] = useState("");
  const [dataDetails, setDataDetails] = useState();
  useEffect(() => {
    if (route.params !== undefined) {
      const { propId, data } = route.params;
      setPropIdData(propId);
      setDataDetails(data);
    } else {
      console.log("no data");
    }
  }, [route.params]);

  const newArray = array.filter((item) => item.id !== propIdData);
  return (
    <SafeAreaView>
      <TouchableOpacity
        onPress={() => {
          navigation.goBack();
        }}
      >
        <Ionicons name="arrow-back-outline" size={30} />
      </TouchableOpacity>
      <Text>{dataDetails?.name}</Text>
      <Text>{dataDetails?.description}</Text>
      {newArray?.map((item) => {
        return (
          <View
            key={item.name}
            style={{ marginVertical: 10, backgroundColor: "skyblue" }}
          >
            <Text>{item.name}</Text>
            <Text>{item.description}</Text>
            <Text>{item.id}</Text>
          </View>
        );
      })}
    </SafeAreaView>
  );
};

export default DisplayDetailsScreen;
