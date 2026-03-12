import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import React from "react";
import SearchFilter from "../components/SearchFilter";
import ContactList from "../components/ContactList";
import AddContact from "../components/AddContact";
import "../global.css";

export default function MainScreen() {
  const [contacts, setContacts] = React.useState([]);
  const [search, setSearch] = React.useState("");

  const contactList = [
    { name: "Julian", number: "123", id: "1" },
    { name: "Aurora", number: "456", id: "2" },
    { name: "Julian", number: "123", id: "3" },
    { name: "Aurora", number: "456", id: "4" },
    { name: "Julian", number: "123", id: "5" },
    { name: "Aurora", number: "456", id: "6" },
    { name: "Julian", number: "123", id: "7" },
    { name: "Aurora", number: "456", id: "8" },
    { name: "Julian", number: "123", id: "9" },
    { name: "Aurora", number: "456", id: "10" },
    { name: "Aurora", number: "456", id: "20" },
    { name: "Julian", number: "123", id: "30" },
    { name: "Aurora", number: "456", id: "40" },
    { name: "Julian", number: "123", id: "50" },
    { name: "Aurora", number: "456", id: "60" },
    { name: "Julian", number: "123", id: "70" },
    { name: "Aurora", number: "456", id: "80" },
    { name: "Julian", number: "123", id: "90" },
    { name: "Aurora", number: "456", id: "100" },
  ];

  React.useEffect(() => {
    setContacts(contactList);
  }, []);

  const filteredContacts = contacts.filter((person) =>
    person.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <SafeAreaProvider>
      <SafeAreaView className="flex-1 m-10">
        <Text className="text-2xl font-bold text-center font-mono">
          ROLODEX
        </Text>
        <SearchFilter search={search} setSearch={setSearch} />
        <ContactList contacts={filteredContacts} />
        <AddContact className='p-4'/>
        <StatusBar style="auto" />
      </SafeAreaView>
    </SafeAreaProvider>
  );
}