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
const { width, height } = Dimensions.get("screen");

const BackUpScreen = () => {
  const [state, setState] = useState(1);
  const [state2, setState2] = useState(9);
  const [isEnabled, setIsEnabled] = useState(false);

  console.log(isEnabled, "edge");
  const toggleSwitch = () => setIsEnabled(!isEnabled);

  // console.log(state, "Platform.OS");

  useEffect(() => {
    console.log("Data333");
    setState(state + 2);
    setIsEnabled(!isEnabled);
  }, [state2]);
  console.log(state, "state");
  return (
    <View>
      {/* <ScrollView>
        <ImageBackground
          source={require("../../assets/image/image2.jpg")}
          style={[
            styles.image,
            {
              width: isEnabled === true ? width * 0.4 : width * 0.6,
            },
          ]}
        >
          <ActivityIndicator color={"red"} animating={true} size="large" />
        </ImageBackground>
        <Text
          style={{
            color: state === 3 && isEnabled == true ? "red" : "green",
          }}
        >
          sdhasbd
        </Text>
        <ActivityIndicator color={"red"} animating={true} size="large" />

        <Image
          source={require("../../assets/image/image2.jpg")}
          style={styles.image}
        />

        <TextInput
          style={{
            width: width * 0.8,
            height: 40,
            borderColor: "red",
            borderWidth: 1,
            alignSelf: "center",
          }}
        />
        <TouchableHighlight
          style={{
            width,
            height: 40,
            backgroundColor: "red",
          }}
          onPress={() => {
            setState2(state2 + 1);
          }}
        >
          <Text>State2</Text>
        </TouchableHighlight>
        <TouchableOpacity
          activeOpacity={0.5}
          style={{
            width,
            height: 40,
            backgroundColor: "green",
          }}
          onPress={() => {
            setState(state + 1);
          }}
        >
          <Text>Native</Text>
        </TouchableOpacity>

        <Switch
          trackColor={{ false: "red", true: "green" }}
          thumbColor={isEnabled === true ? "red" : "black"}
          ios_backgroundColor="#3e3e3e"
          onValueChange={toggleSwitch}
          value={isEnabled}
        />
        <View
          style={{ width: width, height: height * 0.5, backgroundColor: "red" }}
        ></View>
        <View
          style={{
            width: width,
            height: height * 0.5,
            backgroundColor: "orange",
          }}
        ></View>
        <View
          style={{
            width: width,
            height: height * 0.5,
            backgroundColor: "green",
          }}
        ></View>
      </ScrollView> */}
    </View>
  );
};

export default BackUpScreen;

const styles = StyleSheet.create({
  con: {
    flex: 1,
  },
  image: {
    height: width * 0.6,
    resizeMode: "cover",
  },
});
