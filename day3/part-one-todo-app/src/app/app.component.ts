import { Component } from '@angular/core';
import { data } from './mockdata';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'part-one-todo-app';
  datalist = data;
}
