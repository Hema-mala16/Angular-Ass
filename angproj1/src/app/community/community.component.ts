import { Component, OnInit } from '@angular/core';
import { IComment } from './comment';
import { CommunityService } from './community.service';

@Component({
  selector: 'app-community',
  templateUrl: './community.component.html',
  styleUrls: ['./community.component.css']
})
export class CommunityComponent implements OnInit {

  constructor(private _commentService : CommunityService) { }
comments:IComment[]
errorMessage:string
  ngOnInit(): void {
    this._commentService.getEntry().subscribe({
      next:data=>this.comments=data,
      error:err=>this.errorMessage=<any>err
     })
  }

}
