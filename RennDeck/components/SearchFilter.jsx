import React from "react";
import { View, TextInput, Text } from "react-native";

const SearchFilter = (props) => {
  return (
    <View className="m-3">
      <TextInput
        className="border border-black p-2 rounded-lg font-bold text-lg"
        placeholder="Search Contacts"
        onChangeText={newValue=> props.setSearch(newValue)}
      />
    </View>
  );
};

export default SearchFilter;
