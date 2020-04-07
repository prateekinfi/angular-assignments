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
import { ReactiveFormsModule, FormsModule } from '@angular/forms'
import { SearchService } from './search.service';


@NgModule({
  declarations: [
    AppComponent,
    TodoComponent,
    MessageComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [MessageService,
    SearchService,
    HttpErrorHandler,
    TodoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
