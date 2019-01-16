import { TodosStore } from './todos.store';
import { createTodo, Todo } from './todo.model';
import { Injectable } from '@angular/core';
import { VISIBILITY_FILTER } from '../filter/filter.model';
import { ID } from '@datorama/akita';

@Injectable({
  providedIn: 'root'
})
export class TodosService {

  constructor(private todosStore: TodosStore) { }

  updateFilter(filter: VISIBILITY_FILTER) {
    this.todosStore.updateRoot({
      ui: {
        filter
      }
    });
  }

  
  complete({ id, completed }: Todo) {
    this.todosStore.update(id, {
      completed
    });
  }


  add(title: string) {
    const todo = createTodo({ title });
    this.todosStore.add(todo);
  }


  delete(id: ID) {
    this.todosStore.remove(id);
  }

}
