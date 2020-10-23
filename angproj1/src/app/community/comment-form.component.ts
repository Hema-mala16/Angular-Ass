import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-comment-form',
  templateUrl: './comment-form.component.html',
  styleUrls: ['./comment-form.component.css']
})
export class CommentFormComponent implements OnInit {
  commRForm:FormGroup;
  constructor(private fb:FormBuilder) { }

  ngOnInit(): void {
    this.commRForm= this.fb.group({
      comment:['',[Validators.required,Validators.maxLength(10)]]
      })
  }
  saveCustForm():void{
    console.log(this.commRForm)
    console.log(`Saved data Reactive: ${this.commRForm.value}`)
  }

}
