import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TodoComponent } from './todo/todo.component';
import { MessageComponent } from './message/message.component';
import { MessageService } from './message.service';
import { HttpErrorHandler } from './http-error-handler.service';
import { TodoService } from './todo.service';
import { HttpClientModule } from '@angular/common/http';
import { SearchComponent } from './search/search.component';


@NgModule({
  declarations: [
    AppComponent,
    TodoComponent,
    MessageComponent,
    SearchComponent
  ],
  imports: [
  BrowserModule,
  HttpClientModule
],
  providers: [MessageService,HttpErrorHandler,TodoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
