import React, { useState } from "react";
import {
  FlatList,
  Pressable,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Link, useLocalSearchParams, router } from "expo-router";
import { Dropdown } from "react-native-element-dropdown";

interface StudentData {
  name: string;
  rollNumber: number;
}

export default function SemesterPage() {
  const { name } = useLocalSearchParams();
  const students = [
    { name: "Ankit", rollNumber: 1 },
    { name: "Bhavesh", rollNumber: 2 },
    { name: "Chirag", rollNumber: 3 },
    { name: "Deepak", rollNumber: 4 },
    { name: "Esha", rollNumber: 5 },
    { name: "Farhan", rollNumber: 6 },
    { name: "Gaurav", rollNumber: 7 },
    { name: "Harsh", rollNumber: 8 },
    { name: "Isha", rollNumber: 9 },
    { name: "Jatin", rollNumber: 10 },
    { name: "Karan", rollNumber: 11 },
    { name: "Lakshay", rollNumber: 12 },
    { name: "Manish", rollNumber: 13 },
    { name: "Nisha", rollNumber: 14 },
    { name: "Om", rollNumber: 15 },
    { name: "Pooja", rollNumber: 16 },
    { name: "Qasim", rollNumber: 17 },
    { name: "Ravi", rollNumber: 18 },
    { name: "Sakshi", rollNumber: 19 },
    { name: "Tina", rollNumber: 20 },
    { name: "Umesh", rollNumber: 21 },
    { name: "Vikas", rollNumber: 22 },
    { name: "Wahid", rollNumber: 23 },
    { name: "Xena", rollNumber: 24 },
    { name: "Yash", rollNumber: 25 },
    { name: "Zara", rollNumber: 26 },
    { name: "Amit", rollNumber: 27 },
    { name: "Bina", rollNumber: 28 },
    { name: "Chetan", rollNumber: 29 },
    { name: "Divya", rollNumber: 30 },
    { name: "Ekta", rollNumber: 31 },
    { name: "Faisal", rollNumber: 32 },
    { name: "Gita", rollNumber: 33 },
    { name: "Hemant", rollNumber: 34 },
    { name: "Irfan", rollNumber: 35 },
  ];
  const [selectedRollNumbers, setSelectedRollNumbers] = useState<number[]>([]);
  const [subject, setSubject] = useState("");
  const subjects = [
    { name: "IIT", value: "IIT" },
    { name: "C Programming", value: "C Programming" },
    { name: "Physics", value: "Physics" },
    { name: "Math I", value: "Math I" },
    { name: "Microprocessor", value: "Microprocessor" },
  ];

  const toggleSelection = (rollNumber: number) => {
    setSelectedRollNumbers((prevSelected) =>
      prevSelected.includes(rollNumber)
        ? prevSelected.filter((num) => num !== rollNumber)
        : [...prevSelected, rollNumber]
    );
  };
  const handleSubmit = () => {
    if (!subject) {
      alert("Please select a subject");
      return;
    }
    alert("Attendance saved successfully");
    setSelectedRollNumbers([]);
  };
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor="dark" />

      {/* navbar  */}
      <View style={styles.navbar}>
        <View style={styles.navbarHeader}>
          <Pressable
            style={styles.backButton}
            onPress={() => router.replace("/")}
          >
            <Text style={styles.backButtonText}>{"←"}</Text>
          </Pressable>
          <Text style={styles.navbarTitle}>{name} Semester</Text>
        </View>
        <View style={styles.navbarActions}>
          <Dropdown
            style={styles.dropdown}
            data={subjects}
            onChange={(item) => setSubject(item.value)}
            placeholder="Select Subject"
            labelField="name"
            valueField="name"
            value={subject}
          />
          <Pressable style={styles.saveButton} onPress={handleSubmit}>
            <Text style={styles.saveButtonText}>Save</Text>
          </Pressable>
        </View>
      </View>

      {/* student list  */}
      <View style={styles.studentListContainer}>
        <FlatList
          style={styles.studentList}
          contentContainerStyle={styles.studentListContent}
          scrollEnabled
          data={students}
          renderItem={({ item }) => (
            <StudentItem
              key={item.rollNumber}
              name={item.name}
              rollNumber={item.rollNumber}
              isSelected={selectedRollNumbers.includes(item.rollNumber)}
              onPress={() => toggleSelection(item.rollNumber)}
            />
          )}
        />
      </View>
    </SafeAreaView>
  );
}

export const StudentItem: React.FC<
  StudentData & { isSelected: boolean; onPress: () => void }
> = ({ name, rollNumber, isSelected, onPress }) => (
  <Pressable
    onPress={onPress}
    style={[
      styles.studentItem,
      isSelected ? styles.studentItemSelected : styles.studentItemUnselected,
    ]}
  >
    <Link
      href={{
        pathname: "/student/[name]",
        params: { name: name },
      }}
    >
      <View style={styles.studentItemContent}>
        <Text style={styles.studentItemText}>{rollNumber}.</Text>
        <Text style={styles.studentItemText}>{` ${name}`}</Text>
      </View>
    </Link>
  </Pressable>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f1eee9",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  navbar: {
    height: 128,
    marginTop: 16,
    borderBottomLeftRadius: 24,
    borderBottomRightRadius: 24,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 20,
  },
  navbarHeader: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "flex-start",
    gap: 20,
  },
  backButton: {
    alignItems: "center",
    justifyContent: "center",
  },
  backButtonText: {
    fontSize: 30,
    marginBottom: 10,
    fontWeight: "bold",
  },
  navbarTitle: {
    fontSize: 24,
    fontWeight: "bold",
  },
  navbarActions: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 40,
  },
  dropdown: {
    height: 40,
    width: 200,
    paddingHorizontal: 15,
    borderRadius: 10,
    backgroundColor: "white",
    borderWidth: 1,
    borderColor: "gray",
  },
  saveButton: {
    marginBottom: 20,
    height: 40,
    paddingHorizontal: 40,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
    backgroundColor: "#3b82f6",
    borderRadius: 12,
  },
  saveButtonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "600",
  },
  studentListContainer: {
    flex: 1,
    width: "100%",
    margin: 12,
    justifyContent: "center",
    alignItems: "center",
  },
  studentList: {
    height: "100%",
    width: "100%",
  },
  studentListContent: {
    justifyContent: "center",
    alignItems: "center",
  },
  studentItem: {
    height: 56,
    width: 320,
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 12,
    marginTop: 8,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 12,
  },
  studentItemSelected: {
    backgroundColor: "#8fee93",
  },
  studentItemUnselected: {
    backgroundColor: "white",
  },
  studentItemContent: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  studentItemText: {
    fontSize: 18,
    textDecorationLine: "underline",
  },
});
