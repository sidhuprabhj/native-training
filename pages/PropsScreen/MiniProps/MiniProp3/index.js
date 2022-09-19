import { View, Text, TouchableOpacity, Alert, Platform } from "react-native";
import React from "react";

const MiniProp3 = ({ setNative, native }) => {
  console.log(Platform.OS);
  return (
    <View>
      <Text>MiniProp3</Text>
      <TouchableOpacity
        style={{ backgroundColor: "skyblue" }}
        onPress={() => {
          Alert.alert("Warning", "My Alert Msg", [
            {
              text: "Cancel1",
              onPress: () => console.log("Cancel Pressed"),
              style: "cancel",
            },
            { text: "OK1", onPress: () => setNative("new update") },
          ]);
        }}
      >
        <Text>update again</Text>
      </TouchableOpacity>
      <Text>{native}</Text>
    </View>
  );
};

export default MiniProp3;
