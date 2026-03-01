import React from "react";
import { View, TextInput, Text, Button, TouchableOpacity, ScrollView } from "react-native";

const AddContact = () => {
  return (
    <View>
        <TouchableOpacity className="bg-blue-500 p-4 rounded-lg shadow-md m-1">
            <Text className="text-center text-white font-bold text-xl">ADD CONTACT</Text>
        </TouchableOpacity>
    </View>
  );
};

export default AddContact;
