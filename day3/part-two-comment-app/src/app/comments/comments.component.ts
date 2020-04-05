import { Component, OnInit } from '@angular/core';
import { CommentsService } from './comments.service';
import { data } from './../mockdata';
import { Comment } from '@angular/compiler';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css'],
  providers: [CommentsService]
})
export class CommentsComponent implements OnInit {
  data: Array<Comment> = [];

  cmtService = new CommentsService();

  ngOnInit() {
    this.cmtService.listData().then(comment => {
    this.data= comment;
     // console.log(this.data);
      //console.log(comment);

    });
  }

}
