import {
  StyleSheet,
  Text,
  Image,
  Touchable,
  TouchableOpacity,
  View,
  ScrollView,
} from "react-native";
import * as Icon from "react-native-feather";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation, useRoute } from "@react-navigation/native";
import { themeColors } from "../theme";
import DishRow from "../components/DishRow";
import CartIcon from "../components/CartIcon";

const RestaurantScreen = () => {
  const navigation = useNavigation();
  const { params } = useRoute();
  let item = params;
  return (
    <View>
      <CartIcon />

      <ScrollView>
        <View className="relative">
          <Image source={item.image} className="w-full h-72" />
          <TouchableOpacity
            className="absolute top-14 left-4 bg-gray-50 p-2 rounded-full shadow"
            onPress={() => navigation.goBack()}
          >
            <Icon.ArrowLeft strokeWidth={3} stroke={themeColors.bgColor(1)} />
          </TouchableOpacity>
        </View>
        <View
          style={{ borderTopLeftRadius: 40, borderTopRightRadius: 40 }}
          className="bg-white -mt-6 pt-6"
        >
          <Text className="text-3xl font-bold ml-4">{item.name}</Text>
          <View className="flex-row space-x-4 my-1 mx-4">
            <View className="flex-row items-center space-x-1">
              <Image
                source={require("../assets/images/fullStar.png")}
                className="h-4 w-4"
              />
              <Text className="text-xs">
                <Text className="text-green-700">{item.stars}</Text>
                <Text className="text-gray-700">
                  ({item.views} review) .
                  <Text className="font-semibold">{item.category}</Text>
                </Text>
              </Text>
            </View>
            <View className="flex-row items-center space-x-1">
              <Icon.MapPin color="gray" width="15" height="15" />
              <Text className="text-gray-700 text-xs">
                Nearby {item.address}
              </Text>
            </View>
          </View>
          <Text className="mx-4 my-2">{item.description}</Text>
        </View>
        <View className="pb-36 bg-red-400">
          <Text className="px-4 py-4 text-2xl font-bold">Menu</Text>
          {item.dishes.map((dish, index) => {
            return <DishRow key={index} dish={dish} />;
          })}
        </View>
      </ScrollView>
    </View>
  );
};

export default RestaurantScreen;

const styles = StyleSheet.create({});
