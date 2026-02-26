import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, TextInput } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import React from "react"

export default function App() {
  const { name, onChangeName } = React.useState("");

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <Text>Renn Deck Rolodex</Text>
        <TextInput
          placeholder="Search Contacts"
          onChangeText={onChangeName}
          style={styles.input}
        />
        <></>
        <StatusBar style="auto" />
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});
