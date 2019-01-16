import { Injectable } from '@angular/core';
import { State, TodosStore } from './todos.store';
import { Todo } from './todo.model';
import { QueryEntity } from '@datorama/akita';
import { combineLatest } from 'rxjs';
import { VISIBILITY_FILTER } from '../filter/filter.model';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TodosQuery extends QueryEntity<State, Todo> {
  selectVisibilityFilter$ = this.select(state => state.ui.filter);

  selectVisibleTodos$ = combineLatest(
    this.selectVisibilityFilter$,
    this.selectAll(),
    this.getVisibleTodos
  );

  selectAllDone$ = this.selectCount(todo => todo.completed).pipe(
    map(count => {
      return this.getCount() > 0 && count === this.getCount();
    })
  )

  constructor(protected store: TodosStore) {
    super(store);
  }


  private getVisibleTodos(filter, todos): Todo[] {
    switch (filter) {
      case VISIBILITY_FILTER.SHOW_COMPLETED:
        return todos.filter(t => t.completed);
      case VISIBILITY_FILTER.SHOW_ACTIVE:
        return todos.filter(t => !t.completed);
      default:
        return todos;
    }
  }
}
