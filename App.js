import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
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
import FlatList1 from "./pages/FlatList1";
import ModalScreen from "./pages/ModalScreen";

const { width, height } = Dimensions.get("screen");

const App = () => {
  return (
    <SafeAreaView style={styles.con}>
      {/* <HomeScreen /> */}
      <ModalScreen />
      {/* <BackupScreen /> */}
      {/* <SecondScreen /> */}
      {/* <ThirdScreen /> */}
      {/* <FourthScreen /> */}
      {/* <Calculator /> */}
      {/* <SixthScreen /> */}
      {/* <SeventhScreen /> */}
      {/* <FlatList1 /> */}
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

export default App;
