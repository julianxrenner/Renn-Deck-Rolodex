import React from "react";
import { View, TextInput, Text } from "react-native";

const SearchFilter = () => {
  return (
    <View className="m-3">
      <TextInput
        className="border border-black p-2 rounded-lg"
        placeholder="Search Contacts"
      />
    </View>
  );
};

export default SearchFilter;
