import { v4 as uuid4 } from 'uuid';

export class Todo {
  id: string;
  text: string;

  constructor(
    text: string
  ) {
    this.id = uuid4();
    this.text = text;
  }
}
