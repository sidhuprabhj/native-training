import { StyleSheet, Text, View } from "react-native";
import React from "react";

const ThirdScreen = () => {
  const array2 = ["d", "e", "f"];
  // const array3 = array1.concat(array2);

  // console.log(array1[2], "array");

  const array1 = [1, 30, 39, 29, 10, 13];

  const array4 = [2, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  const data = array2.filter((item) => {
    if (item !== "d") {
      return item;
    }
  });
  const data2 = array4.filter((item) => {
    if (item !== 2 && item !== 4) {
      return item;
    }
  });
  const data3 = array4.findIndex((item) => {
    if (item % 11 === 0) {
      return item;
    } else {
      // console.log("not found", item);
    }
  });
  // console.log("data2", data3);

  const data4 = array4.find((item) => item % 11 === 0);
  // console.log(data3, data4, "data");

  const flatArray = [2, 3, [[[[3, 4]]]]];
  const data5 = flatArray.flat(Infinity);
  // console.log(data5);

  const forEachArray = [1, 2, 3, 4, 5, 6];

  const data6 = forEachArray.map((item) => item);
  // forEachArray.forEach((item) => console.log(item));

  // console.log(data6);

  const includeArray = [1, 2, 3, 5];
  // const data7 = includeArray.includes(5);
  const data7 = includeArray.filter((item) => {
    if (item !== 5) {
      return item;
    }
  });
  const data8 = includeArray.indexOf(2);
  // console.log(data8, data7, "data6");

  const joinArray = [1, 2, 3, 4, 5, 6, 7, 8];

  // console.log(joinArray.reverse(), "ddd");

  // console.log(joinArray.join(""));

  const data9 = joinArray.filter((item) => item % 2 == 0);
  // console.log(data9, "data9");

  // console.log(data);

  // array1.map((item, index) => {
  //   console.log(item);
  // });

  const popArray = [1, 2, 3, 4, 5];

  popArray.pop();
  popArray.shift();
  popArray.unshift(20, 30, 40);
  popArray.push(20, 30, 40);
  console.log(popArray);
  return (
    <View>
      <Text>{}</Text>
    </View>
  );
};

export default ThirdScreen;

const styles = StyleSheet.create({});
