import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Pressable, TextInput, FlatList } from "react-native";
import { useState, useEffect } from "react";
import notesData from "./notesData.json";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import TodoListScreen from "./screens/TodoListScreen";
import DetailedNoteScreen from "./screens/DetailedNoteScreen";

const Stack = createStackNavigator();

export default function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="TodoList">
        <Stack.Screen name="TodoList" component={TodoListScreen} options={{ title: 'Todo List' }} />
        <Stack.Screen name="Details" component={DetailedNoteScreen} options={{ title: 'Details' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
