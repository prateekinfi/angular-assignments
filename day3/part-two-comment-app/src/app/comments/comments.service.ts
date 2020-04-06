
import { data } from './../mockdata';
import { Comment } from './Comment';
import { Injectable } from '@angular/core';

@Injectable()
export class CommentsService{
    constructor(public commentsdata:Array<Comment> = data){}

    listData(){
        return new Promise((resolve) => {
            resolve(commentsdata);   
        });   
     }
}