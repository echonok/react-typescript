import React, { useContext } from 'react';

import { TodoItem } from '../TodoItem/TodoItem';
import classes from './Todos.module.css';
import { TodosContext } from '../../store/todos-context';

export const Todos: React.FC = (props) => {
  const todosCtx = useContext(TodosContext);
  return (
    <ul className={classes.todos}>
      {todosCtx.items.map((item) => (
        <TodoItem
          key={item.id}
          todoText={item.text}
          onRemoveTodo={todosCtx.removeTodo.bind(null, item.id)}
        />
      ))}
    </ul>
  );
}
