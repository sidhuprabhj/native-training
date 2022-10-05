import {
  View,
  Text,
  TouchableOpacity,
  Modal,
  FlatList,
  SafeAreaView,
  VirtualizedList,
} from "react-native";
import React, { useEffect, useState } from "react";
import { ScrollView } from "react-native-gesture-handler";
import { Ionicons } from "@expo/vector-icons";

const IssuesScreen = ({ navigation }) => {
  const [data, setData] = useState(0);
  const [modal, setModal] = useState(false);
  // useEffect(() => {
  //   setModal(true);
  // }, []);

  const array = [1, 2, 3, 4, 5, 6, 7, 8];
  const Item = ({ title }) => (
    <View style={styles.item}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );

  const getItem = (data, index) => ({
    id: Math.random().toString(12).substring(0),
    title: `Item ${index + 1}`,
  });
  const getItemCount = (data) => 50;
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <TouchableOpacity
        onPress={() => {
          navigation.openDrawer();
        }}
      >
        <Ionicons name="menu" size={30} />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          setModal(true);
        }}
      >
        <Text>Modal open</Text>
      </TouchableOpacity>

      <Modal visible={modal} transparent={true}>
        <View
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <View
            style={{
              height: 400,
              width: "90%",
              justifyContent: "center",
              alignItems: "center",
              shadowColor: "#000",
              shadowOffset: {
                width: 0,
                height: 12,
              },
              shadowOpacity: 0.58,
              shadowRadius: 16.0,

              elevation: 24,
              backgroundColor: "#fff",
              padding: 10,
              borderRadius: 10,
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <TouchableOpacity
              style={{
                width: 80,
                marginRight: 10,
                paddingVertical: 10,
                backgroundColor: "red",
              }}
              onPress={() => {
                setModal(false);
              }}
            >
              <Text style={{ textAlign: "center", color: "#fff" }}>Cancel</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{ width: 80, paddingVertical: 10, backgroundColor: "red" }}
              onPress={() => {
                setModal(false);
              }}
            >
              <Text style={{ textAlign: "center", color: "#fff" }}>Save</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
      {array?.map((item) => {
        return (
          <Text style={{ marginHorizontal: 40 }} key={item}>
            {item}
          </Text>
        );
      })}

      {array.length === 0 ? (
        <Text style={{ color: "red" }}>no data</Text>
      ) : (
        <></>
      )}
      <View style={{ marginVertical: 10 }}></View>
      <FlatList
        // horizontal={true}
        data={array}
        renderItem={({ item }) => {
          return (
            <Text style={{ marginHorizontal: 40, marginVertical: 40 }}>
              {item}
            </Text>
          );
        }}
        ListEmptyComponent={() => {
          return <Text>no data</Text>;
        }}
        ItemSeparatorComponent={() => {
          return <View style={{ borderWidth: 0.5 }}></View>;
        }}
        ListFooterComponent={() => {
          return (
            <View style={{}}>
              <Text>Data</Text>
            </View>
          );
        }}
        ListHeaderComponent={() => {
          return <Text>Header</Text>;
        }}
        ListFooterComponentStyle={{
          backgroundColor: "green",
          paddingVertical: 40,
        }}
      />
    </SafeAreaView>
  );
};

export default IssuesScreen;
