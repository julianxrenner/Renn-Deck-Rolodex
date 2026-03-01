import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, TextInput } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import React from "react";
import SearchFilter from "./components/SearchFilter";
import ContactList from "./components/ContactList";
import AddContact from "./components/AddContact";
import "./global.css";

export default function App() {
  const [contacts, setContacts] = React.useState([]);
  const [search, setSearch] = React.useState("");

  const contactList = [
    { name: "Julian", number: "123" },
    { name: "Aurora", number: "456" },
    { name: "Julian", number: "123" },
    { name: "Aurora", number: "456" },
    { name: "Julian", number: "123" },
    { name: "Aurora", number: "456" },
    { name: "Julian", number: "123" },
    { name: "Aurora", number: "456" },
    { name: "Julian", number: "123" },
    { name: "Aurora", number: "456" },
    { name: "Julian", number: "123" },
    { name: "Aurora", number: "456" },
    { name: "Julian", number: "123" },
    { name: "Aurora", number: "456" },
    { name: "Julian", number: "123" },
    { name: "Aurora", number: "456" },
    { name: "Julian", number: "123" },
    { name: "Aurora", number: "456" },
    { name: "Julian", number: "123" },
    { name: "Aurora", number: "456" },
  ];

  React.useEffect(() => {
    setContacts(contactList)
  }, []);


  const handleSearch = (event) => {
    setSearch(event.target.value);
  };

  const filteredContacts = contacts.filter(person => person.name.includes(search))
  
  return (
    <SafeAreaProvider>
      <SafeAreaView className="flex-1 m-10">
        <Text className="text-2xl font-bold text-center font-mono">ROLODEX</Text>
        <SearchFilter handleSearch={handleSearch}/>
        <ContactList contacts={filteredContacts}/>
        <AddContact />
        <StatusBar style="auto" />
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
