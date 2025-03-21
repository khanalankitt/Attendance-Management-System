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
    { name: "Jaya", rollNumber: 36 },
    { name: "Kavita", rollNumber: 37 },
    { name: "Lalit", rollNumber: 38 },
    { name: "Meena", rollNumber: 39 },
    { name: "Naveen", rollNumber: 40 },
    { name: "Ojas", rollNumber: 41 },
    { name: "Pankaj", rollNumber: 42 },
    { name: "Qadir", rollNumber: 43 },
    { name: "Rina", rollNumber: 44 },
    { name: "Suresh", rollNumber: 45 },
    { name: "Tara", rollNumber: 46 },
    { name: "Uday", rollNumber: 47 },
    { name: "Vimal", rollNumber: 48 },
    { name: "Wasim", rollNumber: 49 },
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
    alert("Attendance saved succesfully");
    setSelectedRollNumbers([]);
  };
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor="dark" />

      {/* navbar  */}
      <View className="h-32 mt-4 rounded-b-3xl w-full flex items-center justify-center px-5">
        <View className="flex flex-row items-center justify-center self-start gap-5">
          <Pressable
            className="flex items-center justify-center"
            onPress={() => router.replace('/')}
          >
            <Text
              className="font-bold"
              style={{ fontSize: 30, marginBottom: 10 }}
            >
              {"←"}
            </Text>
          </Pressable>
          <Text className="text-2xl font-bold">{name} Semester</Text>
        </View>
        <View className="flex flex-row items-center justify-center gap-10">
          <Dropdown
            style={{
              height: 40,
              width: 200,
              paddingHorizontal: 15,
              borderRadius: 10,
              backgroundColor: "white",
              borderWidth: 1,
              borderColor: "gray",
            }}
            data={subjects}
            onChange={(item) => setSubject(item.value)}
            placeholder="Select Subject"
            labelField="name"
            valueField="name"
            value={subject}
          />
          <Pressable
            className="mb-5 h-[40px] px-10 flex items-center rounded-xl justify-center mt-5 bg-blue-500 "
            onPress={handleSubmit}
          >
            <Text className="text-white text-xl font-semibold ">Save</Text>
          </Pressable>
        </View>
      </View>

      {/* student list  */}
      <View className="flex-1 w-full m-3 justify-center items-center">
        <FlatList
          className="h-full w-full flex"
          contentContainerStyle={{
            justifyContent: "center",
            alignItems: "center",
          }}
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
    className="h-14 w-[320px] border border-gray-400 rounded-xl mt-2 flex flex-row items-center justify-between px-3"
    style={[
      isSelected
        ? { backgroundColor: "#8fee93" }
        : { backgroundColor: "white" },
    ]}
  >
    <Link
      href={{
        pathname: "/student/[name]",
        params: { name: name },
      }}
    >
      <View className="flex flex-row items-center justify-center ">
        <Text className="text-xl underline">{rollNumber}.</Text>
        <Text className="text-xl underline">{` ${name}`}</Text>
      </View>
    </Link>
  </Pressable>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f1eee9",
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
  },
});
