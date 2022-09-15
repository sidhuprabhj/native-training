import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  SafeAreaView,
  ActivityIndicator,
  Image,
  ImageBackground,
  ScrollView,
  TextInput,
  TouchableOpacity,
} from "react-native";

import Image1 from "../../assets/image/image2.jpg";

const HomeScreen = () => {
  const [native, updateNative] = useState("2");
  console.log(native, "native1");

  const [textInputState, setTextInputState] = useState("");

  useEffect(() => {
    // console.log(native, "native");
    // updateNative(30);
  }, [native]);
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <TouchableOpacity
        style={{ marginHorizontal: 10, backgroundColor: "red", padding: 10 }}
        onPress={() => {
          updateNative("9099922");
        }}
      >
        <Text style={{ color: "#fff", fontSize: 17 }}>{native}</Text>
      </TouchableOpacity>

      <TextInput
        value={textInputState}
        style={{
          width: "60%",
          height: 40,
          // marginHorizontal: 20,
          alignSelf: "center",
          borderColor: "red",
          borderWidth: 1,
        }}
        onChangeText={(e) => {
          console.log(e, "textIbput");
          setTextInputState(e);
        }}
      />
      <Text>{textInputState}</Text>

      {/* <ScrollView>
        <ActivityIndicator color="red" size="large" />
        <Text>asd</Text>
        <Image
          source={{
            uri: "data:image/jpeg;base64,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",
          }}
          style={{ width: "100%", height: "30%", resizeMode: "contain" }}
        />


        <Image
          source={require("../../assets/image/image2.jpg")}
          style={{ width: 40, height: 40 }}
        />


        <View>
          <Text style={{ position: "absolute", zIndex: 2, fontSize: 36 }}>
            sjkdasd
          </Text>
          <Text
            style={{
              position: "absolute",
              zIndex: 1,
              color: "red",
              fontSize: 36,
            }}
          >
            Native
          </Text>
          <Image
            source={Image1}
            style={{ width: 100, height: 100, zIndex: 0 }}
          />
        </View>
        <ImageBackground source={Image1} style={{ width: 80, height: 80 }}>
          <Text style={{ color: "blue", fontSize: 23 }}>asd</Text>
          <Text>sd</Text>
          <View
            style={{ backgroundColor: "#fff", width: 10, height: 10 }}
          ></View>
        </ImageBackground>

        <Text style={{ color: "red" }} numberOfLines={2} ellipsizeMode="tail">
          NAtiveasjdjksdhfjskhdfkjshdfkjsdfhjasdasm,dnaskjdnasdjnaksjdnaksdnas,mdnas,das,mdnas,mdas,ndasjndakjsdnnasd,ansdmansd
        </Text>

        <TextInput
          style={{
            width: "60%",
            height: 40,
            // marginHorizontal: 20,
            alignSelf: "center",
            borderColor: "red",
            borderWidth: 1,
          }}
        />
        <TouchableOpacity>
          <Text>Native</Text>
        </TouchableOpacity>
      </ScrollView> */}
    </SafeAreaView>
  );
};

export default HomeScreen;
