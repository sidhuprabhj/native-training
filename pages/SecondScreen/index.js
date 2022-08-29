import React, { useEffect, useState } from "react";

import { View, Text, TouchableOpacity, TextInput } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";

const SecondScreen = () => {
  const [counter1, setCounter1] = useState("");
  const [counter2, setCounter2] = useState("");
  const [counter3, setCounter3] = useState("");
  const [counter4, setCounter4] = useState("");
  const [counter5, setCounter5] = useState("");
  const [addition, setAddition] = useState("");
  const [totalValue, setTotalValue] = useState([]);
  const [sub, setSub] = useState("");
  const [total, setTotal] = useState(0);
  useEffect(() => {
    setAddition("");
    if (!!counter1 === true)
      setTotalValue((prev) => {
        return [...prev, counter1];
      });
  }, [counter1]);
  useEffect(() => {
    setAddition("");

    if (!!counter2 === true)
      setTotalValue((prev) => {
        return [...prev, counter2];
      });
  }, [counter2]);
  useEffect(() => {
    setAddition("");

    if (!!counter3 === true)
      setTotalValue((prev) => {
        return [...prev, counter3];
      });
  }, [counter3]);
  useEffect(() => {
    if (!!addition === true)
      setTotalValue((prev) => {
        return [...prev, addition];
      });
  }, [addition]);
  console.log(addition, "totalValue");

  return (
    <View
      style={{
        // flexDirection: "row",
        // alignItems: "center",
        marginHorizontal: 30,
      }}
    >
      <View>
        <TouchableOpacity
          onPress={() => {
            setCounter1("1");
          }}
        >
          <Text>1</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            setCounter2("2");
          }}
        >
          <Text>{2}</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            setCounter3("3");
          }}
        >
          <Text>{3}</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            setCounter4("4");
          }}
        >
          <Text>{4}</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            setCounter5("5");
          }}
        >
          <Text>{5}</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity
        onPress={() => {
          setSub("-");
        }}
      >
        <Ionicons name="remove-outline" size={32} color="black" />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          setAddition("+");
        }}
      >
        <Ionicons name="add-outline" size={32} color="red" />
      </TouchableOpacity>

      <TextInput
        style={{
          width: "80%",
          borderColor: "#000",
          borderWidth: 1,
          alignSelf: "center",
          padding: 10,
        }}
        value={totalValue.join("")}
      />
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <Text>Total</Text>
        <Text style={{ color: "red" }}>{total}</Text>
      </View>
    </View>
  );
};

export default SecondScreen;
