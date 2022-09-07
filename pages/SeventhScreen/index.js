import {
  View,
  Text,
  Modal,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
  RefreshControl,
  Pressable,
  Button,
  StatusBar,
  TouchableNativeFeedback,
  StyleSheet,
} from "react-native";
import React, { useEffect, useState } from "react";

const SeventhScreen = () => {
  const [modalVisible, setModalVisible] = useState(false);

  const [pressable, setPressable] = useState("notpress");
  useEffect(() => {}, [modalVisible]);

  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = () => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 1000);
  };
  console.log("refreshing", pressable);
  const [rippleColor, setRippleColor] = useState(randomHexColor());
  const [rippleOverflow, setRippleOverflow] = useState(false);
  return (
    <SafeAreaView
      style={{
        flex: 1,
        marginHorizontal: 30,
        // opacity: modalVisible === true ? 0.2 : 1,
        // backgroundColor: modalVisible === true ? "red" : "#fff",
      }}
    >
      <Modal
        visible={modalVisible}
        animationType="fade"
        transparent={true}
        statusBarTranslucent={false}
        onRequestClose={(e) => {
          // console.log(e, "Closed Modals");
        }}
        onDismiss={(e) => {
          console.log(e, "Closed Modals");
        }}
      >
        <View
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <View style={{ height: 300, width: 300, backgroundColor: "green" }}>
            <TouchableOpacity
              onPress={() => {
                setModalVisible(false);
              }}
            >
              <Text style={{ fontSize: 20, color: "#fff" }}>Close Modal</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
      <Text>Modal</Text>
      <TouchableOpacity
        onPress={() => {
          setModalVisible(true);
        }}
      >
        <Text style={{ fontSize: 20 }}>Open Modal</Text>
      </TouchableOpacity>
      <View style={{ height: 160 }}>
        <ScrollView
          contentContainerStyle={{}}
          refreshControl={
            <RefreshControl
              colors="red"
              enabled={false}
              progressViewOffset={70}
              title={"refreshing"}
              titleColor="red"
              size="large"
              tintColor="red"
              refreshing={refreshing}
              onRefresh={() => {
                onRefresh();
              }}
            />
          }
        ></ScrollView>
      </View>

      <Pressable
        disabled={false}
        style={{
          backgroundColor:
            pressable === "pressIn"
              ? "green"
              : pressable === "press"
              ? "orange"
              : pressable === "pressOut"
              ? "black"
              : "red",
        }}
        onPressIn={() => {
          setPressable("pressIn");
        }}
        onLongPress={() => {
          console.log(";longpress");
        }}
        delayLongPress={() => {
          console.log(";delay");
        }}
        onPress={() => {
          setPressable("press");
        }}
        onPressOut={() => {
          setPressable("pressOut");
        }}
      >
        <Text style={{ fontSize: 18, marginVertical: 10 }}>I'm pressable!</Text>
      </Pressable>

      <Button
        title="Native leeafing"
        color="red"
        accessibilityLabel="Learn more about this purple button"
      />
      <View style={styles.container}>
        <TouchableNativeFeedback
          onPress={() => {
            setRippleColor(randomHexColor());
            setRippleOverflow(!rippleOverflow);
          }}
          background={TouchableNativeFeedback.Ripple(
            rippleColor,
            rippleOverflow
          )}
        >
          <View style={styles.touchable}>
            <Text style={styles.text}>TouchableNativeFeedback</Text>
          </View>
        </TouchableNativeFeedback>
      </View>
    </SafeAreaView>
  );
};

export default SeventhScreen;

const randomHexColor = () => {
  return "#000000".replace(/0/g, function () {
    return (~~(Math.random() * 16)).toString(16);
  });
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    paddingTop: StatusBar.currentHeight,
    backgroundColor: "#ecf0f1",
    padding: 8,
  },
  touchable: { flex: 0.5, borderColor: "black", borderWidth: 1 },
  text: { alignSelf: "center" },
});
