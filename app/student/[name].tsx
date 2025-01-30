import { FlatList, Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { Link, useLocalSearchParams, router } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";

export default function DynamicStudent() {
  const { name } = useLocalSearchParams();
  const demoAttendaceData = [
    { subject: "IIT", value: "15" },
    { subject: "C Programming", value: "14" },
    { subject: "Physics", value: "13" },
    { subject: "Math I", value: "14" },
    { subject: "Microprocessor", value: "15" },
  ];
  return (
    <SafeAreaView style={styles.container}>
      {/* navbar  */}

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
          <Text className="text-2xl font-bold">{name}</Text>
        </View>
      </View>

      {/* subject list  */}

      <FlatList
        data={demoAttendaceData}
        renderItem={({ item }) => (
          <Link
            href={{
              pathname: "/report/[name]",
              params: { name: name.toString(), subject: item.subject },
            }}
            asChild
          >
            <Pressable
              className={`h-20 w-full flex items-center justify-center rounded-lg mt-3 bg-[#f1f1f1] border border-gray-400`}
            >
              <View className="h-full w-[90%] flex flex-row items-center justify-between gap-5">
                <Text className="text-xl ">{item.subject}</Text>
                <Text className="text-xl ">{item.value}</Text>
              </View>
            </Pressable>
          </Link>
        )}
      />
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
