import { Pressable, SafeAreaView, StyleSheet, Text, View } from "react-native";
import React from "react";
import { router, useLocalSearchParams } from "expo-router";
import { Calendar as RNCalendar } from "react-native-calendars";

export default function Calendar() {
  const { name, subject } = useLocalSearchParams();
  const today = new Date().toISOString().split("T")[0];

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <View style={styles.headerContent}>
          <Pressable style={styles.backButton} onPress={() => router.back()}>
            <Text style={styles.backButtonText}>{"←"}</Text>
          </Pressable>
          <Text style={styles.headerTitle}>{`${name} (${subject})`}</Text>
        </View>
      </View>

      <View style={styles.calendarContainer}>
        <Text style={styles.calendarTitle}>Present Days</Text>
        <View style={styles.calendarWrapper}>
          <RNCalendar
            style={styles.calendar}
            markedDates={{
              [today]: { selected: true, selectedColor: "#5992e0" },
              "2025-04-29": { selected: true, selectedColor: "green" },
              "2025-04-12": { selected: true, selectedColor: "green" },
              "2025-04-18": { selected: true, selectedColor: "green" },
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
    justifyContent: "flex-start",
    alignItems: "center",
  },
  header: {
    height: 112, // 28 * 4
    borderBottomLeftRadius: 24,
    borderBottomRightRadius: 24,
    width: "100%",
    marginTop: 20,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  headerContent: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "flex-start",
    gap: 20,
  },
  backButton: {
    justifyContent: "center",
    alignItems: "center",
  },
  backButtonText: {
    fontSize: 30,
    fontWeight: "bold",
    marginBottom: 10,
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: "bold",
  },
  calendarContainer: {
    height: 300,
    width: "100%",
  },
  calendarTitle: {
    fontSize: 24,
    textAlign: "center",
    fontWeight: "bold",
    marginBottom: 20,
    color: "#4b5563", // gray-700
  },
  calendarWrapper: {
    width: "100%",
    padding: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  calendar: {
    width: 350,
    borderWidth: 2,
    borderRadius: 5,
    borderColor: "gray",
  },
});
