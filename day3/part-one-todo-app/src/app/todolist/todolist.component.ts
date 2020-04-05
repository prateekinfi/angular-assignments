import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css']
})
export class TodolistComponent implements OnInit {
  ngOnInit(): void {
  }

  @Input()
  todolist;

  addTodoToList(event) {
    console.log(event);
    this.todolist.splice(0,0,event);
  }

  completeTodo(id) {
    console.log(id);
    this.todolist.splice(this.todolist.findIndex(i => i.id == id), 1);
  }





}
