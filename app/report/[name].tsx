import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Link, router, useLocalSearchParams } from "expo-router";

export default function StudentReport() {
  const { name, subject } = useLocalSearchParams();
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <View style={styles.headerRow}>
          <Pressable style={styles.backButton} onPress={() => router.back()}>
            <Text style={styles.backButtonText}>{"←"}</Text>
          </Pressable>
          <Text style={styles.headerText}>{`${name} (${subject})`}</Text>
        </View>
      </View>

      <View style={styles.cardContainer}>
        <Link
          asChild
          style={styles.link}
          href={{
            pathname: "/calendar/calendar",
            params: { name, subject },
          }}
        >
          <Pressable>
            <View style={[styles.card, styles.dottedBorder]}>
              <View style={styles.cardRow}>
                <Text style={styles.cardText}>Total Days</Text>
                <Text style={styles.cardBoldText}>23</Text>
              </View>
              <View style={[styles.cardRow, styles.cardRowMargin]}>
                <Text style={styles.cardText}>Present Days</Text>
                <Text style={styles.cardBoldText}>23</Text>
              </View>
            </View>
          </Pressable>
        </Link>
      </View>

      <View style={styles.percentageContainer}>
        <View style={[styles.card, styles.dottedBorder, styles.percentageCard]}>
          <View style={styles.percentageContent}>
            <Text style={styles.percentageText}>Present Percentage</Text>
            <Text style={styles.percentageValue}>23%</Text>
          </View>
        </View>
      </View>

      <Link
        style={styles.link}
        asChild
        href={{
          pathname: "/edit/editDetails",
          params: { name, subject },
        }}
      >
        <Pressable style={styles.editButton}>
          <Text style={styles.editButtonText}>Edit</Text>
        </Pressable>
      </Link>
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
    height: 112,
    width: "100%",
    borderBottomLeftRadius: 24,
    borderBottomRightRadius: 24,
    marginTop: 4,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  headerRow: {
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
  headerText: {
    fontSize: 24,
    fontWeight: "bold",
  },
  cardContainer: {
    height: 128,
    width: "100%",
    marginTop: 20,
  },
  link: {
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  card: {
    height: "100%",
    width: "90%",
    borderRadius: 16,
    borderWidth: 2,
    borderColor: "#d1d1d1",
    justifyContent: "center",
    alignItems: "center",
  },
  dottedBorder: {
    borderStyle: "dotted",
  },
  cardRow: {
    width: "90%",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  cardRowMargin: {
    marginTop: 16,
  },
  cardText: {
    fontSize: 18,
  },
  cardBoldText: {
    fontSize: 18,
    fontWeight: "bold",
  },
  percentageContainer: {
    height: 128,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
  },
  percentageCard: {
    gap: 20,
  },
  percentageContent: {
    width: "90%",
    alignItems: "center",
    justifyContent: "space-between",
  },
  percentageText: {
    fontSize: 24,
  },
  percentageValue: {
    fontSize: 28,
    fontWeight: "bold",
    marginTop: 12,
  },
  editButton: {
    height: 56,
    width: "90%",
    borderRadius: 16,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
    backgroundColor: "#3b82f6",
  },
  editButtonText: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#ffffff",
  },
});
