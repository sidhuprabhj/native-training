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
    }, 10000);
  };
  console.log("refreshing", pressable);
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: refreshing === true ? "orange" : "skyblue",
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
      {/* <View style={{ height: 160, backgroundColor: "green" }}> */}
      <ScrollView
        contentContainerStyle={{}}
        refreshControl={
          <RefreshControl
            colors="red" //android
            enabled={false}
            progressViewOffset={0}
            title={"refreshing"} //ios
            titleColor="red" //ios
            size="large"
            tintColor="red" //ios
            refreshing={refreshing}
            onRefresh={() => {
              onRefresh();
            }}
          />
        }
      >
        <Pressable
          disabled={false}
          style={{
            marginHorizontal: 20,
            borderRadius: 10,
            padding: 10,
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
            // console.log(";longpress");
          }}
          delayLongPress={() => {
            console.log(";delay");
          }}
          onPress={() => {
            console.log("pressed");
            setPressable("press");
          }}
          onPressOut={() => {
            setPressable("pressOut");
          }}
        >
          <Text
            style={{
              color: "#fff",
              fontSize: refreshing ? 22 : 15,
              marginVertical: 10,
            }}
          >
            {refreshing === true ? "Refrshing" : "I'm pressable!"}
          </Text>
        </Pressable>

        <Button
          title="asd"
          color="red"
          accessibilityLabel="Learn more about this purple button"
        />
        <TouchableOpacity>
          <Text>asdsd</Text>
        </TouchableOpacity>
      </ScrollView>
      {/* </View> */}
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
