import React from "react";
import { StyleSheet, View } from "react-native";
import Header from "./components/Header";
import Todos from "./containers/Todos";

const App: React.FC = () => {
  return (
    <View>
      <Header />
      <View style={styles.content}>
        <Todos />
      </View>
    </View>
  );
};
export default App;

const styles = StyleSheet.create({
  content: {
    padding: 40,
  },
});
