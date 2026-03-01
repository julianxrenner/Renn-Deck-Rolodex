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
    { name: "Julian", number: "123", id : '1' },
    { name: "Aurora", number: "456", id : '2' },
    { name: "Julian", number: "123", id : '3' },
    { name: "Aurora", number: "456", id : '4' },
    { name: "Julian", number: "123", id : '5' },
    { name: "Aurora", number: "456", id : '6' },
    { name: "Julian", number: "123", id : '7' },
    { name: "Aurora", number: "456", id : '8' },
    { name: "Julian", number: "123", id : '9' },
    { name: "Aurora", number: "456", id : '10' },
  ];

  React.useEffect(() => {
    setContacts(contactList)
  }, []);

  const filteredContacts = contacts.filter(person => person.name.toLowerCase().includes(search.toLowerCase()))
  
  return (
    <SafeAreaProvider>
      <SafeAreaView className="flex-1 m-10">
        <Text className="text-2xl font-bold text-center font-mono">ROLODEX</Text>
        <SearchFilter search={search} setSearch={setSearch}/>
        <ContactList contacts={filteredContacts}/>
        <AddContact />
        <StatusBar style="auto" />
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
