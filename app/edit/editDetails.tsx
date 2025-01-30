import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";
import React, { useState } from "react";
import { router, useLocalSearchParams } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";

export default function EditDetails() {
  const { name, subject } = useLocalSearchParams();
  const [editedValue, setEditedValue] = useState<string>("");
  const handleEditSubmit = () => {
    if (!editedValue) {
      alert("New Attendance cannot be empty");
      return;
    }
    alert(editedValue);
    setEditedValue("");
  };
  return (
    <SafeAreaView style={styles.container}>
      <View className="h-28 rounded-b-3xl w-full flex items-center justify-center px-5">
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

      <View
        style={{ height: 350 }}
        className="w-full flex flex-col items-center justify-between"
      >
        <View
          style={{ padding: 20, borderStyle: "dotted" }}
          className="w-[90%] flex items-center justify-center gap-5 border-2 border-gray-400 rounded-xl"
        >
          <Text className="text-2xl">Present Attendance</Text>
          <TextInput
            className="border w-[90%] rounded-xl h-14 text-xl px-5 border-gray-400 font-semibold bg-[#f1f1f1]"
            value="23"
            editable={false}
          />

          <Text className="text-2xl">New Attendance</Text>
          <TextInput
            keyboardType="numeric"
            value={editedValue}
            onChangeText={(text) => setEditedValue(text.toString())}
            placeholder="eg. 10"
            className="border w-[90%] rounded-xl h-14 px-5 font-bold text-xl bg-[#f1f1f1] border-gray-400"
          />
          <Pressable
            className="h-14 w-[90%] rounded-xl flex items-center justify-center mt-5 bg-blue-500"
            onPress={handleEditSubmit}
          >
            <Text className="text-2xl font-bold text-white">Save</Text>
          </Pressable>
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
