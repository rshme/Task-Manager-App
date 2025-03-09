// App.js
import React from "react";
import { StatusBar } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import TaskController from "./src/controllers/TaskController";

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar barStyle="dark-content" />
      <TaskController />
    </NavigationContainer>
  );
}
