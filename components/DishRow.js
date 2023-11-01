import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import * as Icon from "react-native-feather";
import { themeColors } from "../theme";
import CartIcon from "./CartIcon";

const DishRow = ({ dish }) => {
  return (
    <View>
      <View className="flex-row items-center bg-white p-3 rounded-3xl shadow-2xl mb-3 mx-2">
        <Image
          source={dish.image}
          className="rounded-3xl"
          style={{ height: 100, width: 100 }}
        />
        <View className="flex flex-1 space-y-3">
          <View className="pl-3">
            <Text className="font-bold">{dish.name}</Text>
            <Text>{dish.description}</Text>
          </View>
          <View className="flex-row justify-between pl-3 items-center">
            <View>
              <Text>{dish.price}</Text>
            </View>
            <View className="flex-row items-center">
              <TouchableOpacity
                className="p-1 rounded-full"
                style={{ backgroundColor: themeColors.bgColor(1) }}
              >
                <Icon.Minus
                  stroke={"white"}
                  strokeWidth={2}
                  height={20}
                  width={20}
                />
              </TouchableOpacity>

              <TouchableOpacity
                className="p-1 rounded-full"
                style={{ backgroundColor: themeColors.bgColor(1) }}
              >
                <Icon.Plus
                  stroke={"white"}
                  strokeWidth={2}
                  height={20}
                  width={20}
                />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default DishRow;
