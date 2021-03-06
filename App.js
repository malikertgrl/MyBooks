import React from "react";
import { View, Text } from "react-native";
import Router from "./src/navigation/Router";
import { Provider } from "react-redux";
import { Store } from "./src/redux/Store";

const App = () => {
  return (
    <Provider store={Store}>
      <Router />
    </Provider>
  )
}

export default App;