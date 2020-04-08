import { Component, OnInit } from '@angular/core';
import { CommentsService } from './comments.service';
import { Comment } from './Comment';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {
  data: Array<Comment>;

  //cmtService = new CommentsService();
  constructor(public cmtService :CommentsService){}

  ngOnInit() {
    this.cmtService.listData().then(comment => {
    this.data= comment;
     // console.log(this.data);
});
  }

}
