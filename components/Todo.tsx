import * as React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Action, TodoProps } from "../containers/Todos";
import { MaterialIcons } from "@expo/vector-icons";

interface Props extends TodoProps {
  dispatch: React.Dispatch<Action>;
}

const Todo: React.FC<Props> = (props) => {
  const { id, dispatch, isComplete, todoName } = props;

  const toggleComplete = (id: number) => {
    dispatch({ type: "toggleTodo", payload: { id: id } });
  };

  const deleteTodo = (id: number) => {
    dispatch({ type: "deleteTodo", payload: { id: id } });
  };

  return (
    <View
      style={{
        flex: 1,
        marginTop: 10,
        marginBottom: 10,
      }}
    >
      <TouchableOpacity onPress={() => toggleComplete(id)}>
        <View style={styles.items}>
          <Text
            style={[
              styles.text,
              isComplete ? styles.completed : styles.not__completed,
            ]}
          >
            {todoName}
          </Text>
          <MaterialIcons
            name="delete"
            size={20}
            color="#DC2626"
            onPress={() => deleteTodo(id)}
          />
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default Todo;

const styles = StyleSheet.create({
  items: {
    backgroundColor: "#F5D0FE",
    padding: 10,
    borderRadius: 3,
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  text: {
    color: "#86198F",
    fontSize: 14,
  },
  completed: {
    textDecorationLine: "line-through",
  },
  not__completed: {
    textDecorationLine: "none",
  },
});
