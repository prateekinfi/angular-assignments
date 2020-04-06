import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { catchError, retry} from 'rxjs/operators';

import { HttpClient } from '@angular/common/http';
import { HttpErrorHandler, HandleError } from './http-error-handler.service';
import { Todo } from './todo/Todo';

@Injectable()
export class TodoService {
    private handleError: HandleError;

    constructor(
      private httpclient: HttpClient,
      httpErrorHandler: HttpErrorHandler) {
      this.handleError = httpErrorHandler.createHandleError('TodoService');
    }
   
     getData():Observable<Array<Todo>>{
        return this.httpclient
        .get<Array<Todo>>(`https://my-json-server.typicode.com/prateekinfi/dummyserver/todos`)
        .pipe(
            retry(3),
            catchError(this.handleError('todo.service.getData()', []))
        );
    
    }

}
