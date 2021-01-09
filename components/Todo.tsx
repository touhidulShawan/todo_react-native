import * as React from "react";
import { Text, View } from "react-native";
import { Action, TodoProps } from "../containers/Todos";

interface Props extends TodoProps {
  dispatch: React.Dispatch<Action>;
}

const Todo: React.FC<Props> = (props) => {
  const { key, dispatch, isComplete, todoName } = props;
  return (
    <View>
      <Text>{todoName}</Text>
    </View>
  );
};

export default Todo;
