import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError, } from 'rxjs';
import { catchError,map,tap } from 'rxjs/operators';
import { IEntry } from './entries';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  entries:IEntry[]
  private entryUrl:string = 'https://localhost:44341/api/weightapi'
  constructor(private _httpClient:HttpClient) { }

  // getEntry():IEntry[]{
  //   return this.entries;
  // }
  getEntry():Observable<IEntry[]>{
    
    return this._httpClient.get<IEntry[]>(this.entryUrl).pipe(
tap((data)=>console.log(`All Entry: ${JSON.stringify(data)}`)),
catchError(this.handleError)
    )
  }
  // getEntryById(id:number):Observable<IEntry>{
  //   return this.getEntry().pipe(
  //     map((product:IEntry[])=>product.find(p=>p.id===id)),
  //     catchError(this.handleError)
  //   )
  // }
  getEntryById(id:number): Observable<IEntry> {
    const url = `${this.entryUrl}/${id}`;
     return this._httpClient.get<IEntry>(url)
    .pipe(
      tap((data) =>console.log(`fetched Entry by id=${id}`)),
      catchError(this.handleError)
    );
  }
  

  
  handleError(err){
    let errorMsg=''
    if(err.error instanceof Error){
      errorMsg = `An error occured : ${err.error.message}`;
    }
    else{
      errorMsg = `Server returned code: ${err.status} error message is : ${err.message}`
    }
    console.log(errorMsg)
    return throwError
  }
}
