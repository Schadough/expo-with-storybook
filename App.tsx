import React from "react";
import {
  SafeAreaView,
  Text,
} from "react-native";
import { __STORYBOOK__ } from "./config";
import Storybook from "./stories/Storybook";

const App = ({}) => {

  // Development Environment for Storybook
  return __STORYBOOK__ ? <Storybook />
  : (
    <SafeAreaView>
      <Text>Hello From App</Text>
    </SafeAreaView>
  )
};

export default App;