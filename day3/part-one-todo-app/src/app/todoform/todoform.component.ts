import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Todo } from '../Todo';


@Component({
  selector: 'app-todoform',
  templateUrl: './todoform.component.html',
  styleUrls: ['./todoform.component.css']
})
export class TodoformComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  
  userid=0;
  id=0;
  title="";
  completed=false;

  @Output()
  evtemitter = new EventEmitter();

  addTodo(){
    console.log("data emitted:",this.userid,this.id,this.title,this.completed);
    this.evtemitter.emit(new Todo(this.userid,this.id,this.title,this.completed));
    //this.evtemitter.emit("new Todo(this.userid,this.id,this.title,this.completed)");

  }

}

