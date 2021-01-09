import React from "react";
import { StyleSheet, View } from "react-native";
import Todos from "./containers/Todos";

const App: React.FC = () => {
  return (
    <View style={styles.container}>
      <Todos />
    </View>
  );
};
export default App;

const styles = StyleSheet.create({
  container: {
    padding: 40,
  },
});
