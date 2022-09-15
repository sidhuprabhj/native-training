import {
  View,
  Text,
  FlatList,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";

const FlatList1 = () => {
  const array = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 15, 25, 34, 44, 54, 64, 74, 84, 94,
    104, 114, 142,
  ];

  const [data, setData] = useState(0);
  console.log(data);
  // const Data = (item) => {
  //   return <Text>{item}</Text>;
  // };
  return (
    <View style={{ flex: 1 }}>
      <Text>FlatList</Text>
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

      <FlatList
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
      />
    </View>
  );
};

export default FlatList1;
