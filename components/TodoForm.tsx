import * as React from "react";
import { useState } from "react";
import { Action } from "../containers/Todos";
import { StyleSheet, Button, TextInput, View } from "react-native";

interface Props {
  dispatch: React.Dispatch<Action>;
}

const TodoForm: React.FC<Props> = ({ dispatch }) => {
  const [todoName, setTodoName] = useState<string>("");

  const handleSubmit = () => {
    dispatch({ type: "addTodo", payload: { name: todoName } });
    setTodoName("");
  };

  return (
    <View style={{ marginBottom: 20 }}>
      <TextInput
        style={styles.input}
        placeholder="Your todo..."
        value={todoName}
        onChangeText={(value) => setTodoName(value)}
      />
      <Button title="Add Todo" onPress={handleSubmit} />
    </View>
  );
};
export default TodoForm;

const styles = StyleSheet.create({
  input: {
    padding: 5,
    borderBottomWidth: 1,
    borderBottomColor: "#D1FAE5",
    marginBottom: 20,
  },
});
