import React from "react";
import { View, TextInput, Text, Button, TouchableOpacity, ScrollView } from "react-native";


const ContactList = (props) => {
  const contactButtons = props.contacts.map((person) => (
    <TouchableOpacity className="bg-blue-500 p-4 rounded-lg shadow-md m-1">
      <Text className="text-center text-white text-lg font-bold">{person.name}</Text>
    </TouchableOpacity>
  ));
  return (
    <ScrollView className="mb-5 mt-5 bg-gray-200">
      <View>{contactButtons}</View>
    </ScrollView>
  );
};

export default ContactList;
