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
      <View>
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
  content: {
    padding: 40,
  },
});
