import { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  FlatList,
  SafeAreaView,
  StatusBar,
  Dimensions,
  ScrollView,
  ActivityIndicator,
  Image,
  ImageBackground,
  TextInput,
  PlatformColor,
  TouchableHighlight,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Switch,
} from "react-native";
import HomeScreen from "./pages/HomeScreen";
import SecondScreen from "./pages/SecondScreen";
import ThirdScreen from "./pages/ThirdScreen";
import FourthScreen from "./pages/FourthScreen";
import Calculator from "./pages/Calculator";
import SixthScreen from "./pages/SixthScreen";
import SeventhScreen from "./pages/SeventhScreen";

const { width, height } = Dimensions.get("screen");

const homePage = () => {
  return (
    <SafeAreaView style={styles.con}>
      {/* <HomeScreen /> */}
      {/* <SecondScreen /> */}
      {/* <ThirdScreen /> */}
      {/* <FourthScreen /> */}
      {/* <Calculator /> */}
      {/* <SixthScreen /> */}
      <SeventhScreen />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  con: {
    flex: 1,
  },
  image: {
    height: width * 0.6,
    resizeMode: "cover",
  },
});

export default homePage;
