import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Link, router, useLocalSearchParams } from "expo-router";

export default function StudentReport() {
  const { name, subject } = useLocalSearchParams();
  return (
    <SafeAreaView style={styles.container}>
      <View className="h-28 rounded-b-3xl w-full flex items-center mt-1 justify-center px-5">
        <View className="flex flex-row items-center justify-center self-start gap-5">
          <Pressable
            className="flex items-center justify-center"
            onPress={() => router.back()}
          >
            <Text
              className="font-bold"
              style={{ fontSize: 30, marginBottom: 10 }}
            >
              {"←"}
            </Text>
          </Pressable>
          <Text className="text-2xl font-bold">{`${name} (${subject})`}</Text>
        </View>
      </View>

      <View className="h-32 w-full mt-5">
        <Link
          asChild
          className="w-full flex items-center justify-center"
          href={{
            pathname: "/calendar/calendar",
            params: { name, subject },
          }}
        >
          <Pressable>
            <View
              style={{ borderStyle: "dotted" }}
              className="h-full w-[90%] rounded-xl border-2 border-gray-400 flex items-center justify-center"
            >
              <View className="w-[90%] flex flex-row justify-between">
                <Text className="text-xl">Total Days</Text>
                <Text className="text-xl font-bold">23</Text>
              </View>
              <View className="w-[90%] flex mt-4 flex-row justify-between">
                <Text className="text-xl">Present Days</Text>
                <Text className="text-xl font-bold">23</Text>
              </View>
            </View>
          </Pressable>
        </Link>
      </View>

      <View className="h-32 w-full flex items-center justify-center mt-5">
        <View
          style={{ borderStyle: "dotted" }}
          className="h-full w-[90%] rounded-xl border-2 border-gray-400 flex  items-center justify-center gap-5"
        >
          <View className="w-[90%] flex items-center justify-between">
            <Text className="text-2xl">Present Percentage</Text>
            <Text className="text-3xl mt-3 font-bold">23%</Text>
          </View>
        </View>
      </View>
      <Link
        className="w-[90%] mt-5 flex items-center justify-center"
        asChild
        href={{
          pathname: "/edit/editDetails",
          params: { name, subject },
        }}
      >
        <Pressable className="h-14 rounded-xl flex items-center justify-center mt-5 bg-blue-500">
          <Text className="text-2xl font-bold text-white">Edit</Text>
        </Pressable>
      </Link>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f1eee9",
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
  },
});
