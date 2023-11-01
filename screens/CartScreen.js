import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  ScrollView,
} from "react-native";
import React from "react";
import * as Icon from "react-native-feather";
import { featured } from "../constants";
import { useNavigation } from "@react-navigation/native";
import { themeColors } from "../theme";

export default function CartScreen() {
  let navigation = useNavigation();
  const restaurant = featured.restaurants[0];
  return (
    <View className="bg-white flex-1 mt-4">
      <View className="relative py-4 shadow-sm">
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={{ backgroundColor: themeColors.bgColor(1) }}
          className="absolute z-10 rounded-full p-1 shadow top-5 left-2"
        >
          <Icon.ArrowLeft stroke="white" strokeWidth={2} />
        </TouchableOpacity>
        <View>
          <Text className="text-center font-bold text-xl">Your cart</Text>
          <Text className="text-center text-gray-500">{restaurant.name}</Text>
        </View>
      </View>
      <View
        style={{ backgroundColor: themeColors.bgColor(0.2) }}
        className="flex-row px-4 items-center"
      >
        <Image
          source={require("../assets/images/bikeGuy.png")}
          className="w-20 h-20"
        />
        <Text className="flex-1 pl-4">Deliver in 20-30 minutes</Text>
        <TouchableOpacity>
          <Text className="font-bold" style={{ color: themeColors.text }}>
            Change
          </Text>
        </TouchableOpacity>
      </View>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 50 }}
        className="bg-gray-100 pt-5"
      >
        {restaurant.dishes.map((dish, index) => {
          return (
            <View
              key={index}
              className="flex-row items-center space-x-3 px-4 bg-white rounded-3xl mx-2 my-1 py-2 shadow-md"
            >
              <Text className="font-bold">2x</Text>
              <Image className="h-14 w-14 rounded-full" source={dish.image} />
              <Text className="flex-1 font-bold text-gray-700">
                {dish.name}
              </Text>
              <Text className="font-semibold text-base">${dish.price}</Text>
              <TouchableOpacity
                className="p-1 rounded-full"
                style={{ backgroundColor: themeColors.bgColor(1) }}
              >
                <Icon.Minus
                  stroke="white"
                  strokeWidth={2}
                  height={20}
                  width={20}
                />
              </TouchableOpacity>
            </View>
          );
        })}
      </ScrollView>
      <View
        className="p-6 px-8 rounded-t-3xl space-y-8"
        style={{ backgroundColor: themeColors.bgColor(0.2) }}
      >
        <View className="flex-row justify-between">
          <Text className="text-gray-700">Subtotal</Text>
          <Text className="text-gray-700">$2</Text>
        </View>
        <View className="flex-row justify-between">
          <Text className="text-gray-700">Delivery Fee</Text>
          <Text className="text-gray-700">$2</Text>
        </View>
        <View className="flex-row justify-between">
          <Text className="text-gray-700 font-extrabold">Order total</Text>
          <Text className="text-gray-700 font-extrabold">$2</Text>
        </View>
        <TouchableOpacity
          onPress={() => navigation.navigate("order-processing")}
          style={{ backgroundColor: themeColors.bgColor(1) }}
          className="rounded-full p-3"
        >
          <Text className="text-center font-bold text-lg text-white">
            Place Order
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({});
