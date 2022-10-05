import { View, Text, SafeAreaView, TouchableOpacity } from "react-native";
import React, { useEffect, useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import { StackActions } from "@react-navigation/native";

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
  const [propIdData, setPropIdData] = useState("no data");
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

  let newArray = array.filter((item) => item.id !== propIdData);
  newArray = newArray.filter((item) => item.id !== 2);
  // let abc = 2;
  // useEffect(() => {
  //   abc = 3;
  //   abc = 54;
  // }, []);
  // abc = 40;
  // console.log('abc,"abc', abc, "abc");
  const popAction = StackActions.pop(2);

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
      <TouchableOpacity
        onPress={() => {
          // navigation.dispatch(popAction);
          navigation.navigate("FlatList");
        }}
      >
        <Text>Replace</Text>
      </TouchableOpacity>
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
