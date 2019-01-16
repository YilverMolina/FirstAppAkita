import { ID, guid } from '@datorama/akita';

export type Todo = {
  id: ID;
  title: string;
  completed: boolean;
};

export function createTodo({ title }: Partial<Todo>) {
  return {
    id: guid(),
    title,
    completed: false
  } as Todo;
}