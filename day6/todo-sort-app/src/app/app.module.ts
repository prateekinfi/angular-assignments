import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TodoComponent } from './todo/todo.component';
import { MessageComponent } from './message/message.component';
import { MessageService } from './message.service';
import { HttpErrorHandler } from './http-error-handler.service';
import { TodoService } from './todo.service';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms'
import { SortPipe } from './pipes/sort.pipe';


@NgModule({
  declarations: [
    AppComponent,
    TodoComponent,
    MessageComponent,
    SortPipe
  ],
  imports: [
  BrowserModule,
  ReactiveFormsModule,
    FormsModule,
  HttpClientModule
],
  providers: [MessageService,HttpErrorHandler,TodoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
