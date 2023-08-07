import React from 'react';
import { Props } from '../../interfaces/props.interface';

import classes from './TodoItem.module.css';

export const TodoItem: React.FC<Props & { todoText: string, onRemoveTodo: () => void }> = (props) => {
  return <li className={classes.item} onClick={props.onRemoveTodo} >{props.todoText}</li>
}
