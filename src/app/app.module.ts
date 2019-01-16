import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { TodosModule } from './todos/todos.module';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './routing/routing.module';
import { AkitaNgDevtools } from '@datorama/akita-ngdevtools';
import { APP_BASE_HREF } from '@angular/common';

@NgModule({
  providers: [{ provide: APP_BASE_HREF, useValue: '/my/app' }],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    TodosModule,
    AppRoutingModule,
    AkitaNgDevtools.forRoot()
  ],
  declarations: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
