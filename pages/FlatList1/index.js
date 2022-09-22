import {
  View,
  Text,
  FlatList,
  ScrollView,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import React, { useState } from "react";

const FlatList1 = ({ navigation, route }) => {
  const { array, items1, array1, array2, array3 } = route.params;

  const [data, setData] = useState(0);
  // const Data = (item) => {
  //   return <Text>{item}</Text>;
  // };
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <TouchableOpacity
        onPress={() => {
          navigation.goBack();
        }}
      >
        <Ionicons name="arrow-back-outline" size={30} />
      </TouchableOpacity>

      {items1?.map((item) => {
        return (
          <Text>
            {item.label}
            {item.value}
          </Text>
        );
      })}

      {array?.map((item) => {
        return <Text>{item.id}</Text>;
      })}
      {/* <ScrollView
        horizontal
        contentContainerStyle={{
          marginVertical: 40,
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        {array?.map((item) => {
          return (
            <Text style={{ marginHorizontal: 10 }} key={item}>
              {item}
            </Text>
          );
        })}
      </ScrollView> */}

      {/* <FlatList
        data={array}
        keyExtractor={(item) => item}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              onPress={() => {
                setData(item);
              }}
            >
              <Text style={{ marginHorizontal: 10, marginVertical: 10 }}>
                {item}
              </Text>
            </TouchableOpacity>
          );
        }}
      /> */}
    </SafeAreaView>
  );
};

export default FlatList1;
