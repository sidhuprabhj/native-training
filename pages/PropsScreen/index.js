import { View, Text } from "react-native";
import React, { useState } from "react";
import MiniProps from "./MiniProps";
import { Picker } from "@react-native-picker/picker";
import DropDownPicker from "react-native-dropdown-picker";
const PropsScreen = () => {
  const [native, setNative] = useState("native");
  const [selectedValue, setSelectedValue] = useState("java1");
  const [native2, setNative2] = useState("native1");
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState([]);
  const [items, setItems] = useState([
    { label: "Apple", value: "apple2" },
    { label: "Banana3", value: "banana3" },
    { label: "Apple2", value: "apple5" },
    { label: "Banana3", value: "banana6" },
    { label: "Apple4", value: "apple7" },
    { label: "Banana5", value: "banana7" },
    { label: "Apple5", value: "apple8" },
    { label: "Banana7", value: "banana9" },
  ]);
  console.log(value);
  return (
    <View>
      <Text>PropsScreen</Text>
      <Text>{native}</Text>
      <View style={{ marginVertical: 20 }}>
        {/* <MiniProps native={native} setNative={setNative} /> */}
      </View>
      {/* <Picker
        selectedValue={selectedValue}
        style={{ height: 150, width: 150 }}
        onValueChange={(itemValue, itemIndex) => {
          console.log(itemValue);
          setSelectedValue(itemValue);
        }}
      >
        <Picker.Item label="Java2" value="java1" />
        <Picker.Item label="JavaScript1" value="JavaScript1" />
        <Picker.Item label="JavaScript2" value="JavaScript2" />
        <Picker.Item label="JavaScript3" value="js3" />
        <Picker.Item label="JavaScript4" value="js4" />
        <Picker.Item label="JavaScript5" value="js5" />
      </Picker> */}
      <DropDownPicker
        open={open}
        multiple={false}
        value={value}
        items={items}
        min={0}
        max={3}
        setOpen={() => {
          setOpen(!open);
        }}
        setValue={(e) => {
          setValue(e);
        }}
        maxHeight={300}
        setItems={setItems}
      />
    </View>
  );
};

export default PropsScreen;
