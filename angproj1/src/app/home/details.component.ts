import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IEntry } from './entries';
import { HomeService } from './home.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  pageTitle:string = 'Weight Details'
  product:IEntry
  errorMsg:string
  constructor(private _homeService : HomeService,
    private _activatedRoute: ActivatedRoute,
    private _router:Router) { }

  ngOnInit(): void {
    let id = +this._activatedRoute.snapshot.paramMap.get('id')

    this._homeService.getEntryById(id).subscribe({
      next:data=>this.product=data,
      error:err=>this.errorMsg=<any>err
     })
  }
  onBack():void{
    this._router.navigate(['/home'])
  }
}
