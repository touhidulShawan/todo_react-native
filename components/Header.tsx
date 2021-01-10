import * as React from "react";
import { StyleSheet, View, Text } from "react-native";

const Header: React.FC = () => {
  return (
    <View style={styles.header}>
      <Text style={styles.title}>My Todos</Text>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  header: {
    backgroundColor: "#0F766E",
    height: 80,
    padding: 45,
  },
  title: {
    color: "#CCFBF1",
    textAlign: "center",
    fontSize: 22,
    fontWeight: "bold",
  },
});
