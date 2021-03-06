import { Component, OnInit } from '@angular/core';
import { TodoService } from './../todo.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  todolist;
  backuplist;
  constructor(private todoservice: TodoService) { }

  ngOnInit(): void {
    this.todoservice.getData().subscribe(i => {
      this.todolist = i;
      this.backuplist = this.todolist;
    });

  }
  updateData(data) {
    this.todolist = data;
  }

}
