import * as React from "react";
import { useReducer } from "react";
import { FlatList, View } from "react-native";
import Todo from "../components/Todo";
import TodoForm from "../components/TodoForm";

export interface TodoProps {
  id: number;
  todoName: string;
  isComplete: boolean;
}

interface AddTodo {
  type: "addTodo";
  payload: { name: string };
}

interface ModifyTodo {
  type: "toggleTodo" | "deleteTodo";
  payload: { id: number };
}

export type Action = AddTodo | ModifyTodo;

const reducer = (todos: Array<TodoProps>, action: Action) => {
  switch (action.type) {
    case "addTodo":
      return [...todos, newTodo(action.payload.name)];
    case "toggleTodo":
      return todos.map((todo) => {
        if (todo.id === action.payload.id) {
          return { ...todo, isComplete: !todo.isComplete };
        }
        return todo;
      });
    case "deleteTodo":
      return todos.filter((todo) => todo.id !== action.payload.id);
    default:
      return todos;
  }
};

const newTodo = (todoName: string): TodoProps => {
  return { id: Date.now(), todoName, isComplete: false };
};

const Todos: React.FC = () => {
  const [todos, dispatch] = useReducer(reducer, []);

  const renderTodos = (
    <FlatList
      data={todos}
      renderItem={({ item }) => (
        <Todo
          id={item.id}
          todoName={item.todoName}
          isComplete={item.isComplete}
          dispatch={dispatch}
        />
      )}
    />
  );
  return (
    <View>
      <TodoForm dispatch={dispatch} />
      {renderTodos}
    </View>
  );
};

export default Todos;
