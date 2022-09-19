import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import MiniProp3 from "./MiniProp3";

const MiniProps = ({ setNative, native }) => {
  return (
    <View>
      <TouchableOpacity
        style={{ backgroundColor: "red" }}
        onPress={() => {
          setNative("native222");
        }}
      >
        <Text>update props State</Text>
      </TouchableOpacity>
      <View style={{ marginVertical: 20 }}>
        <MiniProp3 native={native} setNative={setNative} />
      </View>
      <Text>{native}</Text>
    </View>
  );
};

export default MiniProps;
