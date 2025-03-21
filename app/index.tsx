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
    <SafeAreaView
      style={styles.container}
      className="flex items-center justify-center"
    >
      <StatusBar barStyle="dark-content" />

      {/* Header */}
      <View className="h-20 w-full flex flex-row items-center justify-start gap-5 px-5 self-start border-b-2 border-gray-400">
        <Image source={require("../assets/images/iconnobg.png")} style={{ width: 40, objectFit: "cover", height: 60, }} />
        <Text className="text-3xl font-bold">Attendance</Text>
      </View>


      {/* Main Content */}

      <ScrollView
        scrollEnabled
        contentContainerStyle={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          justifyContent: "center",
          alignItems: "center",
          gap: 15,
          paddingBottom: 15,
        }}
        style={{
          flexWrap: "wrap",
        }}
        className="mt-5"
      >
        {semesters.map((item, index) => (
          <Link
            key={index}
            style={{
              width: "40%",
              height: 100,
              elevation: 3,
              justifyContent: "center",
              alignItems: "center",
            }}
            className={`flex py-5 m-2 rounded-lg bg-[#f1f1f1] `}
            href={{
              pathname: "/semester/[name]",
              params: { name: item },
            }}
            asChild
          >
            <Pressable className={`flex py-5 w-full rounded-lg`}>
              <View>
                <Text
                  style={{ backgroundColor: "#1f2937", paddingHorizontal: 15 }}
                  className="text-2xl rounded-lg font-bold py-[2px] text-white text-center"
                >
                  {item}
                </Text>
                <Text className="text-center text-xl mt-[2px]">Semester</Text>
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
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  sidebar: {
    width: 280,
    height: "110%",
    backgroundColor: "black",
    position: "absolute",
    left: 0,
    transform: [{ translateY: "-50%" }],
    zIndex: 10,
  },
  overlay: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 5,
  },
});
