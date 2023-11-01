import {
  StyleSheet,
  TextInput,
  Text,
  View,
  SafeAreaView,
  ScrollView,
} from "react-native";
import React from "react";
import { StatusBar } from "expo-status-bar";
import * as Icon from "react-native-feather";
import Categories from "../components/Categories";
import { featured } from "../constants";
import FeaturedRow from "../components/FeaturedRow";

const HomeScreen = () => {
  const loops = [featured, featured, featured];
  return (
    <SafeAreaView className="bg-white">
      <StatusBar barStyle="dark-content" />

      {/* status bar */}
      <View className="flex-row items-center space-x-2 px-4 pb-2 mt-5 pt-3">
        <View className="flex-row flex-1 items-center p-3 rounded-full border border-gray-300">
          <Icon.Search height="25" width="25" stroke="gray" />
          <TextInput placeholder="Restaurants" className="ml-2 flex-1" />
          <View className="flex-row items-center space-x-1 border-0 border-l-2 pl-2 border-l-gray-300">
            <Icon.MapPin height="20" width="20" stroke="red" />
            <Text className="text-gray-600">Enugu Nigeria, NGN</Text>
          </View>
        </View>
        <View className="p-3 rounded-full bg-gray-300">
          <Icon.Sliders
            height="20"
            width="20"
            strokeWidth={2.5}
            stroke="white"
          />
        </View>
      </View>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 20 }}
      >
        <Categories />
        <View className="mt-5">
          {loops.map((item, index) => {
            return (
              <FeaturedRow
                key={index}
                title={item.title}
                description={item.description}
                restaurants={item.restaurants}
              />
            );
          })}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
