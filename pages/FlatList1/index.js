import {
  View,
  Text,
  FlatList,
  ScrollView,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import React, { useState, useEffect } from "react";

const FlatList1 = ({ navigation, route }) => {
  const object = {
    a: 1,
    b: 2,
    c: 3,
  };

  const { a, b, c } = object;

  const [data, setData] = useState();

  const [displayArrayData, setDisplayArrayData] = useState();

  useEffect(() => {
    if (route.params) {
      const { array, items1, array1, array2, array3, a } = route.params;
      setData(items1);
      setDisplayArrayData(array);
    } else {
      console.log("no routes");
    }
  }, [route.params]);

  console.log(data, "data");

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <TouchableOpacity
        onPress={() => {
          navigation.goBack();
        }}
      >
        <Ionicons name="arrow-back-outline" size={30} />
        <Text>
          {a}
          {b}
          {c}
        </Text>
      </TouchableOpacity>

      {data?.map((item) => {
        return (
          <Text>
            {item.label}
            {item.value}
          </Text>
        );
      })}

      {displayArrayData?.map((item) => {
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
