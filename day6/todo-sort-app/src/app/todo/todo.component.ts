import { Component, OnInit } from '@angular/core';
import { TodoService } from './../todo.service';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { Todo } from './Todo';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  todolist: Observable<Array<Todo>>;
  order: string = "asc";
  orderInput : FormControl;
  constructor(private todoservice:TodoService) { }

  ngOnInit(): void {
    this.orderInput= new FormControl("asc");
    //this.todoservice.getData().subscribe(i=>this.todolist=i);
    this.todolist=this.todoservice.getData();
  }

  sort(){
    this.order= this.orderInput.value;
  }

}
