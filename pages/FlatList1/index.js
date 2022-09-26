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
    a1: 1,
    b: 2,
    c: 3,
  };

  const { a1, b, c } = object;

  // console.log(a1, b, c, object);

  // const { data, data2 } = route.params;
  // //
  // console.log(data2);

  const [data1, setData1] = useState();

  const [displayArrayData, setDisplayArrayData] = useState();

  // useEffect(() => {
  //   if (route.params) {
  //     const { array, items1, array1, array2, array3, a } = route.params;
  //     setData(items1);
  //     setDisplayArrayData(array);
  //   } else {
  //     console.log("no routes");
  //   }
  // }, [route.params]);

  // console.log(data, "data");

  const [updatedData, setUpdatedData] = useState({
    string1: "Areeb",
    data: [],
    data2: [],
  });
  // const [updatedData2, setUpdatedData2] = useState([]);
  // const [updatedString, setUpdatedString] = useState("");
  useEffect(() => {
    if (route.params !== undefined) {
      const { data, data2, string } = route.params;
      setUpdatedData({
        string1: string,
        data: data,
        data2: data2,
      });
      // setUpdatedData2(data2);
      // setUpdatedString(string);
    } else {
      console.log("no data");
    }
  }, [route.params]);

  console.log(updatedData, "updatedData");
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <TouchableOpacity
        onPress={() => {
          navigation.goBack();
        }}
      >
        <Ionicons name="arrow-back-outline" size={30} />
        <Text>
          {updatedData.string1}
          {/* {b}
          {c} */}
        </Text>
      </TouchableOpacity>

      {updatedData.data?.map((item, index) => {
        return <Text>{item.label}</Text>;
      })}

      {updatedData.data2?.map((item, index) => {
        return <Text key={index}>{item.id}</Text>;
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
