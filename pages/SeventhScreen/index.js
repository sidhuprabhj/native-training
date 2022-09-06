import {
  View,
  Text,
  Modal,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import React, { useState } from "react";

const SeventhScreen = () => {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <SafeAreaView
      style={{
        flex: 1,
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
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          <View style={{ height: 600, width: 300, backgroundColor: "green" }}>
            <Text>Modal Data</Text>
            <TouchableOpacity
              onPress={() => {
                setModalVisible(false);
              }}
            >
              <Text style={{ fontSize: 20 }}>Close Modal</Text>
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
    </SafeAreaView>
  );
};

export default SeventhScreen;
