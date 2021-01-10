import * as React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Action, TodoProps } from "../containers/Todos";

interface Props extends TodoProps {
  dispatch: React.Dispatch<Action>;
}

const Todo: React.FC<Props> = (props) => {
  const { id, dispatch, isComplete, todoName } = props;

  const prassHandler = (id: number) => {
    dispatch({ type: "toggleTodo", payload: { id: id } });
  };

  return (
    <View style={{ marginTop: 10, marginBottom: 10 }}>
      <TouchableOpacity onPress={() => prassHandler(id)}>
        <Text
          style={[
            styles.todo__text,
            isComplete ? styles.completed : styles.not__completed,
          ]}
        >
          {todoName}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Todo;

const styles = StyleSheet.create({
  todo__text: {
    backgroundColor: "#F5D0FE",
    color: "#86198F",
    padding: 15,
    borderRadius: 3,
    fontSize: 16,
  },
  completed: {
    textDecorationLine: "line-through",
  },
  not__completed: {
    textDecorationLine: "none",
  },
});
