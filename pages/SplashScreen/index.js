import { View, Text, SafeAreaView, Image } from "react-native";
import React, { useEffect } from "react";
import Winter from "../../assets/Winter.gif";

const SplashScreen = ({ navigation }) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate("PropsScreen");
    }, 1200);
  }, []);

  return (
    <SafeAreaView style={{ backgroundColor: "#fff", flex: 1 }}>
      <Image
        source={Winter}
        style={{ width: 300, height: 300, alignSelf: "center" }}
      />
    </SafeAreaView>
  );
};

export default SplashScreen;
