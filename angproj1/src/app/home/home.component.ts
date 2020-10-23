import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { IEntry } from './entries';
import { Home } from './home';
import { HomeService } from './home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  pageTitle = "Your Weight Entries"
  showFat:boolean = true
  constructor(private _homeService : HomeService) { }

  
  errorMessage:string
  entries:IEntry[]
  
  ngOnInit(): void {
    // this.entries = this._homeService.getEntry()
    //subscribing to obserable
    this._homeService.getEntry().subscribe({
      next:data=>this.entries=data,
      error:err=>this.errorMessage=<any>err
     })
  }
  
  toggleFat():void{
    this.showFat = !this.showFat
  }

  createNew(obj:object):void{
    console.log(obj.valueOf())
  }
}
