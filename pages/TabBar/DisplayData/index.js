import { View, Text, ScrollView } from "react-native";
import React, { useState, useEffect } from "react";
import { TouchableOpacity } from "react-native-gesture-handler";
import {
  useFocusEffect,
  useIsFocused,
  useLinkTo,
  useNavigation,
  useScrollToTop,
} from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";

const DisplayData = ({ data }) => {
  const navigation = useNavigation();
  const isFocused = useIsFocused();
  console.log(isFocused, "isFocused");
  useFocusEffect(
    React.useCallback(() => {
      // scrollRef.current?.scrollTo({
      //   y: 0,
      //   animated: true,
      // });
    }, [])
  );
  const scrollRef = React.useRef();
  useEffect(() => {
    if (data == "One") {
      console.log("one2");
    }
    scrollRef.current?.scrollTo({
      y: 110,
      animated: true,
    });
  }, [data]);
  const linkTo = useLinkTo();
  const ref = React.useRef(0);

  console.log(ref?.current);

  return (
    <View style={{}}>
      <Text>{data}</Text>
      <TouchableOpacity
        onPress={() =>
          scrollRef?.current?.scrollTo({
            y: 0,
            animated: true,
          })
        }
        style={{
          zIndex: 100,
        }}
      >
        <Ionicons name="add" />
      </TouchableOpacity>
      <ScrollView ref={scrollRef} style={{ zIndex: -50 }}>
        <View
          style={{ marginVertical: 40 }}
          onPress={() => {
            // navigation.navigate("Fourth", {});
            // linkTo("/Fourth");
          }}
        >
          <Text>Fourth</Text>
        </View>
        {data === "One" ? <Text>"one is clicked"</Text> : <></>}
        {data === "Two" ? <Text>"Two is clicked"</Text> : <></>}
        {data === "Three" ? <Text>"Three is clicked"</Text> : <></>}
        <View
          style={{ marginVertical: 40 }}
          onPress={() => {
            // navigation.navigate("Fourth", {});
            // linkTo("/Fourth");
          }}
        >
          <Text>Fourth</Text>
        </View>
        {data === "One" ? <Text>"one is clicked"</Text> : <></>}
        {data === "Two" ? <Text>"Two is clicked"</Text> : <></>}
        {data === "Three" ? <Text>"Three is clicked"</Text> : <></>}
        <View
          style={{ marginVertical: 40 }}
          onPress={() => {
            // navigation.navigate("Fourth", {});
            // linkTo("/Fourth");
          }}
        >
          <Text>Fourth</Text>
        </View>
        {data === "One" ? <Text>"one is clicked"</Text> : <></>}
        {data === "Two" ? <Text>"Two is clicked"</Text> : <></>}
        {data === "Three" ? <Text>"Three is clicked"</Text> : <></>}
        <View
          style={{ marginVertical: 40 }}
          onPress={() => {
            // navigation.navigate("Fourth", {});
            // linkTo("/Fourth");
          }}
        >
          <Text>Fourth</Text>
        </View>
        {data === "One" ? <Text>"one is clicked"</Text> : <></>}
        {data === "Two" ? <Text>"Two is clicked"</Text> : <></>}
        {data === "Three" ? <Text>"Three is clicked"</Text> : <></>}
        <View
          style={{ marginVertical: 40 }}
          onPress={() => {
            navigation.navigate("Fourth", {});
            // linkTo("/Fourth");
          }}
        >
          <Text>Fourth</Text>
        </View>
        {data === "One" ? <Text>"one is clicked"</Text> : <></>}
        {data === "Two" ? <Text>"Two is clicked"</Text> : <></>}
        {data === "Three" ? <Text>"Three is clicked"</Text> : <></>}
        <View
          style={{ marginVertical: 40 }}
          onPress={() => {
            navigation.navigate("Fourth", {});
            // linkTo("/Fourth");
          }}
        >
          <Text>Fourth</Text>
        </View>
        {data === "One" ? <Text>"one is clicked"</Text> : <></>}
        {data === "Two" ? <Text>"Two is clicked"</Text> : <></>}
        {data === "Three" ? <Text>"Three is clicked"</Text> : <></>}
        <View
          style={{ marginVertical: 40 }}
          onPress={() => {
            navigation.navigate("Fourth", {});
            // linkTo("/Fourth");
          }}
        >
          <Text>Fourth</Text>
        </View>
        {data === "One" ? <Text>"one is clicked"</Text> : <></>}
        {data === "Two" ? <Text>"Two is clicked"</Text> : <></>}
        {data === "Three" ? <Text>"Three is clicked"</Text> : <></>}
        <View
          style={{ marginVertical: 40 }}
          onPress={() => {
            navigation.navigate("Fourth", {});
            // linkTo("/Fourth");
          }}
        >
          <Text>Fourth</Text>
        </View>
        {data === "One" ? <Text>"one is clicked"</Text> : <></>}
        {data === "Two" ? <Text>"Two is clicked"</Text> : <></>}
        {data === "Three" ? <Text>"Three is clicked"</Text> : <></>}
        <View
          style={{ marginVertical: 40 }}
          onPress={() => {
            // navigation.navigate("Fourth", {});
            // linkTo("/Fourth");
          }}
        >
          <Text>Fourth</Text>
        </View>
        {data === "One" ? <Text>"one is clicked"</Text> : <></>}
        {data === "Two" ? <Text>"Two is clicked"</Text> : <></>}
        {data === "Three" ? <Text>"Three is clicked"</Text> : <></>}
        <View
          style={{ marginVertical: 40 }}
          onPress={() => {
            // navigation.navigate("Fourth", {});
            // linkTo("/Fourth");
          }}
        >
          <Text>Fourth</Text>
        </View>
        {data === "One" ? <Text>"one is clicked"</Text> : <></>}
        {data === "Two" ? <Text>"Two is clicked"</Text> : <></>}
        {data === "Three" ? <Text>"Three is clicked"</Text> : <></>}
        <View
          style={{ marginVertical: 40 }}
          onPress={() => {
            // navigation.navigate("Fourth", {});
            // linkTo("/Fourth");
          }}
        >
          <Text>Fourth</Text>
        </View>
        {data === "One" ? <Text>"one is clicked"</Text> : <></>}
        {data === "Two" ? <Text>"Two is clicked"</Text> : <></>}
        {data === "Three" ? <Text>"Three is clicked"</Text> : <></>}
        <View
          style={{ marginVertical: 40 }}
          onPress={() => {
            // navigation.navigate("Fourth", {});
            // linkTo("/Fourth");
          }}
        >
          <Text>Fourth</Text>
        </View>
        {data === "One" ? <Text>"one is clicked"</Text> : <></>}
        {data === "Two" ? <Text>"Two is clicked"</Text> : <></>}
        {data === "Three" ? <Text>"Three is clicked"</Text> : <></>}
        <View
          style={{ marginVertical: 40 }}
          onPress={() => {
            navigation.navigate("Fourth", {});
            // linkTo("/Fourth");
          }}
        >
          <Text>Fourth</Text>
        </View>
        {data === "One" ? <Text>"one is clicked"</Text> : <></>}
        {data === "Two" ? <Text>"Two is clicked"</Text> : <></>}
        {data === "Three" ? <Text>"Three is clicked"</Text> : <></>}
        <View
          style={{ marginVertical: 40 }}
          onPress={() => {
            navigation.navigate("Fourth", {});
            // linkTo("/Fourth");
          }}
        >
          <Text>Fourth</Text>
        </View>
        {data === "One" ? <Text>"one is clicked"</Text> : <></>}
        {data === "Two" ? <Text>"Two is clicked"</Text> : <></>}
        {data === "Three" ? <Text>"Three is clicked"</Text> : <></>}
        <View
          style={{ marginVertical: 40 }}
          onPress={() => {
            navigation.navigate("Fourth", {});
            // linkTo("/Fourth");
          }}
        >
          <Text>Fourth</Text>
        </View>
        {data === "One" ? <Text>"one is clicked"</Text> : <></>}
        {data === "Two" ? <Text>"Two is clicked"</Text> : <></>}
        {data === "Three" ? <Text>"Three is clicked"</Text> : <></>}
        <View
          style={{ marginVertical: 40 }}
          onPress={() => {
            navigation.navigate("Fourth", {});
            // linkTo("/Fourth");
          }}
        >
          <Text>Fourth</Text>
        </View>
        {data === "One" ? <Text>"one is clicked"</Text> : <></>}
        {data === "Two" ? <Text>"Two is clicked"</Text> : <></>}
        {data === "Three" ? <Text>"Three is clicked"</Text> : <></>}
      </ScrollView>
    </View>
  );
};

export default DisplayData;
