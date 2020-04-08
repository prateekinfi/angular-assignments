import { Pipe, PipeTransform } from '@angular/core';
import { Todo } from './../todo/Todo';

@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {

  transform(todolist: Array<Todo>, order : string): Array<Todo> {
    todolist.sort((a,b)=>{
      if(order == "dsc"){
        return b.id-a.id;
      }else{
        return a.id-b.id;
      }
    })
    return todolist;
  }

}
