import { Pressable, SafeAreaView, StyleSheet, Text, View } from "react-native";
import React from "react";
import { router, useLocalSearchParams } from "expo-router";
import { Calendar as RNCalendar } from "react-native-calendars";

export default function Calendar() {
  const { name, subject } = useLocalSearchParams();
  const today = new Date().toISOString().split("T")[0];

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.navbar}>
        <Pressable
          style={styles.backButton}
          onPress={() => router.back()}
        >
          <Text style={styles.backButtonText}>{"←"}</Text>
        </Pressable>
        <View style={styles.navbarHeader}>
          <Text numberOfLines={1}
            ellipsizeMode="middle" style={styles.navbarTitle}>
            {name}
          </Text>
        </View>
      </View>
      <Text style={styles.subjectTitle}>
        {subject}
      </Text>

      <View >
        <RNCalendar
          style={styles.calendar}
          markedDates={{
            [today]: { selected: true, selectedColor: "#5992e0" },
            "2025-06-29": { selected: true, selectedColor: "green" },
            "2025-06-12": { selected: true, selectedColor: "green" },
            "2025-06-18": { selected: true, selectedColor: "green" },
          }}
        />
      </View>
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
  subjectTitle: {
    color: "#1f2937",
    marginTop: 20,
    fontSize: 24,
    fontWeight: "bold",
  },
  navbar: {
    height: 80,
    marginTop: 26, //exact dont touch
    backgroundColor: "#1f2937",
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 40,
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 20,
  },
  navbarHeader: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  backButton: {
    position: "absolute",
    left: 25,
    top: 0,
    alignItems: "center",
    justifyContent: "center",
  },
  backButtonText: {
    fontWeight: "bold",
    color: "white",
    fontSize: 40,
  },
  navbarTitle: {
    textAlign: "center",
    color: "white",
    fontSize: 23,
    fontWeight: "bold",
    maxWidth: 250,
  },
  calendar: {
    marginTop: 20,
    width: 350,
    borderWidth: 2,
    borderRadius: 5,
    borderColor: "#1f2937",
  },
});
