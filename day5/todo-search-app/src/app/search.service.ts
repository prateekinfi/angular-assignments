import { Injectable } from '@angular/core';
import { Todo } from './todo/Todo';

@Injectable({
    providedIn: 'root'
  })
export class SearchService{

  filterData(dataToBeFiltered: Array<Todo>, param: string, searchtext: string) :Array<Todo>{
    return dataToBeFiltered.filter(todo =>{
   //     console.log(String(todo[param]).toLowerCase(),String(todo[param]).toLowerCase().includes(searchtext.toLowerCase()))
      return String(todo[param]).toLowerCase().includes(searchtext.toLowerCase());
    });

  }
}
