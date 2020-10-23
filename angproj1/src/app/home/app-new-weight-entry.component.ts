import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { Home } from './home';

@Component({
  selector: 'app-app-new-weight-entry',
  templateUrl: './app-new-weight-entry.component.html',
  styleUrls: ['./app-new-weight-entry.component.css']
})
export class AppNewWeightEntryComponent implements OnInit {
  home:Home = new Home();
  @Input() showbodyfat
  
  @Output() emitter=new EventEmitter<object>()
  date:string
  weight:number
  bodyfat:number
  weightForm:FormGroup
  constructor(private fb:FormBuilder,private http:HttpClient) { }

  ngOnInit(): void {
    this.weightForm=this.fb.group({
      date:['',[Validators.required,Validators.pattern("(0[1-9]|1[0-9]|2[0-9]|3[01]).(0[1-9]|1[012]).[0-9]{4}")]],
      bodyfat:['',[Validators.required,Validators.pattern("[0-9]+")]],
      weight:['',[Validators.required,Validators.pattern("[0-9]+")]]
    })
  }
  // saveData(custForm:NgForm):void{
  //   console.log(custForm.form)
  //   console.log(`Saved Cust Data: ${JSON.stringify(custForm.value)}`)
  //   this.create.emit(custForm.value)
  //   // this.create.emit({id:1,weight:123,date:20/10/2020,bodyfat:12})
  // }

  saveWeightForm():void{
    console.log(this.weightForm)
    this.emitter.emit(this.weightForm.value)
  }

}
