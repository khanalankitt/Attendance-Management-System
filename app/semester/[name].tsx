import React, { useEffect, useState } from "react";
import {
  ActivityIndicator,
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
import { Student } from "@/types/types";

export default function SemesterPage() {
  const { name } = useLocalSearchParams();
  const [students, setStudents] = useState<Student[]>([]);
  const [subjects, setSubjects] = useState([]);
  const [loading, setLoading] = useState(true);

  const [subject, setSubject] = useState("");

  const [selectedRolls, setSelectedRolls] = useState<string[]>([]);

  const toggleSelection = (roll: string) => {
    setSelectedRolls((prevSelected) =>
      prevSelected.includes(roll)
        ? prevSelected.filter((r) => r !== roll)
        : [...prevSelected, roll]
    );
  };
  const handleSubmit = () => {
    if (!subject) {
      alert("Please select a subject");
      return;
    }
    alert("Attendance saved successfully");
    setSelectedRolls([]);
  };

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await fetch("http://192.168.100.162:3300/getStudents", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ semester: name })
        });
        const data = await response.json();
        setStudents(data.students)
        setSubjects(data.subjects);
      } catch (error) {
        console.error("Error fetching semester data:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [name]);

  if (loading) {
    return (
      <SafeAreaView style={styles.container}>
        <StatusBar backgroundColor="dark" />

        {/* navbar  */}
        <View style={styles.navbar}>
          <Pressable
            style={styles.backButton}
            onPress={() => router.replace("/")}
          >
            <Text style={styles.backButtonText}>{"←"}</Text>
          </Pressable>
          <View style={styles.navbarHeader}>
            <Text style={styles.navbarTitle}>{name} Semester</Text>
          </View>
        </View>
        <ActivityIndicator size="large" style={{ marginTop: 100 }} color="#1f2937" />
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor="dark" />

      {/* navbar  */}
      <View style={styles.navbar}>
        <Pressable
          style={styles.backButton}
          onPress={() => router.replace("/")}
        >
          <Text style={styles.backButtonText}>{"←"}</Text>
        </Pressable>
        <View style={styles.navbarHeader}>
          <Text style={styles.navbarTitle}>{name} Semester</Text>
        </View>
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

      {/* student list  */}
      <View style={styles.studentListContainer}>
        <FlatList
          style={styles.studentList}
          contentContainerStyle={styles.studentListContent}
          scrollEnabled
          data={students}
          renderItem={({ item, index }) => (
            <StudentItem
              key={index}
              index={index}
              subjects={subjects}
              name={item.name || ""}
              roll={item.roll || ""}
              isSelected={selectedRolls.includes(item.roll || "")}
              onPress={() => toggleSelection(item.roll || "")}
            />

          )}
        />
      </View>
    </SafeAreaView>
  );
}

export const StudentItem: React.FC<
  { index: number; subjects: any; name: string; roll: string; isSelected: boolean; onPress: () => void }
> = ({ index, name, subjects, roll, isSelected, onPress }) => (

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
        params: { name: name ?? "", subjects: JSON.stringify(subjects ?? []) },
      }}
    >
      <View style={styles.studentItemContent}>
        <Text style={{ fontSize: 18 }}>{index + 1}. </Text>
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
    height: 80,
    marginTop: -5,
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
  },
  navbarActions: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
  },
  dropdown: {
    height: 45,
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
    paddingHorizontal: 22,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
    backgroundColor: "#3b82f6",
    borderRadius: 8,
  },
  saveButtonText: {
    color: "white",
    fontSize: 20,
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
