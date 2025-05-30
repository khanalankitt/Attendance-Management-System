import {
  Pressable,
  StatusBar,
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
} from "react-native";
import React, { useEffect } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Link } from "expo-router";
import "../global.css";

export default function HomePage() {
  const semesters = [
    "First A",
    "First B",
    "Second",
    "Third A",
    "Third B",
    "Fourth",
    "Fifth",
    "Sixth",
    "Seventh",
    "Eighth",
  ];

  useEffect(() => {
    const connectToDatabase = async () => {
      try {
        const response = await fetch("http://192.168.100.162:3300");
        const data = await response.json();
        console.log(data);
      } catch (err) {
        console.log(err);
      }
    };
    connectToDatabase();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />

      {/* Header */}
      <View style={styles.header}>
        <Image
          source={require("../assets/images/iconnobg.png")}
          style={styles.logo}
        />
        <Text style={styles.headerText}>Attendance App</Text>
      </View>

      {/* Main Content */}
      <ScrollView
        scrollEnabled
        contentContainerStyle={styles.scrollContainer}
        style={styles.scrollView}
      >
        {semesters.map((item, index) => (
          <Link
            key={index}
            style={styles.linkContainer}
            href={{
              pathname: "/semester/[name]",
              params: { name: item },
            }}
            asChild
          >
            <Pressable style={styles.semesterBox}>
              <Text style={{ position: "absolute", right: 10, bottom: 10, fontSize: 16, color: "#616161" }}>32 Students</Text>
              <View >
                <Text style={styles.semesterTitle}>{item}</Text>
                <Text style={styles.semesterSubtitle}>Semester</Text>
              </View>
            </Pressable>
          </Link>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f1eee9",
    justifyContent: "center",
    alignItems: "center",
  },
  header: {
    height: 80,
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    gap: 20,
    paddingHorizontal: 20,
    alignSelf: "flex-start",
    borderBottomWidth: 2,
    borderColor: "#9ca3af", // Tailwind border-gray-400
  },
  logo: {
    width: 40,
    height: 60,
    resizeMode: "cover",
  },
  headerText: {
    fontSize: 22,
    fontWeight: "bold",
  },
  scrollView: {
    width: "100%",
    paddingRight: 30,
    paddingLeft: 15,
    marginTop: 20,
  },
  scrollContainer: {
    flexDirection: "column",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center",
    gap: 15,
    paddingBottom: 15,
    width: "100%",
  },
  linkContainer: {
    width: "100%",
    height: 100,
    elevation: 3,
    justifyContent: "center",
    alignItems: "center",
    margin: 8,
    borderRadius: 10,
    backgroundColor: "#f1f1f1",
  },
  semesterBox: {
    height: 110,
    borderTopWidth: 5,
    width: "100%",
    paddingVertical: 20,
    borderRadius: 8,
    alignItems: "center",
  },
  semesterTitle: {
    backgroundColor: "#1f2937", // Tailwind bg-gray-800
    paddingHorizontal: 25,
    paddingVertical: 4,
    fontSize: 24,
    fontWeight: "bold",
    color: "white",
    textAlign: "center",
    borderRadius: 10,
  },
  semesterSubtitle: {
    marginTop: 2,
    textAlign: "center",
    fontSize: 20,
  },
});
