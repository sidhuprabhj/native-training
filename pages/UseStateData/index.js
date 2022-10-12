import { View, Text, SafeAreaView } from "react-native";
import React, { useEffect, useState } from "react";

const UseStateData = () => {
  const [data1, setData1] = useState({});

  const objectData = {
    id: 1,
    name: "areeb",
    phone: 324234,
  };

  const stringData = "native";
  const numberData = 0;

  useEffect(() => {
    setData1(objectData);
    // setData(numberData);
  }, []);

  return (
    <SafeAreaView>
      <Text>{data1?.phone}</Text>
    </SafeAreaView>
  );
};

export default UseStateData;
