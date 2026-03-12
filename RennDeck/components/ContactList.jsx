import React from "react";
import {
  View,
  TextInput,
  Text,
  TouchableOpacity,
  ScrollView,
  FlatList,
} from "react-native";

import { Link } from "@react-navigation/native";
import { Button } from "@react-navigation/elements";

const ContactList = (props) => {
  const contactButtons = props.contacts.map((person) => (
    <Button
      screen=""
      key={person.id}
      className="bg-blue-500 rounded-lg p-4 shadow-md m-1 mx-4"
    >
      <Text className="text-center text-white text-lg font-bold">
        {person.name}
      </Text>
    </Button>
  ));
  return (
    <ScrollView className="my-5 bg-gray-200 rounded-lg">
      <View className="my-5">{contactButtons}</View>
    </ScrollView>
  );
};

export default ContactList;
