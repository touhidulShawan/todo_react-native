import React from "react";
import {
  Keyboard,
  StyleSheet,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import Header from "./components/Header";
import Todos from "./containers/Todos";

const App: React.FC = () => {
  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.container}>
        <Header />
        <View style={styles.content}>
          <Todos />
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};
export default App;

const styles = StyleSheet.create({
  container: { flex: 1 },
  content: {
    padding: 40,
    flex: 1,
  },
});
