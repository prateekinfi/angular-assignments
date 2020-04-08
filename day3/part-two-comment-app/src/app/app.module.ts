import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CommentsComponent } from './comments/comments.component';
import { CommentsService } from './comments/comments.service';

@NgModule({
  declarations: [
    AppComponent,
    CommentsComponent
  ],
  imports: [
  BrowserModule,
    AppRoutingModule
  ],
  providers: [CommentsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
