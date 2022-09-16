import {
  View,
  Text,
  Modal,
  SafeAreaView,
  TouchableOpacity,
  Image,
  Switch,
  ScrollView,
  RefreshControl,
} from "react-native";
import React, { useState } from "react";

const ModalScreen = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [switches, setSwitches] = useState(false);
  const [refresh, setRefresh] = useState(false);

  console.log(refresh, "refresh");
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: modalVisible === true ? "#ccc" : "#fff",
      }}
    >
      <ScrollView
        refreshControl={
          <RefreshControl
            onRefresh={() => {
              setRefresh(true);
              setTimeout(() => {
                setRefresh(false);
                // setModalVisible(true);
              }, 1500);
            }}
            refreshing={refresh}
          />
        }
      >
        {modalVisible === false ? (
          <View>
            <TouchableOpacity
              style={{
                backgroundColor: "skyblue",
                paddingHorizontal: 10,
                paddingVertical: 6,
                width: 130,
                alignSelf: "center",
              }}
              onPress={(e) => {
                // console.log("touchable", e);
                setModalVisible(true);
              }}
            >
              <Text style={{ textAlign: "center" }}>Open Model</Text>
            </TouchableOpacity>
            <Text>Modal</Text>
          </View>
        ) : (
          <></>
        )}

        <Switch
          onChange={(e) => {
            // console.log("changes", e);
          }}
          trackColor={{ false: "#000", true: "yellow" }}
          ios_backgroundColor="#000"
          value={switches}
          thumbColor={switches === true ? "red" : "orange"}
          onValueChange={(e) => {
            // console.log(e, "e");
            setModalVisible(true);
            setSwitches(e);
          }}
        />
      </ScrollView>

      <Modal visible={modalVisible} transparent={true}>
        <View
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <View
            style={{
              height: 120,
              width: 300,
              borderRadius: 20,
              backgroundColor: "#fff",
              justifyContent: "center",
              alignItems: "center",
              //ios shadow generator
              shadowColor: "#000",
              shadowOffset: {
                width: 0,
                height: 2,
              },
              shadowOpacity: 0.25,
              shadowRadius: 3.84,

              elevation: 5, //android
            }}
          >
            <Text style={{ color: "#000", marginVertical: 5 }}>Your title</Text>
            <Text style={{ color: "#000", marginVertical: 5 }}>
              This is native alert
            </Text>
            <View
              style={{
                borderWidth: 1,
                borderColor: "#ccc",
                width: "100%",
                marginVertical: 10,
              }}
            ></View>
            <TouchableOpacity
              style={{
                backgroundColor: "#fff",
                paddingHorizontal: 10,
                paddingVertical: 6,
                width: 130,
                alignSelf: "center",
              }}
              onPress={() => {
                setModalVisible(false);
              }}
            >
              <Text style={{ textAlign: "center", color: "blue" }}>Ok</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
};

export default ModalScreen;
