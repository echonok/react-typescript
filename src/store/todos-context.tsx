import React, { useState } from 'react';

import { Todo } from '../models/todo.model';
import { Props } from '../interfaces/props.interface';

type TodosContextObj = {
  items: Todo[],
  addTodo: (text: string) => void,
  removeTodo: (id: string) => void,
}

export const TodosContext = React.createContext<TodosContextObj>({
  items: [],
  addTodo: () => {
  },
  removeTodo: (id: string) => {
  },
});

export const TodosContextProvider: React.FC<Props> = (props) => {
  const [todos, setTodos] = useState<Todo[]>([]);

  const addTodoHandler = (text: string) => {
    setTodos((prevTodos) => [...prevTodos, new Todo(text)]);
  };

  const removeTodoHandler = (id: string) => {
    setTodos((prevTodos) => {
      return prevTodos.filter((todo) => todo.id !== id);
    })
  };

  const contextValue: TodosContextObj = {
    items: todos,
    addTodo: addTodoHandler,
    removeTodo: removeTodoHandler,
  };

  return <TodosContext.Provider value={contextValue}>
    {props.children}
  </TodosContext.Provider>;
}
