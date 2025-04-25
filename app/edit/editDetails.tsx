import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";
import React, { useState } from "react";
import { router, useLocalSearchParams } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";

export default function EditDetails() {
  const { name, subject } = useLocalSearchParams();
  const [editedValue, setEditedValue] = useState<string>("");
  const handleEditSubmit = () => {
    if (!editedValue) {
      alert("New Attendance cannot be empty");
      return;
    }
    alert(editedValue);
    setEditedValue("");
  };
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

      <View style={styles.mainContent}>
        <View style={styles.card}>
          <Text style={styles.label}>Present Attendance</Text>
          <TextInput
            style={styles.input}
            value="23"
            editable={false}
          />

          <Text style={styles.label}>New Attendance</Text>
          <TextInput
            keyboardType="numeric"
            value={editedValue}
            onChangeText={(text) => setEditedValue(text.toString())}
            placeholder="eg. 10"
            style={styles.editableInput}
          />
          <Pressable style={styles.saveButton} onPress={handleEditSubmit}>
            <Text style={styles.saveButtonText}>Save</Text>
          </Pressable>
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
    height: 112,
    width: "100%",
    borderBottomLeftRadius: 24,
    borderBottomRightRadius: 24,
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
  mainContent: {
    height: 350,
    width: "100%",
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "column",
  },
  card: {
    width: "90%",
    justifyContent: "center",
    alignItems: "center",
    gap: 20,
    borderWidth: 2,
    borderColor: "#a0a0a0",
    borderRadius: 16,
    padding: 20,
    borderStyle: "dotted",
  },
  label: {
    fontSize: 24,
  },
  input: {
    width: "90%",
    height: 56,
    borderRadius: 16,
    fontSize: 20,
    paddingHorizontal: 20,
    fontWeight: "600",
    backgroundColor: "#f1f1f1",
    borderWidth: 1,
    borderColor: "#a0a0a0",
  },
  editableInput: {
    width: "90%",
    height: 56,
    borderRadius: 16,
    fontSize: 20,
    paddingHorizontal: 20,
    fontWeight: "bold",
    backgroundColor: "#f1f1f1",
    borderWidth: 1,
    borderColor: "#a0a0a0",
  },
  saveButton: {
    height: 56,
    width: "90%",
    borderRadius: 16,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
    backgroundColor: "#3b82f6",
  },
  saveButtonText: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#ffffff",
  },
});
