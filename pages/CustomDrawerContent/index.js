import { Ionicons } from "@expo/vector-icons";
import { DrawerContentScrollView, DrawerItem } from "@react-navigation/drawer";
import {
  Image,
  Linking,
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

function CustomDrawerContent({ navigation }) {
  return (
    <SafeAreaView style={{ marginTop: 40, flex: 1 }}>
      <ScrollView>
        <DrawerItem
          focused={false}
          drawerLabel={<Ionicons name="add" />}
          activeTintColor="red"
          inactiveTintColor="green"
          label="Help1"
          labelStyle={{ fontSize: 29 }}
          style={{ backgroundColor: "red" }}
          onPress={() => {
            let url =
              "whatsapp://send?text=" +
              "Hello How are you?" +
              "&phone=91" +
              253234234;
            Linking.openURL(url);
          }}
        />

        <TouchableOpacity
          style={{
            marginVertical: 10,
            backgroundColor: "skyblue",
            paddingVertical: 10,
          }}
          onPress={() => {
            navigation.navigate("FlatList");
          }}
        >
          <Text style={{ paddingLeft: 20 }}>Flatlist</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            marginVertical: 10,
            backgroundColor: "skyblue",
            paddingVertical: 10,
          }}
          onPress={() => {
            navigation.navigate("Fourth");
          }}
        >
          <Text style={{ paddingLeft: 20 }}>FourthScreen</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            marginVertical: 10,
            backgroundColor: "skyblue",
            paddingVertical: 10,
          }}
          onPress={() => {
            navigation.navigate("IssuesScreen");
          }}
        >
          <Text style={{ paddingLeft: 20 }}>IssuesScreen</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}

export default CustomDrawerContent;
