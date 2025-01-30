import { Pressable, SafeAreaView, StyleSheet, Text, View } from "react-native";
import React from "react";
import { router, useLocalSearchParams } from "expo-router";
import { Calendar as RNCalendar } from "react-native-calendars";

export default function Calendar() {
  const { name, subject } = useLocalSearchParams();
  const today = new Date().toISOString().split("T")[0];

  return (
    <SafeAreaView style={styles.container}>
      <View className="h-28 rounded-b-3xl w-full flex items-center mt-5 justify-center px-5">
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

      <View className="h-[300px] w-full">
        <Text className="text-2xl text-center w-full font-bold mb-5 text-gray-700">
          Present Days
        </Text>
        <View className="w-[100%] p-5 flex items-center justify-center">
          <RNCalendar
            style={{
              width: 350,
              borderWidth: 2,
              borderRadius: 5,
              borderColor: "gray",
            }}
            markedDates={{
              [today]: { selected: true, selectedColor: "#5992e0" },
              "2025-01-10": { selected: true, selectedColor: "green" },
              "2025-01-29": { selected: true, selectedColor: "green" },
              "2025-01-18": { selected: true, selectedColor: "green" },
            }}
          />
        </View>
      </View>
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
