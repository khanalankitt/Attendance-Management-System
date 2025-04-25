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
      {/* Navbar */}
      <View style={styles.navbarContainer}>
        <View style={styles.navbarContent}>
          <Pressable style={styles.backButton} onPress={() => router.back()}>
            <Text style={styles.backArrow}>←</Text>
          </Pressable>
          <Text style={styles.navbarTitle}>{name}</Text>
        </View>
      </View>

      {/* Subject List */}
      <FlatList
        data={demoAttendaceData}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <Link
            href={{
              pathname: "/report/[name]",
              params: { name: name.toString(), subject: item.subject },
            }}
            asChild
          >
            <Pressable style={styles.subjectCard}>
              <View style={styles.subjectContent}>
                <Text style={styles.subjectText}>{item.subject}</Text>
                <Text style={styles.subjectText}>{item.value}</Text>
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
    justifyContent: "flex-start",
    alignItems: "center",
  },
  navbarContainer: {
    height: 112, // h-28
    width: "100%",
    borderBottomLeftRadius: 24,
    borderBottomRightRadius: 24,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  navbarContent: {
    flexDirection: "row",
    alignItems: "center",
    alignSelf: "flex-start",
    gap: 20,
  },
  backButton: {
    justifyContent: "center",
    alignItems: "center",
  },
  backArrow: {
    fontSize: 30,
    fontWeight: "bold",
    marginBottom: 10,
  },
  navbarTitle: {
    fontSize: 24,
    fontWeight: "bold",
  },
  subjectCard: {
    height: 80,
    width: "100%",
    backgroundColor: "#f1f1f1",
    borderRadius: 10,
    marginTop: 12,
    borderWidth: 1,
    borderColor: "#9ca3af", // border-gray-400
    justifyContent: "center",
    alignItems: "center",
  },
  subjectContent: {
    height: "100%",
    width: "90%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    gap: 20,
  },
  subjectText: {
    fontSize: 20,
  },
});
