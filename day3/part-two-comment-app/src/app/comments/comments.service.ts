
import { data } from './../mockdata';
import { Comment } from './Comment';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn:"root"
})
export class CommentsService{
    constructor(public commentsdata:Array<Comment> = data){}

    listData():Promise<Array<Comment>>{
        return new Promise((resolve) => {
            resolve(this.commentsdata);   
        });   
     }
  
}
