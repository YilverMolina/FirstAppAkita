import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoComponent } from './todo.component';
import { TodosComponent } from './todos.component';
import { ReactiveFormsModule } from '@angular/forms';
import { TodosFiltersComponent } from './filter/filters.component';
import { RouterModule, Routes } from '@angular/router';
import { TodosPageComponent } from './todos-page/todos-page.component';

@NgModule({
  imports: [CommonModule, ReactiveFormsModule],
  exports: [TodosComponent, TodosFiltersComponent],
  declarations: [TodoComponent, TodosComponent, TodosFiltersComponent, TodosPageComponent]
})
export class TodosModule {}
